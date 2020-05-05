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
        <div className="flex">
          <button className="btn joke" onClick={this.getJokes}>Click here for joke</button>
        </div>
        <div className="flex">
          <Link to="/ProgrammingJokes">
            <button className="btn programming">Programming Jokes</button>
          </Link>
        </div>
        <div className="flex">
          <Link to="/SportsJokes">
            <button className="btn sports">Sports Jokes</button>
          </Link>
        </div>
        <div className="flex">
          <Link to="/SpanishJokes">
            <button className="btn spanish">Chistes en ñ</button>
          </Link>
        </div>
        <div className="flex">
          <Link to="/">
            <button className="btn home">Home Page</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default DadJokesApi;