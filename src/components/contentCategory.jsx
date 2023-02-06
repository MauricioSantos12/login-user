import { useEffect, useState } from 'react';
import { get as _get } from "lodash";
import  { useHistory } from 'react-router-dom'
import "../styles.css"

export const ContentCategory = () => {

  const [ isLogged, setIsLogged ] = useState(true)
  useEffect(()=> {

    let token = localStorage.getItem('token');
    if(token != '' && token != null && token!= undefined){
    }else{
      setIsLogged(false);
    }
    
  }, [])

  if (!isLogged){
    return (
      <section className='sectionDownHeader'>
        <div className='containerLogin'>
          <div className="containerInputs">
            <h1 >Opps! Aún no te encuentras loggeado</h1>
          </div>
        </div>
      </section>
    )
  }

  return (
  <section>
    <div className='containerSection'>
      <>
        <h1 className='titleVideo'>Videos</h1>
      </>
        <ul className="grid">
          <li key='music' className="cardCategory">
            <a href='/categories/music'>
              <h3>Música</h3>
              <img src="https://st.depositphotos.com/1010104/2294/v/450/depositphotos_22943722-stock-illustration-colorful-music-design.jpg" alt="imgMusic" />
            </a>
          </li>
          <li key='peli' className="cardCategory">
            <a href='/categories/peli'>
              <h3>Peliculas</h3>
              <img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/07/Posters.png?resize=1200%2C900&quality=50&strip=all&ssl=1" alt="imgPeliculas" />
            </a>
          </li>
          <li key='series' className="cardCategory">
            <a href='/categories/series'>
              <h3>Series</h3>
              <img src="https://www.latercera.com/resizer/gXOdyP_YUsjQ2MC6U9sUOv-gRxk=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/ONNUKFN3SNHK7F4KEH2BXHHHUA.jpg" alt="imgSeries" />
            </a>
          </li>
          <li key='country' className="cardCategory">
            <a href='categories/country'>
              <h3>Paises</h3>
              <img src="https://t1.uc.ltmcdn.com/es/posts/7/1/6/cuantos_paises_hay_en_el_mundo_29617_600.jpg" alt="imgPaises" />
            </a>
          </li>
          <li key='col' className="cardCategory">
            <a href='categories/col'>
              <h3>Colombia</h3>
              <img src="https://cdn.colombia.com/images/v2/colombia-info/informacion/informacion-800.jpg" alt="imgColombia" />
            </a>
          </li>
        </ul>
    </div>
    
  </section>
)}
