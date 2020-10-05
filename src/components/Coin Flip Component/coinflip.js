import React, {Component} from 'react'
import Coin from '../coin component/coin'
import Coin2 from '../coin component/coin2'
import "./coinflip.css";

let num1 = 0;
let num2 = 0;
let num3 =0; 

class Coinflip extends Component {
    constructor(props) {
        super(props)
        this.state= {flipping: false, tailsCount: num1, headsCount: num2, totalFlip: num3, coinFace: false}

    }


    handleclick = e => {
        let randFlip = (Math.floor(Math.random() * 2)+1)

        if (randFlip === 1) {
        this.setState({ tailsCount: num1++, coinFace: false})
        } else {
        this.setState({ headsCount: num2++, coinFace: true})
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
        {this.state.coinFace ? <Coin /> : <Coin2 />}
        <button onClick={this.handleclick} disabled={this.state.flipping}>{this.state.flipping ? 'Hold Please...' : 'Flip the coin!'}</button>
        <p>Flipped {this.state.totalFlip} times. {this.state.tailsCount} Tails and {this.state.headsCount} Heads.</p>
        </div>
        </>
     )
} 

} 
export default Coinflip; 