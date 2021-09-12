import React, { Component } from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Link} from 'react-router-dom'

import '../stylesheet/landing.css';

import relative from './RP.svg';
import chord from './Chord.svg';
import clef from './singleTreble.svg';


class Landing2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "instrument": "hi",
        }

        this.increment = this.increment.bind();
    }

    increment() {

    }

    render() {
        const Button = (props) => { return(
            <div className="bigButton" onClick={props.onClick}>
                <img src={props.img}></img>
                <a>{props.title}</a>
                <span>{props.txt}</span>
            </div>
        )};
            
        return (
            <>
                <div className="main" style={{paddingTop:'200px'}}>
                    <Nav/>
                    <div className="heading">Train your musical skills</div>
                    <div className="bigButtonHolder">
                    <Button onClick={() => {window.location.href='/rp';}} title={"Relative Pitch"} txt={"Train your relative pitch"} img={relative}/>
                    <Button onClick={() => {window.location.href='/chords';}} title={"Chords"} txt={"How well can you recognize your chords?"} img={chord}/>
                    <Button onClick={() => {window.location.href='/sandbox';}} title={"Sandbox"} txt={"Learn your scales and chords in an interractive sandbox"} img={clef}/>
                    </div>

                </div>
            </>
        )
    }
}; export default Landing2;