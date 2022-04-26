import React, {Component} from "react";

class Car extends Component {
    render() {
        return (
            <>
                <p>my car model is {this.props.model} and color is {this.props.color}</p>
                <span>{this.props.children}</span>
            </>
        )
    }
};

export default Car; 