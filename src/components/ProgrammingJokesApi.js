import React from 'react';
import { Link } from 'react-router-dom';
import './ProgrammingJokes.css'

 class ProgrammingJokesApi extends React.Component {
    constructor(props){
        super(props);
        this.getData = this.getData.bind(this);
        this.state = {
            isLoaded: false,
            error: null,
            jokes: null
        }
    }
 componentDidMount() 
 { 
     this.getData() 
}

 getData() { 
     var xhr = new XMLHttpRequest() 
     xhr.addEventListener('load', () => { 
         if(xhr.readyState === 4){
             if(xhr.status === 200){
                 var response = xhr.responseText,
                 json = JSON.parse(response);

                 this.setState( prev =>({
                    isLoaded: true,
                    jokes: json
                    
                 }))
                    
             } else {
                 this.setState({
                     isLoaded: true,
                     error: xhr.responseText
                 })
             }
         }
      }) 
     xhr.open('GET', ' https://sv443.net/jokeapi/v2/joke/Programming', true) 
     xhr.send();
    }
    render() { 
      return (
        <div>
          <ul>
            {this.state.jokes && (<div key={this.state.jokes.id}>
              <div class="flex">
              <p>{this.state.jokes.setup}</p>
              </div>
              <div class="flex">
              <p>{this.state.jokes.delivery}</p>
              </div>
            </div>)}
          </ul>
          <div class="flex">
            <button class="btn third" onClick={this.getData}>Click here to 🤣</button>
          </div>
          <div class="flex">
            <Link to="/SportsJokes">
              <button class="btn third" >Sports Jokes</button>
          </Link>
          </div>
          <div class="flex">
            <Link to="/DadJokes">
              <button class="btn third" >Dad Jokes</button>
            </Link>
          </div>
          <div class="flex">
            <Link to="/">
              <button class="btn third" >Home Page</button>
            </Link>
          </div>
      </div>
      )
     }
    }
    export default ProgrammingJokesApi;