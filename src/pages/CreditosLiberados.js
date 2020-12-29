import React, { useEffect, useState} from 'react';
import { MDBDataTable  } from 'mdbreact';
import { format } from 'date-fns';
import axios from 'axios';
import * as GoIcons from "react-icons/go";


const DatatablePage = () => {
  const [informacoes, setInformacoes] = useState([]);
  useEffect(() => {
    axios.get('http://139.162.233.71:8081/credLiberados').then(response => {
        setInformacoes(response.data)
    })
}, []);
  
  let data = {
    columns: [
      {label : 'Id',field: 'id',sort: 'asc',width: 30 },
      {label: 'Nome',field: 'name',sort: 'asc',width: 150},
      {label: 'CPF',field: 'cpf',sort: 'asc',width: 50},
      {label: 'Tipo do Pedido',field: 'TipPed',sort: 'asc',width: 50},
      {label: 'Numero Cartão',field: 'NumCart',sort: 'asc',width: 50},
      {label: 'Valor',field: 'valor',sort: 'asc',width: 50},
      {label: 'Tipo do Pagamento',field: 'TipPag',sort: 'asc',width: 50},
      {label: 'Data do Pedido ',field: 'datPed',sort: 'asc',width: 150},
      {label: 'Data do pagamento',field: 'datPag',sort: 'asc',width: 100},
      {label: 'Status do pagamento',field: 'status',sort: 'asc',width: 80},
      {label: 'Mensagem de Pagamento',field: 'mens',sort: 'asc',width: 80},
      {label: 'Comprovante IUGU',field: 'url',sort: 'asc',width: 80},
      {label: 'Liberar Crédito?',field: 'check',sort: 'asc',width: 80}

    ],
    
    rows: []
  };
    const liberarCredito= (evento) =>{
    const pedidoID = evento.target.name;
    axios.post('http://139.162.233.71:8081/retornacredito',{'pedido_id':pedidoID}).then(response => {
      setInformacoes(response.data)
  });
  }

  informacoes.forEach((pedido,indice) => {
    const tradutor =  pedido.TIPO_PEDIDO===0 ? 'Recarga' : 'Cartão'  ;
    const tradutorStatus=  pedido.STATUS_PAGAMENTO;
    let status="";
    if (tradutorStatus===0) {
      status='Aguardando aprovação';
    } 
    else if (tradutorStatus===1)  {
      status='Aprovado';
    }
     else if (tradutorStatus===8)  {
      status='Rejeitado';
    } 
    else if(tradutorStatus===9)  {
      status='Cancelado';
    }
    const linkConf = pedido.URL_PAGAMENTO;
    let link= <a href={linkConf} target={"blank"}><GoIcons.GoLinkExternal />Comprovante</a>
      
    
    const tradutorPagemento=  pedido.TIPO_PAGAMENTO;
    let tipoP="";
    if (tradutorPagemento===1) {
      tipoP='Cartão de crédito';
    } 
    if (tradutorPagemento===2) {
      tipoP='Boleto';
    } 
    if (tradutorPagemento===3) {
      tipoP='Cartão de débito';
    } 

    const datapag= pedido.DATA_PAGAMENTO;
    let dt="";
    if(datapag===null){
      dt="sem data";
    }
    else{
      dt=datapag;
    }
    
    
    data["rows"].push(
      {
        id: ++indice,
        name: pedido.pessoa.NOME,
        cpf: pedido.pessoa.CPF,
        TipPed:tradutor,
        NumCart:pedido.pessoasbeneficio.NUMERO_CARTAO,
        valor:"R$ " + pedido.VALOR_TOTAL,
        TipPag:tipoP,
        datPed:format(new Date(pedido.DATA_PEDIDO), 'dd/MM/yyyy'),
        datPag:format(new Date(dt), 'dd/MM/yyyy'),
        mens:pedido.MENSAGEM_PAGAMENTO,
        status:status,
        url:link,
        check:<input type="button" onClick={liberarCredito} value="Desmarcar" name={pedido.ID_PEDIDO}/>
      }
    )
  });

 
  return (
    <div>
    <h1><br/><center>Relatório de Créditos Liberados</center></h1>
    <MDBDataTable
      bordered
      hover
      responsive true
      data={data}
       
    />
    
    </div> 
  );
}

export default DatatablePage;

