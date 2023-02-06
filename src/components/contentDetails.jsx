import { useState, useEffect } from 'react';
// Queries
import { getVideos } from "../actions";
import CircularProgress from '@mui/material/CircularProgress';
import { get as _get } from "lodash";
import  { useHistory , useParams } from 'react-router-dom'
import "../styles.css"
import WestIcon from '@mui/icons-material/West';

export const ContentDetails = () => {
  const [ refresh, setRefresh ] = useState(false);
  const [ openNotification, setOpenNotification ] = useState(false);
  const [ loading, setLoading ] = useState(true);
  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState('')
  const [params, setParams] = useState(useParams())
  let history = useHistory ();

  useEffect(()=> {

    const loadInfo = async() => {
        let query = '';
        if(params.categoryId == 'music'){
            query = 'RDMM09R8_2nJtjg'
            setCategory('Música');
        }else if(params.categoryId == 'peli'){
            query = 'PLT5vliTz6AIurBBUPoz-Nqa7-Lk3RTawv'
            setCategory('Peliculas');
        }else if(params.categoryId == 'series'){
            setCategory('Series');
            query = 'PLuRO8azktmsQ0eCb_f3ds-f_5jNodBwva'   
        }else if(params.categoryId == 'country'){
            setCategory('Paises');
            query = 'RDCMUCK-SilN5e8UIZ-5mdj1igqA'
        }else if(params.categoryId == 'col'){
            setCategory('Colombia');
            query = 'PLvJIJ79-VketivYQQtgSq84HmCObkEu-6'
        }
        let data = await getVideos(query);
        setVideos(data.data.items);
    }
    let token = localStorage.getItem('token');
    if(token != '' && token != null && token!= undefined){
      setLoading(true)
      loadInfo()
      setLoading(false)
    }else{
      history.push('/ingreso')
    }
    
  }, [refresh])

  if(loading){
    return(
      <section className='sectionDownHeader'>
        <CircularProgress />
      </section>
    )
  }

  return (
  <section>
    <div className='containerSection'>
      <div className='containerTitle' >
        <WestIcon className='leftArrow' sx={{ fontSize: 40 }} onClick={() => history.goBack()} />
      <h1 className='titleVideo'>Categoría: {category}</h1>
      </div>
      <>
        {
          videos.length > 0 ?
          <ul className="grid">
            {
              videos.map((item)=> {
                console.log("item", item)
                const { id, snippet } = item;
                const { title, thumbnails, resourceId } = snippet;
                const { medium } = thumbnails;
                return (
                  <li key={id} className="card">
                    <a target="_blank" href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                      <h3>{title}</h3>
                      <img width={medium && medium.width ? medium.width : ''} height={medium && medium.height ? medium.height : ''} src={medium && medium.url ? medium.url : ''} alt="" />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          :
          <h1>No hay videos. Problemas en la carga</h1>
        }    
      </>
    </div>
  </section>
)}
