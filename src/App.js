import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Headers';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  // definir la categoría y noticias 
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=f7cf588c2a274e6c9d3c41b7707c88cd`

      const respuesta = await fetch(url); 
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles); //va a noticias que es un array noticias (creado en en noticias)
    }
    consultarAPI(); 
  }, [categoria])


  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />

      <div className="container white">
          <Formulario 
            guardarCategoria={guardarCategoria}
            />
            <ListadoNoticias
              noticias={noticias}
            />
      </div>
    </Fragment>
  );
}

export default App;