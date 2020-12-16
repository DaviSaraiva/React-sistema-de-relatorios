import React, { useEffect, useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import { format } from 'date-fns';
import axios from 'axios';
import * as GoIcons from "react-icons/go";


const DatatablePage = () => {
  const [informacoes, setInformacoes] = useState([]);
  useEffect(() => {
    axios.get('http://139.162.233.71:8081/pagamentoscartao').then(response => {
      // console.log(response)
        setInformacoes(response.data)
    })
}, []);
  
  let data = {
    columns: [
      {label: 'ID',field: 'id',sort: 'asc',width: 30},
      {label: 'NOME',field: 'name',sort: 'asc',width: 150},
      {label: 'CPF',field: 'cpf',sort: 'asc',width: 50},
      {label: 'TIPO DO PEDIDO',field: 'TipPed',sort: 'asc',width: 50},
      {label: 'Valor',field: 'valor',sort: 'asc',width: 50},
      {label: 'TIPO DO PAGAMENTO',field: 'TipPag',sort: 'asc',width: 50},
      {label: 'CELULAR',field: 'cel',sort: 'asc',width: 200},
      {label: 'DATA DO PEDIDO ',field: 'datPed',sort: 'asc',width: 150},
      {label: 'DATA DO PAGAMENTO',field: 'datPag',sort: 'asc',width: 100},
      {label: 'STATUS DO PAGAMENTO',field: 'status',sort: 'asc',width: 80},
      {label: 'MENSAGEM DE PAGAMENTO',field: 'mens',sort: 'asc',width: 80},
      {label: 'COMPROVANTE DO IUGU',field: 'url',sort: 'asc',width: 80}

    ],
    
    rows: []
  };
       
  informacoes.forEach((pedido,indice) => {
    const tradutor =  pedido.TIPO_PEDIDO===0 ? 'RECARGA' : 'CARTÃO'  ;
    const tradutorStatus=  pedido.STATUS_PAGAMENTO;
    let status="";
    if (tradutorStatus===0) {
      status='AGUARDANDO APROVAÇÃO';
    } 
    else if (tradutorStatus===1)  {
      status='APROVADO';
    }
     else if (tradutorStatus===8)  {
      status='REJEITADO';
    } 
    else if(tradutorStatus===9)  {
      status='CANCELADO';
    }
    const linkConf = pedido.URL_PAGAMENTO;
    let link= <a href={linkConf} target={"blank"}><GoIcons.GoLinkExternal />COMPROVANTE</a>
      
    const datapag= format(new Date(pedido.DATA_PAGAMENTO), 'dd/MM/yyyy');
    let dt="";
    if(datapag==='31/12/1969'){
      dt='--/--/----';
    }
    else{
      dt=datapag;
    }

    const tradutorPagemento=  pedido.TIPO_PAGAMENTO;
    let tipoP="";
    if (tradutorPagemento===1) {
      tipoP='CARTÃO DE CRÉDITO';
    } 
    if (tradutorPagemento===2) {
      tipoP='BOLETO';
    } 
    if (tradutorPagemento===3) {
      tipoP='CARTÃO DE DÉBITO';
    } 

    
    data["rows"].push(
      {
        id: ++indice,
        name: pedido.pessoa.NOME,
        cpf: pedido.pessoa.CPF,
        TipPed:tradutor,
        TipPag:tipoP,
        valor:" R$ " + pedido.VALOR_TOTAL,
        cel:pedido.pessoa.CELULAR,
        datPed:format(new Date(pedido.DATA_PEDIDO), 'dd/MM/yyyy'),
        datPag:dt,
        mens:pedido.MENSAGEM_PAGAMENTO,
        status:status,
        url:link
      }
    )
  });

  
  return (
    <div>
    <h1><br/><center>Relatório de Pagamentos com Cartão</center></h1>
    <MDBDataTable
      striped
      bordered
      hover
      responsive true
      data={data}
      
    />
    </div>
    
  );
}

export default DatatablePage;


