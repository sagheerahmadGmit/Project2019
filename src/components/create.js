import React from 'react';
import '../App.css';
import Axios from 'axios';

class Create extends React.Component {

  //props is used for passing data from one component to another
  constructor(props) {
    super(props);
    //set the variables and there states
    this.state = { CarName: '', CarYear: '', CarPrice: '',CarImg: '' };

    //functions used to create a car object
    this.handleChangeCarName = this.handleChangeCarName.bind(this);
    this.handleCarYear = this.handleCarYear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleCarPrice(event){
    this.setState({ CarPrice: event.target.value });
  }

  //submit the data to the server
  handleSubmit(event) {
    alert('Your Car has been added to the shop floor!');
    event.preventDefault();

    //car object used to store the info
    const carObject = {
      carName: this.state.CarName,
      carYear: this.state.CarYear,
      carImg: this.state.CarImg,
      carPrice: this.state.CarPrice
    };

    //post the information to the server
    Axios.post('http://localhost:4000/api/cars', carObject)
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

  render() {
    return (
      <div className="createApp">
         {/* Form to take in the reqired information for creating a new car object */}
        <form onSubmit={this.handleSubmit}>

          {/* Enter car Name */}
          <div className="form-group">
            <label>
              Car Name:
                </label>
            <input type="text"
              className='form-control'
              value={this.state.CarName}
              onChange={this.handleChangeCarName} />
          </div>

          {/* Enter Car Year */}
          <div className="form-group">
            <label>
              Year:
                </label>
            <input type="text" className='form-control'
              value={this.state.CarYear}
              onChange={this.handleCarYear} />
          </div>

           {/* Enter Car Price */}
          <div className="form-group">
            <label>
              Price:
                </label>
            <input type="text" className='form-control'
              value={this.state.CarPrice}
              onChange={this.handleCarPrice} />
          </div>

           {/* Enter Car Image Link */}
          <div>
            <label>
              Link to the image of the car:
                </label>
            <textarea rows="3" className='form-control'
              value={this.state.CarImg}
              onChange={this.handleChangeCarImg} />
          </div>

          <br />

           {/* Press the image to submit it and save to the database */}
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Create;
