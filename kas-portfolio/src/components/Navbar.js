import React, {Component} from 'react';
import Navitem from './Navitem';

// Will code Navitem.js later for now let's focus on Navbar.js
//  "Navitem" is the sub-component.

class Navbar extends Component{
    constructor(props){
        super(props);
        this.state={
            'NavItemActive': ''
        }
    }
    activeitem=(x)=>
    {
    if(this.state.NavItemActive.length>0)
    {
    document.getElementById(this.state.NavItemActive).classList.remove('active');
    }
    this.setState({'NavItemActive':x},()=>{
     document.getElementById(this.state.NavItemActive).classList.add('active');
    });
    };


    render(){
        return(
            <nav>
                <ul>
                    <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
                    <Navitem item="About" tolink="/about" activec={this.activeitem}></Navitem>
                    <Navitem item="Experience|Education" tolink="/experience|Education" activec={this.activeitem}></Navitem>
                    <Navitem item="Skills" tolink="skills" activec={this.activeitem}></Navitem>
                    <Navitem item="Contact" tolink="contact" activec={this.activeitem}></Navitem>
                </ul>
            </nav>
        )
    }
}
export default Navbar;