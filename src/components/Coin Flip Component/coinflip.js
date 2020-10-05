import React, {Component} from 'react'
import Coin from '../coin component/coin'
import "./coinflip.css";

let num1 = 0;
let num2 = 0;
let num3 =0; 

class Coinflip extends Component {
    constructor(props) {
        super(props)
        this.state= {flipping: false, tailsCount: num1, headsCount: num2, totalFlip: num3}

    }


    handleclick = e => {
        let randFlip = (Math.floor(Math.random() * 2)+1)

        if (randFlip === 1) {
        this.setState({ tailsCount: num1++})
        } else {
        this.setState({ headsCount: num2++})
        }

        console.log(randFlip)

        this.setState({ flipping: true, })

        setTimeout(() => {
            this.setState({ flipping: false })
        }, 1000)
    }


render() {
     return(
         <>
        <div className="coinWrapper">
        <h1>Flip Da Coin!</h1>
        <Coin />
        <button onClick={this.handleclick} disabled={this.state.flipping}>Flip it real good!</button>
        <p>Flipped {this.state.totalFlip} times. {this.state.tailsCount} Tails and {this.state.headsCount} Heads.</p>
        </div>
        </>
     )
} 

} 
export default Coinflip; 