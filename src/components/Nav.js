import { Component } from "react";
import '../stylesheet/nav.css';

class Nav extends Component {
    render() {
        return(
            <div className="nav">
                <img className="clef" src="./clef.svg" alt="Clef!"/>
                <div className="stripes">
                    <div className="stripe s1"></div>
                    <div className="stripe s2"></div>
                    <div className="stripe s3"></div>
                    <div className="stripe s4"></div>
                    <div className="stripe s5"></div>
                </div>
                
                <div className="title" onClick={() => {
                    window.location.href = '/';
                }}>Pitch.io</div>
            </div>
        )
    }
} export default Nav;