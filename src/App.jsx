import Api from "./components/Api"
import Header from "./components/Header";
import React from 'react';
import Clima from "./components/Clima";
import { useState, useEffect } from "react";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";

function App() {

  const [error, setError] = useState(false)
  const [consultar, setConsultar] = useState(false)
  const [resultado, setResultado] = useState({})
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  })

  const llamarAPI = async () => {
    const APIkey = "c7495ab6501df9bbbf197f600efdf62f"
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${busqueda.ciudad},${busqueda.pais}&units=metric&appid=${APIkey}`
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    setResultado(resultado)

    if (resultado.cod === '404') {
      setError(true)
    } else {
      setError(false)
    }
  }

  useEffect(() => {
    if (consultar) {
      llamarAPI()
    }
  }, [consultar])

  let componente
  if (error) {
    componente = <Error>Hubo un error al encontrar la ubicación</Error>
  } else {
    componente = <Clima
      error={error}
      consultar={consultar}
      resultado={resultado}></Clima>
  }

  return (
    <div className='h-screen'>
      <div className="mx-auto w-full md:top-0  sm:mb-10 md:absolute">
        <Header></Header>
      </div>
      <div className=" mx-auto h-full md:flex justify-around items-center">
        <div className="md:max-w-5xl">
        <Formulario
          consultar={consultar}
          busqueda={busqueda}
          setConsultar={setConsultar}
          guardarBusqueda={guardarBusqueda}
          ></Formulario>
          </div>
          <div className="md:max-w-5xl">
        {componente}
          </div>
      </div>
      <div className="w-full absolute bottom-0">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
