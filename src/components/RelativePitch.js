import React, { Component } from 'react';
import MIDISounds from 'midi-sounds-react';

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

        this.playNote(newQuestion);
        this.setState({question: newQuestion});
    }

    playNote(note) {
		this.midiSounds.playChordNow(this.state.instrument, [note], 2);
	}

    onKeyClickHandler(note) {
        //if (note === this.state.question) {
            this.onCorrectKey();
        // }
        // else {
        //     this.onIncorrectKey();
        // }
    }

    onCorrectKey() {
        this.setState({score: this.state.score + 1});
        this.loadNewStage();
    }

    onIncorrectKey() {
        this.setState({score: this.state.score - 1});
    }

    render() {
        return (
        <div className="App">
            <p className="App-intro">Score: {this.state.score}</p>	
            <p className="App-intro">Note: {this.state.question}</p>				
            <p><button href="/" onClick={this.playNote.bind(this, this.state.reference)}>Reference Note</button></p>
            <p><button href="/" onClick={this.playNote.bind(this, this.state.question)}>Question Note</button></p>
            <p><button href="/" onClick={this.onKeyClickHandler.bind(this, 0)}>Guess</button></p>
            <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[this.state.instrument]} />	
            <hr/>
        </div>
        )
    }
}; export default RelativePitch;
