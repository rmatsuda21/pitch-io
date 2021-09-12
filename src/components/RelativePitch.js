import React, { Component } from 'react';
import Nav from './Nav';
import Keyboard from './Keyboard'

class RelativePitch extends Component {
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
            <div className="main">
                <Nav/>
                <Keyboard/>
            </div>
        )
    }
}; export default RelativePitch;
