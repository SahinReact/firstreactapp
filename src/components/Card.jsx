import React from 'react'
import "../components/Card.css"

const Card=({Data})=>{
    return(
    <>
        {Data.map((curElem)=>{
            return(
                <>
                <div className="Card">
                <div className="Component">
                <div className="image">
                    <img src={curElem.image} alt="" />
                   </div>
                
                <h2>{curElem.name}</h2>
                <p>{curElem.description}</p>
                    <button className="btn">Order Now</button>
                </div>
                </div>
                </>
            )
        })}
    </>
    )
}
export default Card
