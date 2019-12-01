import React from 'react';
import '../App.css';
import Axios from 'axios';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        //Variable names
        this.state = { Name: '', Email: '', Phone: '', Query: '' };

        // functions to get the required information
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
    }

    //set the name
    handleName(event) {
        this.setState({ Name: event.target.value });
    }

    //set the query
    handleQuery(event) {
        this.setState({ Query: event.target.value });
    }

    //set the email
    handleEmail(event) {
        this.setState({ Email: event.target.value });
    }

    //set the Phone
    handlePhone(event) {
        this.setState({ Phone: event.target.value });
    }

    //submit the query to the server
    handleSubmit(event) {
        alert('Your Query has been successfully recieved and we will contact you shortly.');
        event.preventDefault();

        //carQuery to save all the details
        const carQuery = {
            name: this.state.Name,
            email: this.state.Email,
            phone: this.state.Phone,
            query: this.state.Query
        };

        //post it to the server
        Axios.post('http://localhost:4000/api/queries', carQuery)
            .then()
            .catch();

        //set and update the state
        this.setState({
            Name: '',
            Email: '',
            Phone: '',
            Query: ''
        });

    }

    render() {
        return (
            <div className="HomeApp">

                {/* Image of customer service */}
                <a href="/">
                    <img
                        className="d-block w-100"
                        src="https://doofindermedia.s3.amazonaws.com/blog/2017/01/10/atencion_al_cliente_tienda_online.jpg"
                        alt="Contact us picture"
                        className="center"
                        width="800px"
                    />
                </a><br /><br />

                <div className="createApp">
                    {/* Form to take in the reqired information for contact purposes */}
                    <form onSubmit={this.handleSubmit} className="contact">

                        {/* Enter Name */}
                        <div className="form-group">
                            <label>
                                Name:
                        </label>
                            <input type="text"
                                className='form-control'
                                value={this.state.Name}
                                onChange={this.handleName} />
                        </div>

                        {/* Enter Email */}
                        <div className="form-group">
                            <label>
                                Email Address:
                        </label>
                            <input type="text"
                                className='form-control'
                                value={this.state.Email}
                                onChange={this.handleEmail} />
                        </div>

                        {/* Enter Phone Number */}
                        <div className="form-group">
                            <label>
                                Phone Number:
                        </label>
                            <input type="text"
                                className='form-control'
                                value={this.state.Phone}
                                onChange={this.handlePhone} />
                        </div>

                        {/* Enter Query */}
                        <div className="form-group">
                            <label>
                                What is your Query?:
                        </label>
                            <textarea rows="3" className='form-control'
                                className='form-control'
                                value={this.state.Query}
                                onChange={this.handleQuery} />
                        </div><br />

                        {/* Submit all queries to the server once the submit button is pressed */}
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                        <br />
                    </form>
                </div>

            </div>
        );
    }
}

export default Contact;
