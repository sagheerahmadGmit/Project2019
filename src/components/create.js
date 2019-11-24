import React from 'react';
import '../App.css';
import Axios from 'axios';

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = { CarName: '', CarYear: '', CarPrice: '',CarImg: '' };

    this.handleChangeCarName = this.handleChangeCarName.bind(this);
    this.handleCarYear = this.handleCarYear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCarImg = this.handleChangeCarImg.bind(this);
    this.handleCarPrice = this.handleCarPrice.bind(this);
  }

  handleChangeCarName(event) {
    this.setState({ CarName: event.target.value });
  }

  handleChangeCarImg(event) {
    this.setState({ CarImg: event.target.value });
  }

  handleCarYear(event) {
    this.setState({ CarYear: event.target.value });
  }

  handleCarPrice(event){
    this.setState({ CarPrice: event.target.value });
  }

  handleSubmit(event) {
    alert('Your Car has been added to the shop floor!');
    event.preventDefault();

    const carObject = {
      carName: this.state.CarName,
      carYear: this.state.CarYear,
      carImg: this.state.CarImg,
      carPrice: this.state.CarPrice
    };

    Axios.post('http://localhost:4000/api/cars', carObject)
      .then()
      .catch();

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
        <form onSubmit={this.handleSubmit}>

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

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Create;
