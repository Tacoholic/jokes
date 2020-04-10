import React, { Component } from 'react';


// class JokesApi extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             jokes: [],
//         };
//     }

//     componentDidMount(){
//         fetch('https://cors-anywhere.herokuapp.com/https://icanhazdadjoke.com/', {
//             headers: {
//                 'Content-Type': 'appliction/json',
//                 'Accept': 'application/json'
//             }
//         })
//             .then(response => response.json())
//             .then(data => this.setState(prev => ({jokes: prev.jokes.concat(data.joke)})))
//     }

//     render () {
//       var jokes;
//         return (
//             <ul>
//                 {this.state.jokes.map(joke => 
//                   <div key={joke.id}>
//                      <p>{joke.joke}</p>
//                   </div>    
//                 )}
//             </ul>
//         )
//     }
// }


// export default JokesApi;

class JokesApi extends Component {
    constructor(props){
        super(props);

        this.state = {
            jokes: [],
        };
    }

    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://icanhazdadjoke.com/', {
            headers: {
                'Content-Type': 'appliction/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => this.setState(prev => ({jokes: prev.jokes.concat(data)})))
    }

    render () {
      console.log(this.state.jokes);
        return (
            <ul>
                {this.state.jokes.map(joke => 
                  <div key={joke.id}>
                     <p>{joke.joke}</p>
                  </div>    
                )}
            </ul>
        )
    }
}

export default JokesApi;