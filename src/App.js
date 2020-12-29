  import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Tbl3 from './pages/PedidosFeitos';
import Tbl4 from './pages/VendasCartao';
import Tbl5 from './pages/Recargas';
import Tbl6 from './pages/BoletosNaoPagos';
import Tbl7 from './pages/BoletosPagos';
import Tbl9 from './pages/PagamentoCartao';
import Tbl10 from './pages/CreditosPagos';
import tbl13 from './pages/CreditosLiberados';
import Login from './pages/Login';
// import Form from './pages/Fomr';
import Tbl20 from './pages/TesteFianceiro'
import StoreProvider from './components/Store/Provider';
import RoutesPrivate from './components/Routes/Private/Private';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <>
     <Router>
       <StoreProvider>
       <Navbar />

        <Switch>
          <Route path="/login" component={Login} />
          <RoutesPrivate path='/' exact component={Home}/>
          <RoutesPrivate path='/pedidosfeitos' exact component={Tbl3}/>
          <RoutesPrivate path='/cartao' component={Tbl4}/>
          <RoutesPrivate path='/recargas' component={Tbl5}/>
          <RoutesPrivate path='/boletosnaopagos' component={Tbl6}/>
          <RoutesPrivate path='/boletospagos' component={Tbl7}/>
          <RoutesPrivate path='/pagamentoscartao' component={Tbl9}/>
          <RoutesPrivate path='/credpagos' component={Tbl10}/>
          <RoutesPrivate path='/credLiberados' component={tbl13}/>
          <RoutesPrivate path='/finaceirogeral' component={Tbl20}/>

        </Switch>
       </StoreProvider> 
      </Router>  
    </>
  );
}
  


export default App;



