import React from 'react';
import { Link } from 'react-router-dom';
import './ProgrammingJokes.css';
import './Buttons.css';

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
              <div className="flex">
                <p>{this.state.jokes.setup}</p>
              </div>
              <div className="flex">
                <p>{this.state.jokes.delivery}</p>
              </div>
            </div>)}
          </ul>
          <div className="flex">
            <button className="btn joke" onClick={this.getData}>Click here for joke</button>
          </div>
          <div className="flex">
            <Link to="/SportsJokes">
              <button className="btn sports" >Sports Jokes</button>
            </Link>
          </div>
          <div className="flex">
            <Link to="/DadJokes">
              <button className="btn dad" >Dad Jokes</button>
            </Link>
          </div>
          <div className="flex">
            <Link to="/SpanishJokes">
              <button className="btn spanish" >Chistes en ñ</button>
            </Link>
          </div>
          <div className="flex">
            <Link to="/">
              <button className="btn home" >Home Page</button>
            </Link>
          </div>
      </div>
      )
     }
    }
    export default ProgrammingJokesApi;