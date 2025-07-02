import './weatherInfo.css'

function weatherInfo({ weather }) {

    if (!weather || !weather.weather || !Array.isArray(weather.weather) || weather.weather.length === 0) {
        return <div>Carregando...</div>;
    }

    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>
            <div className='info'>
                <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    alt="Clima"
                />
                <p className='temperature'>{Math.round(weather.main.temp)}ºC</p>
            </div>
            <p className='description'>{weather.weather[0].description}</p>
            <div className='datails'>
                <p>Sensação Térmica: {Math.round(weather.main.feels_like)}ºC</p>
                <p>Umidade: {Math.round(weather.main.humidity)}%</p>
                <p>Pressão: {Math.round(weather.main.pressure)}%</p>

            </div>
        </div>
    )


}

export default weatherInfo