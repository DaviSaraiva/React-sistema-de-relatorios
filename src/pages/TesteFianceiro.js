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
  
  const [value, setValue] = useState('cartao');
  const Opcao = (event) => {
    setValue(event.target.value);
  };


  useEffect(() => {
    axios.get('http://localhost:8081/finaceiroRecarga').then(response => {
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
    data["rows"].push(
      {
        TipPed:tradutor,
        QntPed:pedido.Quantidade_de_Pedido + " Pedidos",
        ValTotal: " R$ " + pedido.Valor_Total,
      }
    )
  });
  const mudarNomeInicial=(evento)=>{
    const novoValor=evento.target.value;
    console.log(novoValor)
    setInicial(novoValor);
  }

  const mudarNomeFinal=(evento)=>{
    const novoValor=evento.target.value;
    console.log(novoValor)
    setFinal(novoValor);
  }

  const filtro=(evento)=>{
    
    axios.post('http://localhost:8081/finaceiroRecarga',{'inicial':inicial,'final':final}).then(response => {
        setInformacoes(response.data)
    });
  }

  return (
    <div>
    <h1><br/><center>Relatório Financeiro de Recargas</center></h1>

    <form>

   <label > 
      Data inicial: <input type="date" value={inicial} onChange={mudarNomeInicial} /> 
   </label>

   <label > 
      Data final: <input  type="date" value={final} onChange={mudarNomeFinal} /> 
   </label> 

    <button type="button" onClick={filtro}>Pesquisar datas</button>
</form> 


    <FormControl component="fieldset">
      <FormLabel component="legend">Tipo do Pedido</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={Opcao}>
        <FormControlLabel value="cartao" control={<Radio />} label="Cartao" />
        <FormControlLabel value="recarga" control={<Radio />} label="Recarga" />
      </RadioGroup>
    </FormControl>
    
    


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

