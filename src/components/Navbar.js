import React from 'react'
import "./Nav.css"

function navbar() {
    return (
        <>
            <nav className="MainNav">
               <div className="NavContatenar">
                    <button>Breakfast</button>
                    <button>Lunch</button>
                    <button>dinear</button>
                    <button>all</button>
              </div>
            </nav>
        </>
    )
}

export default navbar
