import React from 'react'
import SportsJokesData from './SportsJokesData';

class SportsJokesApi extends React.Component {

    getRandomJoke(){
       return SportsJokesData[(SportsJokesData.length * Math.random()) << 0]

    }

    render() {
        const randomJoke =  this.getRandomJoke()
        return (
            <React.Fragment>
            <p>{randomJoke.question}</p>
            <h1>{randomJoke.answer}</h1>
            </React.Fragment>           
        )
        }
    }
          export default SportsJokesApi;