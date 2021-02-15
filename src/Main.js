import React from 'react'
import net from './images/net.png'
import php from './images/php.png'
import java from './images/java.png'
import javaS from './images/javaS.png'
import './Main.css';

function Main() {
    return (
        <div>
            <div className="container"  >

               <h5 style={{ paddingTop: "40px", fontSize:"25px"}} >TECHNOLOGIES WE EXCEL AT</h5> 
                <nav className="main">

                    <div className="menu1">
                       
                        <a href="#">
                            <img src={net} alt="net" style={{width:"100px",height:"100px"}} /><br />
                                Net</a>

                        <a href="#"> <img src={php} alt="net" style={{width:"100px",height:"100px"}} /><br />
                            Php</a>
                            <a href="#"> <img src={java} alt="net" style={{width:"100px",height:"100px"}} /><br />
                            Java</a>
                        <a href="#"> <img src={javaS} alt="net" style={{width:"100px",height:"100px"}} /><br />
                            Js</a>



                    </div>
                </nav>
            </div>

        </div>
    )
}

export default Main
