import React, { useState,useContext } from 'react';
import {useHistory} from 'react-router-dom';
import UIButton from '../../UI/Button/Button';
import StoreContext from '../../Store/Context';
import './Login.css';

function initialState(){
    return {user:'',password:''}
}

function login({ user, password}) {
  if(user==='usuariomobi' && password==='transmobi52!@#'){
    return {token:'jhdhcjhbdajcbndaicbni'};
  }
  return {error:'Usuario ou senha incorretos'};
}

const UserLogin = () => {
  const [values,setValues]=useState(initialState);
  const {setToken} = useContext(StoreContext);
  const history= useHistory();
    function onChange(event){
        const { value, name } = event.target;
        
        setValues({
            ...values,
            [name]:value,
        });
    }

    function onSubmit(event) {
      event.preventDefault();
      const {token} =login(values);
      if(token){
        setToken(token);
        return history.push('/')
      }
      setValues(initialState);
    }

  return (
    <div  class="container">
      <div class="row">
      
      <div className="user-login">
      <h1 className="user-login__title">Acessar o Sistema</h1>
      <form onSubmit={onSubmit}>
        <div className="user-login__form-control">
          <label htmlFor="user">Usuario</label>
          <input id="user" type="text" name="user" onChange={onChange} value={values.user} />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" name="password" onChange={onChange} value={values.password}/>
        </div>
        
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
      </form>
    </div>
      </div>
   
    </div>
    
  );
};

export default UserLogin;