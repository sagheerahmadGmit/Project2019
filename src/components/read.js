import React from 'react';
import '../App.css';
import Movies from './movies';
import axios from 'axios';

class Read extends React.Component {

    state={
            movies: [
               
                ]          
    };

    componentDidMount() {
            axios.get('http://localhost:4000/api/movies')
            .then((response) =>{
              this.setState({movies: response.data})
            })
            .catch((error)=>{
              console.log(error);
            });
    }

  render() {
    return (
      <div>
        <h2>Hello from Read Component.</h2>

        <Movies myMovies={this.state.movies}></Movies>
      </div>
    );
  }
}

export default Read;
