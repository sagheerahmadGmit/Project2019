import React from 'react';
import axios from 'axios';
import { link } from 'fs';

class Edit extends React.Component {

  //props is used for passing data from one component to another
  constructor(props) {
    super(props);
    //set the variables and there states
    this.state = { CarName: '', CarYear: '', CarPrice: '', CarImg: '' };

    //functions used to create a car object
    this.handleChangeCarName = this.handleChangeCarName.bind(this);
    this.handleCarYear = this.handleCarYear.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChangeCarImg = this.handleChangeCarImg.bind(this);
    this.handleCarPrice = this.handleCarPrice.bind(this);
  }

  //set the car name
  handleChangeCarName(event) {
    this.setState({ CarName: event.target.value });
  }

  //set the car image
  handleChangeCarImg(event) {
    this.setState({ CarImg: event.target.value });
  }

  //set the car year
  handleCarYear(event) {
    this.setState({ CarYear: event.target.value });
  }

  //set the car price
  handleCarPrice(event) {
    this.setState({ CarPrice: event.target.value });
  }

  //update the car
  handleUpdate(event) {
    alert('The car details have been Updated!');

    event.preventDefault();
    //car object used to store the info
    const carObject = {
      carName: this.state.CarName,
      carYear: this.state.CarYear,
      carImg: this.state.CarImg,
      carPrice: this.state.CarPrice
    };

    //put the info info into the server and update instead of creating a new one
    axios.put('http://localhost:4000/api/cars/' + this.state._id, carObject)
      .then()
      .catch();

    //set and update the state
    this.setState({
      CarName: '',
      CarYear: '',
      CarImg: '',
      CarPrice: ''
    });

  }


  //When the component is loaded, fill the form with the car info matching the car id
  componentDidMount() {
    alert(this.props.match.params.id)
    //get the info from the server
    axios.get('http://localhost:4000/api/cars/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          _id: response.data._id,
          CarName: response.data.carName,
          CarYear: response.data.carYear,
          CarImg: response.data.carImg,
          CarPrice: response.data.carPrice
        })
      })
      .catch();
  }

  render() {
    return (
      <div className="createApp">
        {/* change the information that you wish to update */}
        <form onSubmit={this.handleUpdate}>

          <div className="form-group">
            <label>
              Car Name:
                </label>
            <input type="text"
              className='form-control'
              value={this.state.CarName}
              onChange={this.handleChangeCarName} />
          </div>

          <div className="form-group">
            <label>
              Year:
                </label>
            <input type="text" className='form-control'
              value={this.state.CarYear}
              onChange={this.handleCarYear} />
          </div>

          <div className="form-group">
            <label>
              Price:
                </label>
            <input type="text" className='form-control'
              value={this.state.CarPrice}
              onChange={this.handleCarPrice} />
          </div>

          <div>
            <label>
              Link to the image of the car:
                </label>
            <textarea rows="3" className='form-control'
              value={this.state.CarImg}
              onChange={this.handleChangeCarImg} />
          </div>
          <br />
          {/* Submit the information so it can be updated */}
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }

}

export default Edit;