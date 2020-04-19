import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
              <p>{this.state.joke.joke}</p>
            </div>)}
        </ul>
        <button onClick={this.getJokes}>Click me!!</button>
        <Link to="/ProgrammingJokes">
        <button>Programming Jokes</button>
      </Link>
      <Link to="/">
        <button>Home Page</button>
      </Link>
      <Link to="/SportsJokes">
        <button>Sports Jokes</button>
      </Link>
      </div>
    );
  }
}

export default DadJokesApi;