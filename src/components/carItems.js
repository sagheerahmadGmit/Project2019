import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

class CarItems extends React.Component {

    constructor() {
        super();
        this.DeleteCar = this.DeleteCar.bind(this);
    }

    DeleteCar(e) {
        console.log("Delete Button Clicked");

        alert("Thank you for Purchasing a brand new car!");

        Axios.delete('http://localhost:4000/api/cars/' + this.props.car._id)
            .then()
            .catch();
    }

    render() {
        return (
            <div className="createApp">

                {/* <Card border="primary">
                    <Card.Header border="primary">{this.props.car.carName}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.car.carImg} width="500px"></img>
                            <footer>{this.props.car.carYear}</footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteCar}>Delete</Button>
                    <Link to={"/edit/" + this.props.car._id} className="btn btn-primary">Edit</Link>
                </Card> */}
                <div className="modalShow">
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.car.carName}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <blockquote className="blockquote mb-0">
                                <img src={this.props.car.carImg} width="400px"></img>
                                <footer>{this.props.car.carYear}</footer>
                            </blockquote>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="danger" onClick={this.DeleteCar}>Delete</Button>
                            <Link to={"/edit/" + this.props.car._id} className="btn btn-primary">Edit</Link>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>

                <br />

            </div>
        );
    }
}

export default CarItems;
