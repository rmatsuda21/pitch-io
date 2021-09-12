import { Component } from "react";

class Button extends Component {
    render() {
        return(
            <div className="button" onClick={this.props.onClick}>
                <img src={this.props.img}></img>
                <span>{this.props.text}</span>
            </div>
        )
    }
}