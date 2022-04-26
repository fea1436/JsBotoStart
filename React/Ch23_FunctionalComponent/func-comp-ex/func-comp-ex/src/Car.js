import React from "react";

const Car = (props) => {
    return (
        <>
            <p>My car model is {props.model} and my car color is {props.color}</p>
            <span>{props.children}</span>
        </>
    )
}

export default Car;