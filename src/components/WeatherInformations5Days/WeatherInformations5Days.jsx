import './WeatherInformations5Days.css'

function WeatherInformations5Days({ weather5Days }) {

    console.log(weather5Days)

    let dailyForecast = {}


    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString('pt-BR')
        console.log(date)

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }


    }
    const next5DaysForecast = Object.values(dailyForecast).slice(0, 5)
    console.log(next5DaysForecast)

    function convertDate(date) {
        const newDete = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long' })
        return newDete
    }
    return (
        <div className='weather-container'>
            <h3>Próximos 5 Dias</h3>
            <div className='weather-list'>
                {next5DaysForecast.map(forecast => (
                    <div key={forecast.dt} className='weather-item'>
                        <p className='day'>{convertDate(forecast)}</p>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
                        <p>{forecast.weather[0].description}</p>
                        <p className='min-max'>Min {Math.round(forecast.main.temp_min)}ºC / Max {Math.round(forecast.main.temp_max)}ºC</p>
                    </div>
                ))}
            </div>
        </div>
    )
}



export default WeatherInformations5Days