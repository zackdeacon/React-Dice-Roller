import React, {Component} from 'react'
import Coin from '../coin component/coin'
import Coin2 from '../coin component/coin2'
import "./coinflip.css";


class Coinflip extends Component {
    constructor(props) {
        super(props)
        this.state= {flipping: false, tailsCount: 0, headsCount: 0, totalFlip: 0, coinFace: false}

    }
    handleclick = e => {
        let randFlip = (Math.floor(Math.random() * 2)+1)

        this.setState({ flipping: true, })
        setTimeout(() => {
            this.setState({ flipping: false })
            if (randFlip === 1) {
                this.setState(st => {
                    return { 
                        tailsCount: st.tailsCount+1, 
                        coinFace: false, 
                        totalFlip: st.totalFlip+1
                    }
                    })
                } else {
                this.setState(st => { 
                    return {
                         headsCount: st.headsCount +1, 
                         coinFace: true, 
                         totalFlip: st.totalFlip +1
                        }
                        })
                }
        
        }, 400)
    }
render() {
     return(
         <>
        <div className="coinWrapper">
        <h1>Flip Da Coin!</h1>
        {this.state.coinFace ? <Coin flipping={this.state.flipping}/> : <Coin2 flipping={this.state.flipping}/>}
        <button className="btn btn-light btnCoin" onClick={this.handleclick} disabled={this.state.flipping}>{this.state.flipping ? 'Hold Please...' : 'Flip the coin!'}</button>
        <p>Flipped {this.state.totalFlip} times. {this.state.flipping ? '...' : this.state.tailsCount} Tails and {this.state.flipping ? '...' : this.state.headsCount} Heads.</p>
        </div>
        </>
     )
} 
} 
export default Coinflip; 