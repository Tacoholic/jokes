import React from 'react';
import {Link} from "react-router-dom";
import Modal from './Modal';

import Buttons from './Buttons.css'

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
                           <h1>Welcome to my Jokes app!</h1>
                           <p>Please enter your name</p>
                           <form>  
                                   <input 
                                        placeholder="Name"
                                        type="text" 
                                        name="firstName" 
                                        onChange={this.inputChange}>
                                    </input>
                               <button type="button" disabled={!this.state.firstName} onClick={this.displayNameHandler}>
                                    Submit
                                </button>
                           </form>
                
                        </div>
                     ) : null
                }
                 <h1>Welcome, {this.state.submitedFirstName && this.state.submitedFirstName}</h1>
                <p>Please select a category </p>
                <Link to="/ProgrammingJokes">
                <button class="btn third">Programming Jokes</button>
                </Link>
                <Link to="/DadJokes">
                 <button class="btn third">Dad Jokes</button>
                 </Link>
                 <Link to="/SportsJokes">
                <button class="btn third">Sports Jokes</button>
                </Link>
                <Link to="/SpanishJokes">
                <button class="btn third">Chistes en ñ</button>
                </Link>
                
            </div>
        )
    }
}

export default HomePage;