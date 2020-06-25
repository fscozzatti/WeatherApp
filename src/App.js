import React , { Component } from 'react';
import './App.css';
import LocationList from './componets/LocationList';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe',
  'Rosario,ar',
];

class App extends Component {
 
  handleSelectionLocation = city =>{
    console.log(`HandleSelectionLocation: ${city}`);
  }
 
  render(){ 
    return(<div>
        <LocationList 
          cities={cities}
          onSelectedLocation={this.handleSelectionLocation} 
        />
      </div>
    )
  }
}
export default App;