import React, { Component } from "react";

class DadJokesApi extends Component {
  constructor(props) {
    super(props);
    this.fetchJokes = this.fetchJokes.bind(this);
    this.state = {
      joke: null
    };
  }

  fetchJokes() {
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
        <button onClick={this.fetchJokes}>Click me!!</button>
      </div>
    );
  }
}

export default DadJokesApi;