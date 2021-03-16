import React, {Component} from 'react';

class Skills extends Component {
    constructor(props){
        super(props);
        this.state={
            'myskills': ['React.js', 'React Native', 'Node.js', 'HTML5', 'CSS3', 
            'Java8', 'Ruby on Rails', 'Bootstrap', 'Angular8', 'PostgreSQL', 'MongoDB', 'JavaScript(ES6)', 
            'TypeScript', 'Agile', 'AWS; EC2, S3', 'Microsoft Azure DevOps Tool']
        };
    }
    render(){
        return(
            <div className="condiv skills">
                <h1 className="subtopic">My Skills</h1>
                <ul>
                    {this.state.myskills.map((value)=>{
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default Skills;
