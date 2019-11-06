import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class MovieItems extends React.Component {

    constructor()
    {
        super();
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    DeleteMovie(e)
    {
        console.log("Delete Button Clicked");

        Axios.delete('http://localhost:4000/api/movies/'+ this.props.movie._id)
        .then()
        .catch();
    }

    render() {
        return (
            <div>
                {/* <h4>{this.props.movie.Title}</h4>
        <p>{this.props.movie.Year}</p>
        <img src={this.props.movie.Poster}></img> */}

                <Card border="primary">
                <Card.Header border="primary">{this.props.movie.title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    
                    <img src={this.props.movie.poster}></img>

                    <footer>{this.props.movie.year}</footer>
                    </blockquote>
                </Card.Body>
                <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                <Link to={"/edit/"+this.props.movie._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>
        );
    }
}

export default MovieItems;
