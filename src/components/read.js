import React from 'react';
import '../App.css';
import Cars from './cars';
import axios from 'axios';

class Read extends React.Component {

  constructor() {
    super();
    this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
  }

  state = {
    cars: [

    ]
  };

  componentDidMount() {
    axios.get('http://localhost:4000/api/cars')
      .then((response) => {
        this.setState({ cars: response.data })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ReloadDataMethod() {
    axios.get('http://localhost:4000/api/cars')
      .then((response) => {
        console.log("Testing")
        this.setState({ cars: response.data})
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Cars myCars={this.state.cars} ReloadDataMethod={this.ReloadDataMethod}></Cars>
      </div>
    );
  }
}

export default Read;
