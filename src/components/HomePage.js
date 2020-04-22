import React from 'react';
import {Link} from "react-router-dom";
import Modal from './Modal';

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: true
        }
    }
    toggleModal = () => {
        this.setState({
            showModal: ! this.state.showModal
        })
    };

    render(){
        const { showModal } = this.state;
        return (
            <div>
                {
                    showModal ? (
                        <div className="my-modal">
                           <h1>Heading</h1>
                           <p>Lorem ipsum </p>
                           <button 
                              className="modal-close"
                              onClick={this.toggleModal}
                           >X</button>
                        </div>
                     ) : null
                }
                 <h1>Welcome</h1>
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
            </div>
        )
    }
}

export default HomePage;