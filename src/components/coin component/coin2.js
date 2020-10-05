import React, {Component} from 'react'
import "./coin.css";

class Coin2 extends Component {
    constructor(props) {
        super(props)
    }

    
render() {
     return(
        <div>
            <img src={require("../../assets/QuarterTails.jpg")} className="quarterImg img-fluid"></img>
        </div>
     )
} 

} 
export default Coin2; 