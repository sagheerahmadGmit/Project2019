import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';

class MovieItems extends React.Component {

    render() {
        return (
            <div>
                {/* <h4>{this.props.movie.Title}</h4>
        <p>{this.props.movie.Year}</p>
        <img src={this.props.movie.Poster}></img> */}

                <Card border="primary">
                <Card.Header border="primary">{this.props.movie.Title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    
                    <img src={this.props.movie.Poster}></img>

                    <footer>{this.props.movie.Year}</footer>
                    </blockquote>
                </Card.Body>
                </Card>
            </div>
        );
    }
}

export default MovieItems;
