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
    const { randomJoke } = this.state;
    return (
      <React.Fragment >
      <p> {randomJoke.question} </p> 
      <p> {randomJoke.answer} </p>
      <button onClick = {this.getRandomJoke}>click here </button> 
  
      <Link to="/ProgrammingJokes">
        <button>Programming Jokes</button>
      </Link>
      <Link to="/">
        <button>Home Page</button>
      </Link>
      <Link to="/DadJokes">
        <button>Dad Jokes</button>
      </Link>


      </React.Fragment >
    );
  }
}
export default SportsJokesApi;