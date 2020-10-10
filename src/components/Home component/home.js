import React from 'react'
import { useHistory } from 'react-router-dom'
import "./home.css"

export default function Home() {
    const history = useHistory();

    const navigateCoin = () => {
        history.push("/coin")
    }

    const navigateRolldice = () => {
        history.push("/Rolldice")
    }


    return (
        <>
        <div className="RollDiceBtnDiv">
            <button className="btn-light btnClasses" onClick={navigateRolldice}>Roll Some Dice!</button>
        </div>
        <div className="coinBtnDiv">
            <button className="btn-light btnClasses" onClick={navigateCoin}>Flip a Coin!</button>
        </div>
        </>
    )
}