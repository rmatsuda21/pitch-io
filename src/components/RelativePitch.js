import React, { Component } from 'react';

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
            <div>
                <h1>Test</h1>
            </div>
        )
    }
}; export default RelativePitch;