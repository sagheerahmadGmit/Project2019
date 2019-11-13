import React from 'react';
import axios from 'axios';

class Edit extends React.Component{

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
        alert('A Movie was updated: ' + this.state.Title + " " + this.state.Year + " at " + this.state.Poster);
        event.preventDefault();
  
        const movieObject = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        };

        axios.put('http://localhost:4000/api/movies/' + this.state._id, movieObject)
        .then()
        .catch();

  
        this.setState({Title:'', 
                      Year:'',
                      Poster:''
        });
  
      }


    componentDidMount(){
        alert(this.props.match.params.id)
        axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
        .then((response)=>{
            this.setState({
                _id: response.data._id,
                Title: response.data.title,
                Year: response.data.year,
                Poster: response.data.poster
            })
        })
        .catch();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label>
                Movie Title: 
                </label>
                <input type="text" 
                className='form-control' 
                value={this.state.Title} 
                onChange={this.handleChangeMovieTitle} />
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
        );
    }

}

export default Edit;