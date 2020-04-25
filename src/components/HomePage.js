import React from 'react';
import {Link} from "react-router-dom";
import Modal from './Modal';


class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: true,
            firstName: '',
            submittedName: ''
        };
    
    }
    inputChange = e => {
        const firstName = e.target.value;
        this.setState(() => ({ firstName }));

    };
    displayNameHandler = () => {
        this.setState(prevState => ({ submitedFirstName: prevState.firstName, showModal:false }));
      };
    
 
    render(){
        const { showModal } = this.state;
        return (
            <div>
                {
                    showModal ? (
                        <div className="my-modal">
                           <h1>Welcome to my app!</h1>
                           <p>Please enter your name</p>
                           <form>  
                               <label>
                                   Name:
                                   <input type="text" name="firstName" onChange={this.inputChange} ></input>
                               </label>
                               <button type="button" onClick={this.displayNameHandler}>
                                    Submit
                                </button>
                           </form>
                
                        </div>
                     ) : null
                }
                 <h1>Welcome, {this.state.submitedFirstName && this.state.submitedFirstName}</h1>
                <p>Please select a category </p>
                <Link to="/ProgrammingJokes">
                <button>Programming Jokes</button>
                </Link>
                <Link to="/DadJokes">
                 <button>Dad Jokes</button>
                 </Link>
                 <Link to="/SportsJokes">
                <button>Sports Jokes</button>
                </Link>
                <Link to="/SpanishJokes">
                <button>Jokes en ñ</button>
                </Link>
                
            </div>
        )
    }
}

export default HomePage;