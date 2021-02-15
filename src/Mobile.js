import React from 'react'
import android from './img/android.png'
import ios from './img/ios.png'
import mobile from './img/mobile.png'
import reactnative from './img/reactnative.png'



function Mobile() {
    return (
        <>
            <div className="container" >

                <i><b> <u style={{ color:"red"}} ><h5 style={{ paddingTop: "40px" }} >MOBILE</h5></u></b></i>
                <nav className="main">

                    <div className="menu1">

                        <a href="#">
                            <img src={android} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                            ANDROID</a>

                        <a href="#"> <img src={ios} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                            IOS</a>
                        <a href="#"> <img src={mobile} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                            PHONEGAP</a>
                        <a href="#"> <img src={reactnative} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                            REACT NATIVE</a>

                    </div>
                </nav>
            </div>

        </>
    )
}

export default Mobile
