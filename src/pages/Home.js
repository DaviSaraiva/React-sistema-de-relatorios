import React, { useContext } from 'react';
import StoreContext from '../components/Store/Context';

function Home() {
    const { setToken } = useContext(StoreContext);
     return (
        <div className='pages-home' id="titulo">
           <center><h1>Sistema de Relatórios do Site.</h1></center> 

            <center><button className="btn btn-danger" type="button" onClick={() => setToken(null)}>
                 Sair
             </button></center>
        </div>
    )
}

export default Home
