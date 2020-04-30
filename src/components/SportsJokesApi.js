import React from 'react'
import SportsJokesData from '../data/SportsJokesData';
import { Link } from 'react-router-dom';
const initialState = {
  randomJoke: []
};

class SportsJokesApi extends React.Component {

  constructor(props) {
    super(props);
    this.getRandomJoke = this.getRandomJoke.bind(this);
    this.state = initialState;
  }

  getRandomJoke() {
    this.setState({
      randomJoke: SportsJokesData[(SportsJokesData.length * Math.random()) << 0]
    });
  }

  render() {
    const {randomJoke} = this.state;
    return (
      <React.Fragment >
        <div class="flex">
          <p>{randomJoke.question}</p> 
        </div>
        <div class="flex">
          <p>{randomJoke.answer}</p>
        </div>
        <div class="flex">
        <button class="btn third" onClick = {this.getRandomJoke}>Click here to 🤣 </button> 
        </div>
        <div class="flex">
          <Link to="/ProgrammingJokes">
            <button class="btn third">Programming Jokes</button>
          </Link>
        </div>
        <div class="flex">
          <Link to="/DadJokes">
          <button class="btn third">Dad Jokes</button>
          </Link>
        </div>
        <div class="flex">
          <Link to="/">
            <button class="btn third">Home Page</button>
          </Link>
        </div>
      </React.Fragment >
    );
  }
}
export default SportsJokesApi;