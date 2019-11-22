import React from 'react';
import '../App.css';
import carItems from './carItems';
import CarItems from './carItems';

class Cars extends React.Component {

  render() {
    return this.props.myCars.map((car)=>{
        console.log(car);
        return <CarItems key={car.carImg} car={car}></CarItems>
    });
  }
}

export default Cars;
