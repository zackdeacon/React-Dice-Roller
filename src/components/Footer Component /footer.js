import React, {Component} from 'react'
import { useHistory } from 'react-router-dom'
import "./footer.css";

export default function Footer() {
    
        const history = useHistory();

        const navigateCoin = () => {
            history.push("/coin")
        }
    
        const navigateRolldice = () => {
            history.push("/Rolldice")
        }
        
        const navigateHome = () => {
            history.push("/")
        }
        return(
            <>
            <footer>
                <button className="footerButton diceBtn" onClick={navigateRolldice}>Roll Dice!</button>
                <button className="footerButton homeBtn" onClick={navigateHome}>Home</button>
                <button className="footerButton" onClick={navigateCoin}>Flip A Coin!</button>
            </footer>
            </>
        ) 
}
