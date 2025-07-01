import { useState, useRef } from 'react'
import './App.css'
import axios from 'axios'
import WeaderInfo from './components/weaderInfo/weatherInfo'

function App() {
  const [weather, setweather] = useState()
  const inputRef = useRef()
 
  async function searchcity(){
      const city = inputRef.current.value
      const key = '8a888c42589b2d77ce14861d079512d9'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
      
      //biblioteca axios para coletar as informações do banco da API
      const apiInfo = await axios.get(url)
      setweather(apiInfo.data);
    }

  return (
   <div className='container'>
      <h1>Previsão do tempo</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder='Digite o nome da cidade'
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            searchcity()
          }
        }}
      />
      <button onClick={searchcity}>Buscar</button>

      <WeaderInfo weather={weather}/>
   </div>
  )
}

export default App
