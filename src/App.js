import React from 'react'
import Navbar2 from './components/Navbar2'
import "./App.css"
import Card from './components/Card'
import Menu from "./components/menuApi"



const App = () => {
  const [menuData, setMenuData] = React.useState(Menu);
    const filterItem=(category)=>{
        const updatedList = Menu.filter((curElem)=>{
            return curElem.category===category;
        });
        setMenuData(updatedList);
      };
  return (
    <div className="App">
    
    <header>
    <a className="logo" href="#">LOGO</a>
    <div className="menu"></div>
    <nav>
        
            <button className="active" onClick={() => setMenuData(Menu)}>All</button>
            <button onClick={() =>  filterItem("Breakfast")}>Breakfast</button>
            <button onClick={() =>  filterItem("Lunch")}>Lunch</button>
            <button onClick={() =>  filterItem("Dinner")}>Dinner</button>
            <button onClick={() =>  filterItem("Snacks")}>Snacks</button>
            <button onClick={() =>  filterItem("Ice cream")}>Ice Cream</button>
           
    </nav>
    <div className="clearfix"></div>
</header>
      
      <Card Data={menuData}/>
      {/* <Navbar2 Data2={menuDataCat}/> */}
    </div>
  )
}


export default App
