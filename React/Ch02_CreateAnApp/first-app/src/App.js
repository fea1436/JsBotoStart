import React, {Component} from "react";
import Car from "./Car";

// class App extends Component {
//     render() {
//         return (
//             <div className="container">
//                 <h1>I am a Programmer</h1>    
//             </div>   
//         )
//     }
// }

// const Hi = () => {
//     return (
//         <div>
//             <h1>Hi Programmer</h1>
//             <p>I am a Developer</p>
//         </div>
//     )
// }

class App extends Component {
    render() {
        return (
            <>
                <h1>My Cars</h1>
                <p>
                    <Car model="Benz" color="Blue"/>
                    <Car model="BMW" color="Pine"/>
                    <Car model="Audi" color="Black">I am supercar</Car>
                </p>            
            </>
        )
    }
}

export default App;