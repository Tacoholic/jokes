import React from 'react';
import {Link} from "react-router-dom";
import Modal from './Modal';
import './Buttons.css'
import './HomePage.css'
class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: true,
            firstName: '',
            submittedName: '',
            submitedFirstName: ''

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
                           <h1>Welcome!</h1>
                           <p>Please enter your name</p>
                           <form>  
                                <input 
                                    placeholder="Name"
                                    type="text" 
                                    name="firstName" 
                                    onChange={this.inputChange}>
                                </input>
                           </form>
                           <span className="tooltiptext">
                           <button  
                                class="tooltip"
                                type="button" 
                                disabled={!this.state.firstName} 
                                onClick={this.displayNameHandler}>
                                Submit
                            </button>
                            </span>
                        </div>
                     ) : null
                }
                
                <div class="flex">
                {this.state.submitedFirstName && <h1>Hello {this.state.submitedFirstName}</h1>}
                </div>
                <div class="flex">
                    <p>Please select a category </p>
                </div>
                <div class="flex">
                    <Link to="/ProgrammingJokes">
                        <button class="btn third">Programming Jokes</button>
                    </Link>
                </div>
                <div class="flex">
                    <Link to="/SportsJokes">
                        <button class="btn third">Sports Jokes</button>
                    </Link>
                </div>
                <div class="flex">
                    <Link to="/DadJokes">
                        <button class="btn third">Dad Jokes</button>
                    </Link> 
                </div>
                <div class="flex">
                    <Link to="/SpanishJokes">
                        <button class="btn third">Chistes en ñ</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default HomePage;