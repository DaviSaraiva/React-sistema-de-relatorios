import React, { useEffect, useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const DatatablePage = () => {
  const [informacoes, setInformacoes] = useState([]);
  const [inicial, setInicial] = useState("2020-01-01");
  const [final, setFinal] = useState("2020-12-31");
  const [tipo, setTipo] = useState("1");
  const [status, setStatus] = useState("0");

  useEffect(() => {
    axios.get('http://139.162.233.71:8081/finaceirogeral').then(response => {
        setInformacoes(response.data)
    })
}, []);
  
   
  let data = {
    columns: [
      {label: 'Tipo do Pedido',field: 'TipPed',sort: 'asc',width: 50},
      {label: 'Situação',field: 'Situ',sort: 'asc',width: 50},
      {label: 'Quantidade de pedidos',field: 'QntPed',sort: 'asc',width: 50},
      {label: 'Valor Total',field: 'ValTotal',sort: 'asc',width: 150},

    ],   
    rows: []
  };
       
  informacoes.forEach((pedido,indice) => {
    const tradutor =  pedido.TIPO_PEDIDO===0 ? 'Recarga' : 'Cartão'; 

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
    else{
      status="sem retorno";
    }

    data["rows"].push(
      {
        TipPed:tradutor,
        Situ:status,
        QntPed:pedido.Quantidade_de_Pedido + " Pedidos",
        ValTotal: " R$ " + pedido.Valor_Total,
      }
    )
  });
  const mudarNomeInicial=(evento)=>{
    const novoValor=evento.target.value;
    setInicial(novoValor);
  }

  const mudarNomeFinal=(evento)=>{
    const novoValor=evento.target.value;
    setFinal(novoValor);
  }

  const mudarPedido=(evento)=>{
    const novo1=evento.target.value;
    setTipo(novo1);
  }

  const mudarStatus=(evento)=>{
    const novo=evento.target.value;
    setStatus(novo);
  }

  const filtro=(evento)=>{
    axios.post('http://139.162.233.71:8081/finaceirogeral',{'inicial':inicial,'final':final,'tipo':tipo,'status':status}).then(response => {
        setInformacoes(response.data)
    });
    
  }

  return (
    <div>
    <h1><br/><center>Relatório Financeiro Geral</center></h1><br/>

    <div class="container">
      <div class="row">
        <div class="col-sm">
            <label > 
            <FormLabel ><strong>Intervalo entre datas</strong></FormLabel>
            <RadioGroup>
                Data inicial: <input type="date" value={inicial} onChange={mudarNomeInicial} /><br/> 
                Data final: <input  type="date" value={final} onChange={mudarNomeFinal} /> 

            </RadioGroup>
                 
            </label>
        </div>
        <div class="col-sm">
        <FormControl>
        <FormLabel><strong>Tipo do Pedido</strong></FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={tipo} onChange={mudarPedido}>
                  <FormControlLabel value="0" control={<Radio />} label="Recarga" />
                  <FormControlLabel value="1" control={<Radio />} label="Cartao" />
              </RadioGroup>
        </FormControl>
        </div>

        <div class="col-sm">
        <FormControl >
      <FormLabel ><strong>Status do pagamento</strong></FormLabel>
      <RadioGroup aria-label="gender" name="gender2" value={status} onChange={mudarStatus}>
        <FormControlLabel value="0" control={<Radio />} label="0_Aguardando pagamento" />
        <FormControlLabel value="1" control={<Radio />} label="1_Aprovado" />
        <FormControlLabel value="8" control={<Radio />} label="8_Rejeitado" />
        <FormControlLabel value="9" control={<Radio />} label="9_Cancelado" />
      </RadioGroup>
      </FormControl>     

        </div>
        <FormControl>
          <button type="button" class="btn btn-primary" onClick={filtro}>Filtrar Relatorios</button>
        </FormControl>
     
    
    </div>
  </div>

    
  <div class="container">
  <MDBDataTable
      striped
      bordered
      hover
      responsive true
      data={data}
      
    />
  </div>
    </div>
    
  );
}

export default DatatablePage;

