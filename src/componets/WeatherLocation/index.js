import React , { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    FOG,
} from '../constants/weather';

const data = {
    temperature: 6,
    weatherState: FOG,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component{
    render(){
        return(
        <div className="weatherLocationCont"> 
            <Location city={"Madrid"}></Location>
            <WeatherData data={data}></WeatherData>
        </div>
        )
    }

}
export default WeatherLocation;