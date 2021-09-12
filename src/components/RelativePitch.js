import React, { Component } from 'react';
import Nav from './Nav';
import Keyboard from './Keyboard'

class RelativePitch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            instrument: 3,
            reference: 60,
            curStage: 1,
            score: 0,
            question: 0,
            octave: 4,
        }
    }

    componentDidMount() {
        this.loadNewStage();
    }

    loadNewStage() {
        var newQuestion = -1;
        do {
            newQuestion = Math.floor(Math.random() * 25) - 12 + this.state.reference;
        } while (newQuestion === this.state.question);

        this.increment = this.increment.bind();
    }

    increment() {

    }

    render() {
        return (
        <div className="App">
            <p className="App-intro">Score: {this.state.score}</p>	
            <p className="App-intro">Note: {this.state.question}</p>				
            <p><button href="/" onClick={this.playNote.bind(this, this.state.reference)}>Reference Note</button></p>
            <p><button href="/" onClick={this.playNote.bind(this, this.state.question)}>Question Note</button></p>
            <p><button href="/" onClick={this.onKeyClickHandler.bind(this, 0)}>Guess</button></p>
            <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />	
            <hr/>
        </div>
        )
    }
}; export default RelativePitch;
