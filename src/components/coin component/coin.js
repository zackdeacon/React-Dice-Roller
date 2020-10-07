import React, {Component} from 'react'
import "./coin.css";

class Coin extends Component {
    constructor(props) {
        super(props)
    }

    
render() {
     return(
        <div>
            <img src={require("../../assets/QuarterHeads.jpg")} className={`quarterImg img-fluid ${this.props.flipping ? 'flip-horizontal-bottom' : ''}`}></img>
        </div>
     )
} 

} 
export default Coin; 