import React from 'react';
import '../App.css';
import Axios from 'axios';

class Create extends React.Component {

    constructor(props) {
      super(props);
      this.state = {Title: '', Year: '', Poster: ''};
  
      this.handleChangeMovieTitle = this.handleChangeMovieTitle.bind(this);
      this.handleYear = this.handleYear.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangeMoviePoster = this.handleChangeMoviePoster.bind(this);
    }
  
    handleChangeMovieTitle(event) {
      this.setState({Title: event.target.value});
    }

    handleChangeMoviePoster(event) {
      this.setState({Poster: event.target.value});
    }

    handleYear(event) {
      this.setState({Year: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A Movie was submitted: ' + this.state.Title + " " + this.state.Year + " at " + this.state.Poster);
      event.preventDefault();

      Axios.post();
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label>
                Movie Title: 
                </label>
                <input type="text" 
                className='form-control' 
                value={this.state.Title} 
                onChange={this.handleChangeMovieTitle} />

                {/* <label>
                Year: 
                </label>
                <input type="text"  className='form-control'
                value={this.state.Year} 
                onChange={this.handleYear} /> */}

                {/* <label>
                Poster URL: 
                </label>
                <textarea rows="3" className='form-control'
                value={this.state.Poster} 
                onChange={this.handleChangeMoviePoster} /> */}
            </div>

            <div className="form-group">
              <label>
                Year: 
                </label>
                <input type="text"  className='form-control'
                value={this.state.Year} 
                onChange={this.handleYear} />
            </div>
            
            <div>
            <label>
                Poster URL: 
                </label>
                <textarea rows="3" className='form-control'
                value={this.state.Poster} 
                onChange={this.handleChangeMoviePoster} />
            </div>

            <div>
            <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      );
    }
  }

export default Create;
