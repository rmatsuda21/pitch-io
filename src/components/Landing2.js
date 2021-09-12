import React, { Component } from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import {Card} from "./Card"


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
        return (
            <>
                <div className="main">
                    <Nav/>
                    <Card 
                        icon="./RP.svg" 
                        title="Relative Pitch" 
                        text="Train your relative pitch" 
                        link="rp" 
                    />
                    <Card 
                        icon="./Chord.svg" 
                        title="Chord" 
                        text="How well do you know your chords?" 
                        link="chord" 
                    />
                    <Card 
                        icon="./clef.svg" 
                        title="Intervals" 
                        text="How far is the interval?" 
                        link="interval" 
                    />


                </div>
            </>
        )
    }
}; export default Landing2;