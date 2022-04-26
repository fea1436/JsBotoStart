import React, {Component} from "react";
import Car from "./Car";

class App extends Component {
    render() {
        return (
            <>
                <Car model="Mercedes Benz" color="Black">this is my main car</Car>
                <Car model="BMW" color="Pine" />
                <Car model="Bugatti" color="Blue">this is my supercar</Car>
            </>
        )
    }
}

export default App;