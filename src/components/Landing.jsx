import { Component } from "react";

class Landing extends Component {
    render() {
        return (
        <div className="main">
            {/* <Canvas draw={draw}/> */}
            <img className="clef" src="./clef.svg" alt="Clef!"/>
            <div className="stripes">
                <div className="stripe s1" id="1"></div>
                <div className="stripe s2" id="2"></div>
                <div className="stripe s3" id="3"></div>
                <div className="stripe s4" id="4"></div>
                <div className="stripe s5" id="5"></div>
            </div>
            
            <span className="title">Pitch.IO</span>
        </div>
        )
    }
} 
export default Landing;