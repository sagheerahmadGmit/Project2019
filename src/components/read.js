import React from 'react';
import '../App.css';
import Cars from './cars';
import axios from 'axios';

class Read extends React.Component {

    state={
            cars: [
               
                ]          
    };

    componentDidMount() {
            axios.get('http://localhost:4000/api/cars')
            .then((response) =>{
              this.setState({cars: response.data})
            })
            .catch((error)=>{
              console.log(error);
            });
    }

  render() {
    return (
      <div className="App">
        <h2>Hello from Read Component.</h2>
        <Cars myCars={this.state.cars}></Cars>
      </div>
    );
  }
}

export default Read;
