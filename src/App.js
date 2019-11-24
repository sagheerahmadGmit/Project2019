import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { create } from 'domain';
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';
import AboutUs from './components/aboutUs';
import Contact from './components/contact';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="background">
          <div className="App" className="center">
            <br />
            <Navbar bg="transparent" variant="dark" sticky="top">
              <Navbar.Brand href="/">AutoTrader</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Buy a Car</Nav.Link>
                <Nav.Link href="/create">Sell a Car</Nav.Link>
                <Nav.Link href="/aboutUs">About Us</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </Nav>
            </Navbar>
            <br />
            <Switch>
              <Route exact path="/" component={Content} />
              <Route path="/read" component={Read} />
              <Route path="/create" component={Create} />
              <Route path="/edit/:id" component={Edit} />
              <Route path="/aboutUs" component={AboutUs} />
              <Route path="/contact" component={Contact} />
            </Switch>

          </div>

          <br /><br />
          <footer className="footer">
            <div>
              <h5>Car Retailer</h5>
              <span>&copy; 2019 Data Representation Project</span>
            </div>
            <div className="ml-auto">
              <marquee behavior="scroll" direction="right" >The best prices around! Buy a car and you will not be dissapointed.</marquee>
            </div>
          </footer>

        </div>
      </Router>

    );
  }
}

export default App;
