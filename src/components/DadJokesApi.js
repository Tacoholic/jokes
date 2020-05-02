import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './SportsJokes.css'
class DadJokesApi extends Component {
  constructor(props) {
    super(props);
    this.getJokes = this.getJokes.bind(this);
    this.state = {
      joke: null
    };
  }

  getJokes() {
    fetch("https://cors-anywhere.herokuapp.com/https://icanhazdadjoke.com/", {
      headers: {
        "Content-Type": "appliction/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then((data) => {
        console.log(this);
        this.setState({joke: data});
      });
  }

  render() {
    return (
      <div>
        <ul>
          
            {this.state.joke && (<div key={this.state.joke.id}>
              <div class="flex">
              <p>{this.state.joke.joke}</p>
              </div>
            </div>)}
        </ul>
        <div class="flex">
          <button class="btn-joke" onClick={this.getJokes}>Click here to 🤣</button>
        </div>
        <div class="flex">
          <Link to="/ProgrammingJokes">
          <button class="btn-programming">Programming Jokes</button>
          </Link>
        </div>
        <div class="flex">
          <Link to="/SportsJokes">
          <button class="btn-sports">Sports Jokes</button>
          </Link>
        </div>
        <div class="flex">
          <Link to="/">
          <button class="btn-home">Home Page</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default DadJokesApi;