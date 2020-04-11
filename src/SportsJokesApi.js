import React from 'react'
import SportsJokesData from './SportsJokesData';

class SportsJokesApi extends React.Component {

    render() {
        return SportsJokesData.map(SportsJokesData => (
            <div key={SportsJokesData.id}>
              <p>{SportsJokesData.question}</p>
              <p>{SportsJokesData.answer}</p>
            </div>
            )
            )
    }
}

          export default SportsJokesApi;