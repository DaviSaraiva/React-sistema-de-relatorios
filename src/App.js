import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import Reports from './pages/Reports';
import Home from './pages/Home';
//import Tbl2 from './pages/Tbl2';
import Tbl3 from './pages/PedidosFeitos';
import Tbl4 from './pages/VendasCartao';
import Tbl5 from './pages/Recargas';
import Tbl6 from './pages/BoletosNaoPagos'
import Tbl7 from './pages/BoletosPagos'
import Tbl9 from './pages/PagamentoCartao'
import Tbl10 from './pages/CreditosPagos'
import Tbl11 from './pages/FinanceiroRecargas'
import Tbl12 from './pages/FinaceiroCartao'
import tbl13 from './pages/CreditosLiberados'

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <>
     <Router>
        <Navbar />
        <Switch>
          
          {<Route path='/' exact component={Home}/>}
          <Route path='/pedidosfeitos' exact component={Tbl3}/>
          <Route path='/cartao' component={Tbl4}/>
          <Route path='/recargas' component={Tbl5}/>
          <Route path='/boletosnaopagos' component={Tbl6}/>
          <Route path='/boletospagos' component={Tbl7}/>
          <Route path='/pagamentoscartao' component={Tbl9}/>
          <Route path='/credpagos' component={Tbl10}/>
          <Route path='/credLiberados' component={tbl13}/>
          <Route path='/finrecargas' component={Tbl11}/>
          <Route path='/finecartoes' component={Tbl12}/>

        </Switch>
      </Router>  
    </>
  );
}
  


export default App;



