import React from 'react';
import {Link} from "react-router-dom"

class HomePage extends React.Component {

    render(){
        return (
            <div>
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