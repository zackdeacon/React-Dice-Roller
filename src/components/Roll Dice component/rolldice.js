import React, {Component} from 'react'
import Dice from '../Die component/die'
import "./rolldice.css";


class Rolldice extends Component {
    constructor(props) {
        super(props)
    }

    state = { numOne: "three", numTwo: "four", rolling: false};

    handleClick = e => {
        let Arr = ["one", "two", "three", "four", "five", "six"]
        let rand = Math.floor(Math.random() * 6)
        let rand2 = Math.floor(Math.random() * 6)

        let randOne = Arr[rand]
        let randTwo = Arr[rand2]

        this.setState({ numOne : randOne, numTwo : randTwo, rolling: true  })

        setTimeout(() => {
            this.setState({ rolling: false })
        }, 500)
    }


    render() {
   
        return(
            <>
            <div className="row App">
            <div className="diceDiv">
            <Dice value={this.state.numOne} rolling={this.state.rolling}/>
            </div>
            <div className="diceDiv">
            <Dice value={this.state.numTwo} rolling={this.state.rolling}/>
            </div>
            </div>
            <div className="row App">
            <button className="rollBtn btn btn-light" onClick={this.handleClick} disabled={this.state.rolling}>{this.state.rolling ? "Rolling..." : "Roll Dice!"}</button>
            </div>
            </>
        )
    }
}
export default Rolldice;