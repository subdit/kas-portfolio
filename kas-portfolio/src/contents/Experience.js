import React, {Component} from 'react';
import Widecard from '../components/Widecard';

class Experience extends Component{
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Experience</h1>
                <Widecard title="Software Engineer" 
                    where="National Grid, Waltham, Ma." 
                    from="March 2020" 
                    to="December 2020"
                    details=" => User focused product developer on an agile team. Used Microsoft DevOps tool to collaborate with product managers, designers, QA, and engineers to deliver and transform the legacy paperwork to the digital platform.
                     => Full-Stack Engineer used React Native to develop an iOS application that’s used Google Map API to render the jobs to the users and React.js to build a desktop/mobile responsive web app for supervisor to corresponding to the users that’s used native app. 
                     => Leveraging TypeORM, and PostgreSQL with a Node.js back-end API to support the front-end application. 
                     => Developing new features according to the user’s feedback, fixing bugs, performing root cause analysis, and creating test scripts for QA for the best practice of the UX/UI.
                    ">
                </Widecard>

                <Widecard title="Web Developer" 
                    where="Freelancer.com Canton, Ma." 
                    from="November 2018" 
                    to="Present"
                    details=" => Worked with clients to determine requirements and created designs. 
                    => Performed iterative development working closely with the clients to determine the best customer experience. 
                    => Leveraged WordPress by customized PHP, CSS, TMD hosting web service and Sketchpad.io
                    ">
                </Widecard>

                <Widecard title="Full-Stack Java Development Program" 
                    where="Per Scholas Cambridge, Boston, Ma." 
                    from="May 2019" 
                    to="August 2019"
                    details=" => Hands-on training Java 8, MariaDB, Heidi, JDBC, JPA, HTML5, CSS, JSP, Junit, Spring MVC, Servlet 
                    and used Maven to wire, create, manage, test and inspect a full-stack web application, Agile, Jira/Scrum.">

                      
                </Widecard>

                <Widecard title="Full-Stack Web Development Immersive Program" 
                    where="General Assembly, Boston, Ma." 
                    from="July 2018" 
                    to="October 2018"
                    details=" => Hands-on full-Stack projects used JavaScript, HTML5, CSS3, React.js, Ruby on Rails, Bootstrap, PostgreSQL,
                    MongoDB, Mongoose, jQuery. 
                    ">
                </Widecard>

                <Widecard title="Executive Sous Chef" 
                    where="Rita's Hospitality Group, Waltham, Ma." 
                    from="April 2014" 
                    to="july 2018"
                    details=" => Creative, team leader and managed daily kitchen operation and establish standard according to safety 
                    and health regulations, mentored apprentice chef and supervised 15 employees.
                    ">
                </Widecard>


                <h1 className="subtopic">Education</h1>
                <Widecard title="Master's degree: Information Technology" 
                    where="University of Massachusetts, Lowell, Ma." 
                    from="September 2013" 
                    to="February 2018"
                    details="Course Works: Demonstrated AWS Cloud, Advance Cloud Computing, Network-System 
                    Administration, Operating System, Data Mining, Data Infrastructure, Network security.
                    ">

                </Widecard>

                <Widecard title="Bachelor's degree: Economics" 
                    where="Ramkhamhaeng University, Bangkok, Thailand." 
                    from="May 1994" 
                    to="May 1998">
                </Widecard>
            </div>
        )
    }
}
export default Experience;