import React from 'react'
import cassandra from './imgs/cassandra.png'
import mongodb from './imgs/mongodb.png'
import mysql from './imgs/mysql.png'
import sqlserver from './imgs/sqlserver.png'
import postgresql from './imgs/postgresql.png'

function Database() {
    return (
        <>
            <div  className="container" >

                <h5 style={{ paddingTop: "40px",fontSize:"25px"  }} >DATA BASE</h5>
                <nav className="main">

                    <div className="menu1">

                        <a href="#">
                            <img src={cassandra} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                            CASSANDRA </a>
                                       

                        <a href="#"> <img src={mongodb} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        MONGODB</a>
                        <a href="#"> <img src={mysql} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        MYSQL</a>
                        <a href="#"> <img src={sqlserver} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        SQL SERVER</a>
                        <a href="#"> <img src={postgresql} alt="net" style={{ width: "100px", height: "100px" }} /><br />
                        POSTGRESQL</a>

                    </div>
                </nav>
            </div>

        </>
    )
}

export default Database;
