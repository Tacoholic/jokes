import React from 'react'
import SportsJokesData from './SportsJokesData';

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
      </React.Fragment >
    );
  }
}
export default SportsJokesApi;