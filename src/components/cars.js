import React from 'react';
import '../App.css';
import carItems from './carItems';
import CarItems from './carItems';

class Cars extends React.Component {

  render() {
    return this.props.myCars.map((car)=>{
        console.log(car);
        return <CarItems key={car._id} car={car}//set the unique id for each new car added to the DB
        ReloadDataMethod={this.props.ReloadDataMethod}></CarItems>//Reload method
    });
  }
}

export default Cars;
