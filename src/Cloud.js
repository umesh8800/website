import React from 'react'
import windows from './img/windows.png'
import amazon from './img/amazon.png'
import heroku from './img/heroku.png'

function Cloud() {
    return (
        <>

            <div className="container"  >

                <h5 style={{ paddingTop: "40px" ,fontSize:"25px" }} >CLOUD</h5>
                <nav className="main">

                    <div className="menu1">

                        <a href="#">
                            <img src={windows} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        WINDOWS</a>

                        <a href="#"> <img src={amazon} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        AMAZON<br/> WEB SERVICES</a>
                        <a href="#"> <img src={heroku} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        HEROKU</a>

                    </div>
                </nav>
            </div>

        </>
    )
}

export default Cloud;
