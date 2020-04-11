import React from 'react';


 class ProgrammingJokesApi extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            jokes: []
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
                    jokes: [...prev.jokes,json]
                    
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
        var body;
        if(!this.state.isLoaded){
            body = <div>...Loading</div>;
        } else if (this.state.error) {
            body = <div>Error occurred { this.state.error} </div>
        } else {
            var jokes = this.state.jokes.map(
                joke => <div key={joke.id} 
                className="jokesdisplay">
                    <h1>
                {joke.setup}{joke.delivery}
                </h1>
                </div>
            );
            body = <div>{jokes}</div> 
        }
    return body;
     }
    }
    export default ProgrammingJokesApi;