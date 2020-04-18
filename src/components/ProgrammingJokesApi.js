import React from 'react';


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
              <p>{this.state.jokes.setup}</p>
              <p>{this.state.jokes.delivery}</p>
            </div>)}
        </ul>
        <button onClick={this.getData}>Click me!!</button>
      </div>
      )
     }
    }
    export default ProgrammingJokesApi;