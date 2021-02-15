import React from 'react'
import aws15 from './aws/aws15.png'
import aws1 from './aws/aws1.png'
import aws2 from './aws/aws2.png'
import aws3 from './aws/aws3.png'
import aws4 from './aws/aws4.png'
import aws5 from './aws/aws5.png'
import aws6 from './aws/aws6.png'
import aws7 from './aws/aws7.png'
import aws8 from './aws/aws8.png'
import aws9 from './aws/aws9.png'
import aws10 from './aws/aws10.png'
import aws11 from './aws/aws11.png'
import aws12 from './aws/aws12.png'
import aws13 from './aws/aws13.png'
import aws14 from './aws/aws14.png'


function Aws() {
    return (
        <>
            <div className="container"  >

                <b></b><h5 style={{ paddingTop: "40px" ,fontSize:"25px" }} >AWS</h5><b />
                <nav className="main">

                    <div className="menu1">

                        <a href="#">
                            <img src={aws15} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                            ELASTIC<br/> SEARCH</a>


                        <a href="#"> <img src={aws1} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        AWS<br/> REDSHIFT</a>
                        <a href="#"> <img src={aws2} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        ELASTIC<br/> MAP REDUCE</a>
                        <a href="#"> <img src={aws3} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        DYNAMODB</a>
                        <a href="#"> <img src={aws4} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        KINESIS</a>



                    </div>
                </nav>
                <nav className="main">

                    <div className="menu1">

                        <a href="#">
                            <img src={aws5} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                            FIREHOSE </a>


                        <a href="#"> <img src={aws6} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        AMAZON<br/> CLOUDFRONT</a>
                        <a href="#"> <img src={aws7} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        BEAN STALK</a>
                        <a href="#"> <img src={aws8} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        AWS COGNITO</a>
                        <a href="#"> <img src={aws9} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        AWS IOT</a>



                    </div>
                </nav>
                <nav className="main">

                    <div className="menu1">

                        <a href="#">
                            <img src={aws10} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                            EMR & MACHINE<br/> LEARNING</a>


                        <a href="#"> <img src={aws11} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        AMAZON WEB<br/> SERVICES S3</a>
                        <a href="#"> <img src={aws12} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        SERVERLESS BIG<br/> DATA ANALYTICS</a>
                        <a href="#"> <img src={aws13} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        SERVERLESS API<br/> GATEWAY</a>
                        <a href="#"> <img src={aws14} alt="net" style={{ width: "100px", height: "100px" }} /><br />
RDS</a>



                    </div>
                </nav>
                

            </div>
        </>
    )
}

export default Aws;
