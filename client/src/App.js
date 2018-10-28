import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';//import Game from './components/game';
//import Favourites from './components/Favourites';

import AppNavBar from './components/navBar';
import Home from './components/Home';
// import News from './components/footer';
// import About from './components/body';

import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//const SomeComponent = Route(props => <App {...props} />);

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/getgame')
      .then(response => {
        this.setState({
          games: response.data
        });
      })
      .catch(error => {
        alert(error);
      });
  }

  handleSubmit(gameData) {
    console.log(gameData);
    axios
      .post('http://localhost:5000/getfavourite')
      .then(res => {
        alert('Saved');
      })
      .catch(error => {
        alert(error);
      });
  }

  handleDelete(title) {
    console.log(title);
    axios.post('http://localhost:5000/getfavourite/delete').catch(error => {
      window.location.reload();
    });
  }

  render() {
    return (
      <Router>
        <div>
          <AppNavBar />
          <Route
            exact
            path="/"
            render={() => (
              <Home item={this.state.games} onClick={this.handleSubmit} />
            )}
          />
          {/* <Route path="/about" component={About} />
        <Route path="/news" component={News} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
