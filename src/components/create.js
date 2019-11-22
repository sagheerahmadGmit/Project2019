import React from 'react';
import '../App.css';
import Axios from 'axios';

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = { CarName: '', CarYear: '', CarImg: '' };

    this.handleChangeCarName = this.handleChangeCarName.bind(this);
    this.handleCarYear = this.handleCarYear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCarImg = this.handleChangeCarImg.bind(this);
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

  handleSubmit(event) {
    alert('Your Car has been added to the shop floor: ' + this.state.CarName + " " + this.state.CarYear + " at " + this.state.CarImg);
    event.preventDefault();

    const carObject = {
      carName: this.state.CarName,
      carYear: this.state.CarYear,
      carImg: this.state.CarImg
    };

    Axios.post('http://localhost:4000/api/cars', carObject)
      .then()
      .catch();

    this.setState({
      CarName: '',
      CarYear: '',
      carImg: ''
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
