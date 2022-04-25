import React, {Component} from "react";

class Car extends Component {
    render() {
        return (
            <p>
                my car is {this.props.model} and it's color is {this.props.color}.
                {this.props.children}
            </p>
        )
    }
};

export default Car;