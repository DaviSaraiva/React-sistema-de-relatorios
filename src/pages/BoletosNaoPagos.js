import React, { useEffect, useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import { format } from 'date-fns';

import axios from 'axios';

const DatatablePage = () => {
  const [informacoes, setInformacoes] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/boletosnaopagos').then(response => {
      console.log(response)
        setInformacoes(response.data)
    })
}, []);
  
  let data = {
    columns: [
      {label: 'Id',field: 'id',sort: 'asc',width: 30},
      {label: 'Nome',field: 'name',sort: 'asc',width: 150},
      {label: 'CPF',field: 'cpf',sort: 'asc',width: 50},
      {label: 'Tipo do Pedido',field: 'TipPed',sort: 'asc',width: 50},
      {label: 'Valor',field: 'valor',sort: 'asc',width: 50},
      {label: 'Tipo do Pagamento',field: 'TipPag',sort: 'asc',width: 50},
      {label: 'Celular',field: 'cel',sort: 'asc',width: 200},
      {label: 'Data do Pedido ',field: 'datPed',sort: 'asc',width: 150},
      {label: 'Status do pagamento',field: 'status',sort: 'asc',width: 80},
      {label: 'Mensagem de Pagamento',field: 'mens',sort: 'asc',width: 80},

    ],
    
    rows: []
  };
       
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

    data["rows"].push(
      {
        id: ++indice,
        name: pedido.pessoa.NOME,
        cpf: pedido.pessoa.CPF,
        TipPed:tradutor,
        TipPag:tipoP,
        valor:pedido.VALOR_TOTAL,
        cel:pedido.pessoa.CELULAR,
        datPed:format(new Date(pedido.DATA_PEDIDO), 'dd/MM/yyyy'),
        mens:pedido.MENSAGEM_PAGAMENTO,
        status:status
      }
    )
  });
  console.log(data)

  return (
    <div>
    <h1><br/><center>Relatório de Boletos não pagos</center></h1>
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

// const linkConf = pedido.URL_PAGAMENTO;
    // let link= "";
    // if(link==='localhost:3000') {
    //   link="Não ha link";
    // } else {
    //   link=<a href={linkConf} target={"_blank"}>Link de pagamento</a>;

    // }