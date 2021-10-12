import React,{useState} from 'react'
import "./Navbar2.css"
const Navbar2 = (Data2) => {
    const[menuDataCat,setMenuDataCat]=useState(Data2);
    const filterItem=(category)=>{
        const updatedList = Data2.filter((curElem)=>{
            return curElem.category===category;
        })
        setMenuDataCat(updatedList);
      
    }
    return (
        <>
            <header>
                    <a className="logo" href="#"></a>
                    <div className="menu"></div>
                    <nav>
                            <button className="active" onClick={()=>filterItem("Breakfast")}>Breakfast</button>
                            <button onClick={()=>filterItem("Lunch")}>Lunch</button>
                            <button onClick={()=>filterItem("Dinner")}>Dinner</button>
                            <button onClick={()=>filterItem("Snacks")}>Snacks</button>
                            <button onClick={()=>filterItem("Ice cream")}>Ice Cream</button>
                            <button>All</button>
                    </nav>
                    <div className="clearfix"></div>
            </header>
            </>
    )
}

export default Navbar2
