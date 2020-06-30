import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import getUrlWeatherForecastByCity from './services/getUrlWeatherForecastByCity';
import transformForecast from './services/transformForecast';
import './styles.css';
/* 
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
]


const data = {
    temperature: 20,
    weatherState: 'normal',
    humidity: 20,
    wind: '20 m/s',
}
*/
class ForecastExtended extends Component{
    constructor() {
        super();
        this.state = {forecastData:null};
    }
    componentDidMount() {
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.city !== this.props.city){
            this.setState({forecastData:null});
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const api_weather_forecast = getUrlWeatherForecastByCity(city);
        fetch(api_weather_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData});

            }
        )
    }
    
    renderProgressBar = () => {
        return <h3>Cargando Pronóstico Extendido</h3>;
    }

    renderForecastItemDays(forecastData){
        return forecastData.map(forecast => 
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}>
            </ForecastItem>);
    }

    render(){
        const { city } = this.props;
        const { forecastData } = this.state;
        return( <div>
                    <h2 className='forecast-title'>Pronóstico Extendido para {city} </h2>
                    {forecastData ? this.renderForecastItemDays(forecastData):
                    this.renderProgressBar()}
                </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;