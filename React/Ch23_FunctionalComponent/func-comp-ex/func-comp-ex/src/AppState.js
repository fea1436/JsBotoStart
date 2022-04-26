import React, {Component} from "react";

class AppState extends Component {

    constructor() {
        super();
        this.state = {
            name: "Bugatti",
            model: "Sheeron",
            speed: 420
        }
    }

    changeHandler = () => {
        this.setState({
            name: "BMW"
        })
    }

    render() {
        return (
            <>
                <p>
                   My first car is {this.state.name} and its model {this.state.model} and its highest speed is {this.state.speed}
                </p>
                <button onClick={this.changeHandler}>Change</button>
            </>
        )
    }
};

export default AppState;