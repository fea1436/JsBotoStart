import React, {Component} from "react";

class AppUpOne extends Component {
    constructor() {
        super();
        this.state = {
            number: 0,
        };
    }

    upThree = () => {
        this.upOne();
        this.upOne();
        this.upOne();
    }

    upOne = () => {
        this.setState((prevState)=> ({
            number: prevState.number + 1
        }));
    }

    render() {
        return (
            <>
                <h1>{this.state.number}</h1>
                <button onClick={this.upOne}>Up One by One</button>
                <br /><br />
                <button onClick={this.upThree}>Up Three by Three</button>
            </>
        )
    }
};

export default AppUpOne;