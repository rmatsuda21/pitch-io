import React, { Component } from 'react';
import MIDISounds from 'midi-sounds-react';

class Sandbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            instrument: 3,
            octave: 4,
            mode: "notes",
            variant: "major"
        }

        this.chordIntervals = {
            "major": [-12, -8, -5, 0, 4, 7, 12],
            "minor": [-12, -9, -5, 0, 3, 7, 12],
        }
        this.scaleIntervals = {
            "major": [-12, -10, -8, -7, -5, -3, -1, 0, 2, 4, 5, 7, 9, 11, 12],
            "minor": [-12, -10, -8, -7, -5, -3, -1, 0, 2, 4, 5, 7, 8, 10, 12],
        }

        this.playChord = this.playChord.bind(this);
    }

    componentDidMount() {
        this.loadNewStage();
    }

    playNote(note, length) {
		this.midiSounds.playChordNow(this.state.instrument, [note], length);
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
    
    // not useful right now
    playScale(scale) {
        scale.variant = ((scale.variant in this.scaleIntervals) ? scale.variant : "major");

        // Calculate notes in chord that fit on keyboard
        // NOTE: assumes that keyboard is centered around reference - only works for C rn
        var base = (scale.base > 60)? scale.base - 12 : scale.base;;
        var notes = this.scaleIntervals[scale.variant].map(function(value) {return value + scale.base;});

        this.midiSounds.playChordNow(this.state.instrument, notes, 2);
    }

    onKeyClickHandler(note) {
        if (this.state.mode === "notes") {
            this.playNote(note, 0.5);
        }
        else if (this.state.mode === "chords") {
            this.playChord({base: note, variant: this.state.variant});
        }
        else if (this.state.mode === "scale") {
            this.playNote(note, 0.5);
        }
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
}; export default Sandbox;
