import React, { Component } from 'react';
import Nav from './Nav';

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
                <h1>HIIIII</h1>
            </div>
        )
    }
}; export default RelativePitch;