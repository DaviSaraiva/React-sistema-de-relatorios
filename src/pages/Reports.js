import React, { useEffect, useState} from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';



function Reports() {
    const [informacoes, setInformacoes] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8081/boletospagos').then(response => {
        console.log(response)
          setInformacoes(response.data)
      })
  }, []);

  const colunas=[
    {
    name:'ID',
    selector:informacoes.map((pedidos)=>{
              return pedidos.ID_PESSOA
            }),
    sortable:true
    },
    {
        name:'DATA_PEDIDO',
        selector:informacoes.map((pedidos)=>{
                  return pedidos.DATA_PEDIDO
        }),
        sortable:true
     },
     {
            name:'DATA_PAGAMENTO',
            selector:informacoes.map((pedidos)=>{
                      return pedidos.DATA_PAGAMENTO
                   }),
            sortable:true
    },
     {
        name:'MENSAGEM_PAGAMENTO',
        selector:informacoes.map((pedidos)=>{
               return pedidos.MENSAGEM_PAGAMENTO
        }),
        sortable:true
     },
     {
        name:'TIPO_PAGAMENTO',
        selector:informacoes.map((pedidos)=>{
                 return pedidos.TIPO_PAGAMENTO
        }),
        sortable:true
     }
];
const paginacionOpciones={
    rowsPerpageText: 'Filas por paginas',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText:'todos'

}
  
  return (
    <div>
        <DataTable 
        colunas={colunas}
        data={
            informacoes}
        titulo="Uns campeao ai"
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrollHeight="600px"
        />
        </div>
)
}
     export default Reports

// <div className='relatorio1'>
//          <table border="1">

//  <thead>
//  <tr>
 
//   <th style={{fontSize:'10px'}}>ID_PESSOA</th>
//   <th style={{fontSize:'10px'}}>DATA_PEDIDO</th>
//   <th style={{fontSize:'10px'}}>DATA_PAGAMENTO</th>
//   <th style={{fontSize:'10px'}}>MENSAGEM_PAGAMENTO</th>
//   <th style={{fontSize:'10px'}}>TIPO_PAGAMENTO</th>
//   <th style={{fontSize:'10px'}}>NOME</th>
//   <th style={{fontSize:'10px'}}>CPF</th>

//  </tr>
// </thead>


//  <tbody>
// <tr border="1">
//   <td border="1" style={{fontSize:'10px'}}> {
//      informacoes.map((pedidos)=>{
//      return (<ul>{pedidos.ID_PESSOA}</ul>) 
//      })
//      }
//  </td>

//  <td border="1" style={{fontSize:'10px'}}>{
//      informacoes.map((pedidos)=>{
//      return (<ul>{pedidos.DATA_PEDIDO}</ul>)}
//  )}
//  </td>

//  <td border="1" style={{fontSize:'10px'}}>{
//      informacoes.map((pedidos)=>{
//      return (<ul>{pedidos.DATA_PAGAMENTO}</ul>) 
//     })}
//  </td>


//  <td border="1" style={{fontSize:'10px'}}>{
//   informacoes.map((pedidos)=>{
//    return (<ul>{pedidos.MENSAGEM_PAGAMENTO}</ul>)}
//    )}
//  </td>



//  <td border="1" style={{fontSize:'10px'}}>{
//      informacoes.map((pedidos)=>{
//      return (<ul>{pedidos.TIPO_PAGAMENTO}</ul>)}
//       )}
//  </td>

 
//  <td border="1" style={{fontSize:'10px'}}>{
//      informacoes.map((pedidos)=>{
//      return (<ul>{pedidos.pessoas[0]['NOME']}</ul>)}
//      )}
//  </td>

//  <td border="1" style={{fontSize:'10px'}}>{
//      informacoes.map((pedidos)=>{
//      return (<ul>{pedidos.pessoas[0]['CPF']}</ul>)}
//      )}
//  </td>
// </tr>   
// </tbody>

// </table>
//     </div>

// const colunas=[
//     {
//     name:'ID',
//     selector:informacoes.map((pedidos)=>{
//               return pedidos.ID_PESSOA
//              }),
//     sortable:true
//     },
//     {
//         name:'DATA_PEDIDO',
//         selector:informacoes.map((pedidos)=>{
//         return pedidos.DATA_PEDIDO}),
//         sortable:true
//      },
//      {
//             name:'DATA_PAGAMENTO',
//             selector:informacoes.map((pedidos)=>{
//             return pedidos.DATA_PAGAMENTO}),
//             sortable:true
//     },
//      {
//         name:'MENSAGEM_PAGAMENTO',
//         selector:informacoes.map((pedidos)=>{
//             return pedidos.MENSAGEM_PAGAMENTO}),
//         sortable:true
//      },
//      {
//         name:'TIPO_PAGAMENTO',
//         selector:informacoes.map((pedidos)=>{
//             return pedidos.MENSAGEM_PAGAMENTO}),
//         sortable:true
//      }
// ];