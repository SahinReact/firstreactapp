import React from 'react'
import "./Card2.css"

// import Navbar2 from "./Navbar2"

function Card2() {
    return (
        <>
        {/* <div className="nav">
        <Navbar2/>
        </div> */}

            <div className="card">
            <div className="content">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                
                <h2>Breakfast</h2>
                <p>...</p>
                <button className="btn">Order</button>
                </div>

            </div>
        </>
    )
}

export default Card2
