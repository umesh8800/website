import React from 'react'
import angular from './images/angular.png'
import backbonejs from './images/backbonejs.png'
import bootstrap from './images/bootstrap.png'
import html from './images/html.png'
import react from './images/react.png'
import jquery from './images/jquery.png'
import frame7 from './images/frame7.png'
import knockout from './images/knockout.png'
import './Main.css';

function Main1() {
    return (
        <div>
            <div className="container">

               <h5 style={{ paddingTop: "40px" ,fontSize:"25px" }} >FRONT END</h5>
                <nav className="main">

                    <div className="menu1">

                        <a href="#">
                            <img src={angular} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                            ANGULAR JS</a>

                        <a href="#"> <img src={backbonejs} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        BACKBONE JS</a>
                        <a href="#"> <img src={html} alt="net" style={{ width: "100px", height: "100px" }} /><br />
            HTML</a>
                        <a href="#"> <img src={bootstrap} alt="net" style={{ width: "100px", height: "100px" }} /><br />
            Bootstrap</a>
            <a href="#"> <img src={react} alt="net" style={{ width: "100px", height: "100px" }} /><br />
            React Js</a> <br/>
            {/* <div> <br/> <br/>
            <a href="#"> <img src={jquery} alt="net" style={{ width: "100px", height: "100px" }} /><br />
            Js</a>
            <a href="#"> <img src={frame7} alt="net" style={{ width: "100px", height: "100px" }} /><br />
            Js</a>
            <a href="#"> <img src={knockout} alt="net" style={{ width: "100px", height: "100px" }} /><br />
            Js</a>
            </div> */}



                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Main1;
