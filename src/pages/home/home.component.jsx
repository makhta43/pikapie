import React from "react";
import {Form} from "react-bootstrap";


// function Home(){
//     return(
//         <div className="penis">peenis</div>
//     );
// }

class Home extends React.Component{
    constructor(){
        super();
        this.state={
            text: "words",
            length: 5
            
        }
    }
    render(){
        return(
            <div className="penis">{`${this.state.text} ${this.state.length}`}
            <Form.Control type="text" placeholder="Normal text" />
            </div>
        );
    }
}

export default Home;