import React, { Component } from 'react';
import MIDISounds from 'midi-sounds-react';

class Chords extends Component {
    constructor(props) {
        super(props);

        this.state = {
            instrument: 3,
            reference: {
                base: 60, 
                variant: "major"
            },
            curStage: 1,
            score: 0,
            question: {
                base: 0, 
                variant: "major"
            },
            octave: 4,
        }

        this.chordIntervals = {
            "major": [-12, -8, -5, 0, 4, 7, 12],
            "minor": [-12, -9, -5, 0, 3, 7, 12],
        }

        this.playChord = this.playChord.bind(this);
    }

    componentDidMount() {
        this.loadNewStage();
    }

    loadNewStage() {
        var newQuestion = {
            base: -1, 
            variant: -1 
        }
        do {
            newQuestion.base = Math.floor(Math.random() * 25) - 12 + this.state.reference.base;
            newQuestion.variant = Math.floor(Math.random() * 2) ? "major" : "minor";
        } while (newQuestion.base === this.state.question.base && newQuestion.variant === this.state.question.variant);

        this.playChord(newQuestion);
        this.setState({question: newQuestion});
    }

    playChord(chord) {
        chord.variant = ((chord.variant in this.chordIntervals) ? chord.variant : "major");

        // Calculate notes in chord that fit on keyboard
        // NOTE: assumes that keyboard is centered around reference - only works for C rn
        var base = this.state.reference.base;
        var notes = this.chordIntervals[chord.variant]
            .map(function(value) {return value + chord.base;})
            .filter(function(value) {
                return (value >= base - 12) && (value <= base + 12)
            });

        this.midiSounds.playChordNow(this.state.instrument, notes, 2);
	}

    onKeyClickHandler(note) {
        //if (note === this.state.question.base) {
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
            <p className="App-intro">Note: {this.state.question.base} {this.state.question.variant}</p>				
            <p><button href="/" onClick={this.playChord.bind(this, this.state.reference)}>Reference Note</button></p>
            <p><button href="/" onClick={this.playChord.bind(this, this.state.question)}>Question Note</button></p>
            <p><button href="/" onClick={this.onKeyClickHandler.bind(this, 0)}>Guess</button></p>
            <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} />	
            <hr/>
        </div>
        )
    }
}; export default Chords;
