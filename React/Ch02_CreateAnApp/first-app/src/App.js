import React, {Component} from "react";
import Hi from "./Hi";
import Salam from "./Salam";


class App extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <h1>Ehsan Aslani</h1>
                </div>
                <p>Hello World</p>
                
                {/* <Hi></Hi> */}
                <Hi />
                <h2>Another Hi Component After Here</h2>
                <Salam />
            </>            
        )
    }
}

export default App;