
import "../header.css";
import { useState, useEffect } from 'react';
import { useHistory  } from "react-router-dom";
import "../styles.css"

export default function Header() {

  useEffect(()=> {
    let token = localStorage.getItem('token');
    if(token != '' && token != null && token!= undefined){
      setIsLogged(true);
    }
  }, [])

  let history = useHistory ();
  const [isLogged, setIsLogged] = useState(false);
  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    history.push('/ingreso')
  }

  return (
    <div>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <a href="/ingreso">Ingreso</a>
            </li>
            <li>
              <a href="/categories">Categorias</a>
            </li>

            <li>
              <a href="/ingreso" onClick={() => isLogged ? logOut() : null}>Cerrar sesión</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}