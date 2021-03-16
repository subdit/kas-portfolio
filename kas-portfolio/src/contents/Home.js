import React, {Component} from 'react';
import RectTypingEffect from  'react-typing-effect';
import profilepic from '../img/kasidit_b.jpg';
import Social from '../components/Social';

class Home extends Component {
    render(){
        return(
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img><br></br>
            <br></br>
            <RectTypingEffect className="typingeffect" text={['...Hi, My name is Kasidit Bualoeng ...', 'I am a Full-Stack Software Developer ...', 'You can call me Sub or Kas ...']}
             speed={80} eraseDelay={500}/>
             <Social/>
            </div>
        )
    }
}
export default Home;