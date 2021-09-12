import React, { Component } from 'react';

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            a: 0,
            b: 0,
        }

        this.incrementA = this.incrementA.bind(this);
    }

    incrementA() {
        var a = this.state.a + 1;
        this.setState({ a: a });
    }

    render() {
        return (
            <>
            <div>
                <h1>{this.state.a}</h1>
                <div onClick={
                    () => {
                        var a = this.state.a + 1;
                        this.setState({ a: a });
                    }
                }>Click</div>
            </div>
            <div>
                Howdy!
            </div>
            </>
        )
    }
}
export default Test;