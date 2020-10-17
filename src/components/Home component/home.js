import React from 'react'
import { useHistory } from 'react-router-dom'
import "./home.css"

export default function Home() {


    return (
        <>
        <div className="parentDiv">
        <div className="placeholderDiv">
            <div className="container">
            <div className="row mainHeader">
            <h1 className="h1Tag">Welcome to my utility app!</h1>
            </div>
            <div className="row secondHeader">
            <h3 className="h3Tag">This home page is still under construction</h3>
            </div>
            <div className="row mainP">
            <p className="pTag">Feel free to check out this siimple yet hopefully useful utility app.
                I plan to add a lot more to this app, and to style it in much greater length. 
                For now, please enjoy the dice roller and the coin flipper! Check out my portfolio for links to the Github repository. 
            </p>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}