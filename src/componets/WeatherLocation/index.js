import React , { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    FOG,
    SUN,
} from '../constants/weather';

const data = {
    temperature: 6,
    weatherState: FOG,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 15,
    weatherState: SUN,
    humidity: 20,
    wind: '15 m/s',
}



class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data,
        };
    }

    handleUpdateClick = () => {
        this.setState({
            city: 'Buenos Aires!',
            data: data2,
        })
    }

    render(){
        const { city, data } = this.state;
        return(
        <div className="weatherLocationCont"> 
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        )
    }

}
export default WeatherLocation;