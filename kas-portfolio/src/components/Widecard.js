import React, {Component} from 'react';

class Widecard extends Component {
    render(){
        return(
            <div className="widecard">
                <div className="compdet">
                    <h3>{this.props.title}</h3>
                    <h4 className="secontext">{this.props.where}</h4>
                    <h4 className="secondtext">{this.props.from} - {this.props.to}</h4>
                    <p className="secondtext" >{this.props.details}</p>
                </div>
            </div>
        )
    }
}
export default Widecard;