import React from 'react';
import '../App.css';
import MovieItems from './movieItems';

class Movies extends React.Component {

  render() {
    return this.props.myMovies.map((movie)=>{
        console.log(movie);
        return <MovieItems key={movie.Poster} movie={movie}></MovieItems>
    });
  }
}

export default Movies;
