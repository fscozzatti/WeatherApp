import React from 'react';
import WeatherLocation from './componets/WeatherLocation';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherLocation city={"Rosario, ar"}/>
    </div>
  );
}

export default App;
