import React from 'react'
import SpanishJokesData from '../data/SpanishJokesData';
import { Link } from 'react-router-dom';
import './SpanishJokes.css';
import './Buttons.css';

const initialState = {
  randomJoke: []
};

class SpanishJokesApi extends React.Component {
  constructor(props) {
    super(props);
    this.getRandomJoke = this.getRandomJoke.bind(this);
    this.state = initialState;
  }
  getRandomJoke() {
    this.setState({
      randomJoke: SpanishJokesData[(SpanishJokesData.length * Math.random()) << 0]
    });
  }
  render() {
    const { randomJoke } = this.state;
    return (
      <React.Fragment >
        <div className="flex">
          <p> {randomJoke.question} </p> 
        </div>
        <div className="flex">
          <p> {randomJoke.answer} </p>
        </div>
        <div className="flex">
          <button class="btn joke"onClick = {this.getRandomJoke}>Oprime aquí para el chiste</button> 
        </div>
        <div className="flex">
          <Link to="/ProgrammingJokes">
            <button className="btn programming">Programming Jokes</button>
          </Link>
        </div>
        <div className="flex">
          <Link to="/DadJokes">
            <button className="btn sports"> Sports Jokes</button>
          </Link>
        </div>
        <div className="flex">
          <Link to="/DadJokes">
            <button className="btn dad"> Dad Jokes</button>
          </Link>
        </div>
        <div className="flex">
          <Link to="/">
            <button className="btn home">Home Page</button>
          </Link>
         </div> 
      </React.Fragment >
    );
  }
}
export default SpanishJokesApi;