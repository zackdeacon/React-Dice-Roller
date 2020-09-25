import React, {Component} from 'react'
import "./die.css";

class Dice extends Component {

    render() {
        return(
            <div>
                <i  className={`die fas fa-dice-${this.props.value} ${this.props.rolling ? 'rotate-diagonal-2' : ''}`}></i>
            </div>
        )
    }
}
export default Dice;