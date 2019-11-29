import React from 'react';
import '../App.css';
import Axios from 'axios';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Name: '', Email: '', Phone: '', Query: '' };

        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleQuery = this.handleQuery.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
    }

    handleName(event) {
        this.setState({ Name: event.target.value });
    }

    handleQuery(event) {
        this.setState({ Query: event.target.value });
    }

    handleEmail(event) {
        this.setState({ Email: event.target.value });
    }

    handlePhone(event) {
        this.setState({ Phone: event.target.value });
    }

    handleSubmit(event) {
        alert('Your Query has been successfully recieved and we will contact you shortly.');
        event.preventDefault();

        const carObject = {
            name: this.state.Name,
            email: this.state.Email,
            phone: this.state.Phone,
            query: this.state.Query
        };

        Axios.post('http://localhost:4000/api/queries', carObject)
            .then()
            .catch();

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
                    <form onSubmit={this.handleSubmit} className="contact">

                        <div className="form-group">
                            <label>
                                Name:
                        </label>
                            <input type="text"
                                className='form-control'
                                value={this.state.Name}
                                onChange={this.handleName} />
                        </div>

                        <div className="form-group">
                            <label>
                                Email Address:
                        </label>
                            <input type="text"
                                className='form-control'
                                value={this.state.Email}
                                onChange={this.handleEmail} />
                        </div>

                        <div className="form-group">
                            <label>
                                Phone Number:
                        </label>
                            <input type="text"
                                className='form-control'
                                value={this.state.Phone}
                                onChange={this.handlePhone} />
                        </div>

                        <div className="form-group">
                            <label>
                                What is your Query?:
                        </label>
                            <textarea rows="3" className='form-control'
                                className='form-control'
                                value={this.state.Query}
                                onChange={this.handleQuery} />
                        </div><br />

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
