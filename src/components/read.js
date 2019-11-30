import React from 'react';
import '../App.css';
import Cars from './cars';
import axios from 'axios';

class Read extends React.Component {

  constructor() {
    super();
    this.ReloadDataMethod = this.ReloadDataMethod.bind(this);//relaod method
  }

  state = {
    cars: [

    ]
  };

  //print out the cars when the component is loaded
  componentDidMount() {
    //get the info from the server
    axios.get('http://localhost:4000/api/cars')
      .then((response) => {
        this.setState({ cars: response.data })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //relaod the page once an object is deleted
  ReloadDataMethod() {
    axios.get('http://localhost:4000/api/cars')
      .then((response) => {
        console.log("Relaoding the page")
        this.setState({ cars: response.data})
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //Read Page to print out the car object
  render() {
    return (
      <div className="App">
        {/* print the cars and use reload method */}
        <Cars myCars={this.state.cars} ReloadDataMethod={this.ReloadDataMethod}></Cars>
      </div>
    );
  }
}

export default Read;
