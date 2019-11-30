//Required Imports
import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';//used for buttons
import Axios from 'axios';//axios used for deleting
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';//modal from bootstrap
import App from '../App';
import Read from './read';
import Cars from './cars';

class CarItems extends React.Component {

    //constructor for deleting an item from the database
    constructor() {
        super();
        this.DeleteCar = this.DeleteCar.bind(this);
    }

    //Delete Function
    DeleteCar(e) {
        console.log("Delete Button Clicked");

        alert("Thank you for Purchasing a brand new car!");
        //axios deletes the the item with the matching id
        Axios.delete('http://localhost:4000/api/cars/' + this.props.car._id)
            .then(() => {
                //reloads the page automatically once an item has been deleted
                this.props.ReloadDataMethod();
            })
            .catch();
    }

    render() {
        return (
            <div className="createApp">
                <div className="modalShow">
                    {/* Modal using react bootstrap */}
                    {/* Prints the car object */}
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.car.carName}</Modal.Title>
                        </Modal.Header>

                        {/* Body of modal - shows image, year and price */}
                        <Modal.Body>
                            <blockquote className="blockquote mb-0">
                                <img src={this.props.car.carImg} width="400px"></img>
                                <footer>{this.props.car.carYear}</footer>
                                <footer>{this.props.car.carPrice}</footer>
                            </blockquote>
                        </Modal.Body>

                        {/* Delete and Edit buttons */}
                        <Modal.Footer>
                            <Button variant="danger" onClick={this.DeleteCar}>Buy</Button>
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
