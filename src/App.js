import React from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { create } from 'domain';
import Create from './components/create';
import Read from './components/read';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Navbar bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Content} />
          <Route path="/read" component={Read} />
          <Route path="/create" component={Create} />
        </Switch>

        {/* <Header></Header>
        <Content></Content>
        <Footer></Footer> */}

      </div>
      </Router>
    );
  }
}

export default App;
