import React from 'react';
import {Link} from "react-router-dom";
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
                           <h1>Welcome to the joke machine!</h1>
                           <p>Please enter your name</p>
                           <form>  
                                <input 
                                    autoFocus
                                    className="new task"
                                    placeholder="Name"
                                    type="text" 
                                    name="firstName" 
                                    onChange={this.inputChange}>
                                </input>
                           </form>
                           <button  
                                className="modal-btn"
                                type="button" 
                                disabled={!this.state.firstName} 
                                onClick={this.displayNameHandler}>
                                Submit
                            </button>
                        </div>
                     ) : null
                }
                
                <div className="homepage">
                    {this.state.submitedFirstName && <h1>Hello, {this.state.submitedFirstName}!</h1>}
                </div>
                <div className="homepage">
                    <p>Please select a category </p>
                </div>
                <div className="homepage">
                    <Link to="/ProgrammingJokes">
                        <button className="btn programming">Programming Jokes</button>
                    </Link>
                </div>
                <div className="homepage">
                    <Link to="/SportsJokes">
                        <button className="btn sports">Sports Jokes</button>
                    </Link>
                </div>
                <div className="homepage">
                    <Link to="/DadJokes">
                        <button className="btn dad">Dad Jokes</button>
                    </Link> 
                </div>
                <div className="homepage">
                    <Link to="/SpanishJokes">
                        <button className="btn spanish">Chistes en ñ</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default HomePage;