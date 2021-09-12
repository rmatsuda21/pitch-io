import React, { Component, createRef } from 'react';
import MIDISounds from 'midi-sounds-react';
import Nav from './Nav';
import Keyboard from './Keyboard';

import question from './question.svg';
import volume from './volume.svg';

import '../stylesheet/RP.css';

class RelativePitch extends Component {
    constructor(props) {
        super(props);

        this.keyRef = createRef();

        this.state = {
            instrument: 4,
            reference: 60,
            curStage: 1,
            score: 0,
            question: 0,
            octave: 4,
            selectedNote: -1,
            keyRef: null,
        }
        this.onKeyClickHandler = this.onKeyClickHandler.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
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
        // if (note === this.state.question) {
        //     this.onCorrectKey();
        // }
        // else {
        //     this.onIncorrectKey();
        // }
        this.keyRef.current.highlightKey(-12);
        this.setState({selectedNote: note});
    }

    submitAnswer() {
        if (this.state.selectedNote === this.state.question) {
            this.onCorrectKey();
        }
        else {
            this.onIncorrectKey();
        }
    }

    onCorrectKey() {
        this.setState({score: this.state.score + 1});
        this.loadNewStage();
    }

    onIncorrectKey() {
        this.setState({score: this.state.score - 1});
        this.keyRef.current.test();
    }

    render() {
        const Button = (props) => { return(
            <div className="button" onClick={props.onClick}>
                <img src={props.img}></img>
                <a>{props.txt}</a>
            </div>
        )}

        return (
        <div className="main" style={{paddingTop:'200px'}}>
            <Nav/>
            
            <div className="buttonHolder">
                <Button onClick={this.playNote.bind(this, this.state.reference)} txt={"Play Reference"} img={volume}/>
                <Button onClick={this.playNote.bind(this, this.state.question)} txt={"Play Mystery"} img={question}/>
            </div>
            
            <Keyboard ref={this.keyRef} onKeyClickHandler={this.onKeyClickHandler}/>
            <p className="App-intro">Score: {this.state.score}</p>	
            <p className="App-intro">Note: {this.state.question}</p>				
            
            {/* <p><button href="/" onClick={this.playNote.bind(this, this.state.reference)}>Reference Note</button></p>
            <p><button href="/" onClick={this.playNote.bind(this, this.state.question)}>Question Note</button></p> */}
            <p><button href="/" onClick={this.onKeyClickHandler.bind(this, 0)}>Guess</button></p>
            <MIDISounds ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[this.state.instrument]} />	
            <hr/>
        </div>
        )
    }
} export default RelativePitch;