import React, {Component} from 'react';
import Social from '../components/Social';

class Contact extends Component{
    render(){
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Need to add a new member to the team</h3>
                <p>You can contact me through</p>
                <h3>Email : subdit@gmail.com</h3>
                <p>Or you can reach me at</p>
                <h3>Tell : 508-215-6832</h3>
                <Social />
            </div>
        )
    }
}
export default Contact;