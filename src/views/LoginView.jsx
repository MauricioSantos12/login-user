import { useState, useEffect } from 'react';
import { loginUser } from "../actions";
import "../styles.css"

export const LoginView = () => {


  useEffect(()=> {
    let token = localStorage.getItem('token');
    if(token != '' && token != null && token!= undefined){
      setIsLogged(true);
    }
  }, [])

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  const sendInfo = async() => {
    let _errorMsg = ''
    setErrorMsg(_errorMsg);
    let data = {email, password}
    let validEmail = regexEmail.test(email);
    if(!validEmail) {
      setErrorMsg('Ingresa un correo válido');
      return;
    }
    let response = await loginUser(data);
    if(response.data){
      localStorage.setItem('email', email);
      localStorage.setItem('token', response.data.token);
      setIsLogged(true);
    }else{
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      _errorMsg = 'Datos inválidos';
      if(email == ''){
        _errorMsg = 'Email es requerido';
        setErrorMsg(_errorMsg);
      }
      if(password == ''){
        _errorMsg = 'Contraseña es requerida';
        setErrorMsg(_errorMsg);
      }
      setErrorMsg(_errorMsg);
    }
  }

  return (

  <section className='sectionDownHeader'>
    <div className='containerLogin'>
      <div className="containerInputs">
        {isLogged ? 
          <>
            <h1>Hola 👋, ¿cómo estás?</h1>
            <h3>Ya iniciaste sesión, ahora puedes navegar por el sitio web</h3>
          </>
            : 
          <>
            <div>
              <h1 >
                Login
              </h1>
              <div className="containerInputText">
                <p className="textUpInput">Usuario</p>
                <input type="text" className="inputText" onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div className="containerInputText">
                <p className="textUpInput">Contraseña</p>
                <input type="password" className="inputTextPassword" onChange={(e) => setPassword(e.target.value)}></input>
              </div>
              {errorMsg != '' ? <p className="textUpInput error">{errorMsg}</p> : null}
              <button 
                className="buttonSubmit"
                onClick={() => sendInfo()}
              > Login
              </button >
            </div>
          </>
        }
      </div>
    </div>
  </section>
)}