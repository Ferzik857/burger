import React, { useEffect, useState } from "react"
import Header from "./Header"
import MenuAdmin from "./MenuAdmin"
import Order from "./Order"
import sampleBurgers from "../sample-burgers"
import Burger from "./Burger"
import SignIn from "./Auth/SignIn"







function Restaurant(props) {
   
    const [burgers,setBurgers]=useState({})
    const [order, setOrder]=useState({})
    const [userName, setUserName]=useState('')
    const restorId = props.match.params.restauranId
    useEffect(()=>{
        const ref = JSON.parse(localStorage.getItem(restorId + "Burgers"))
        const orders = JSON.parse(localStorage.getItem(restorId))
        if(ref){setBurgers(ref)} 
        if(orders){setOrder(orders)}
      },[restorId])
    useEffect(()=>{
        const ref = {...burgers}
        localStorage.setItem(restorId + "Burgers", JSON.stringify(ref))
      },[burgers,restorId])

      useEffect(()=>{
        const ref = {...order}
        localStorage.setItem(restorId, JSON.stringify(ref))
      },[order,restorId])  
  
    const addBurger = burger =>{
        const prevBurgers = {...burgers}
        prevBurgers[`burger${Date.now()}`] = burger
        setBurgers(prevBurgers)    
    }
    const updateBurger = (key, updatedBurger)=>{
        const prevBurgers = {...burgers}
        prevBurgers[key] = updatedBurger
        setBurgers(prevBurgers)
    }


    const addToOrder = key =>{
        const orders = {...order}
       orders[key]= orders[key] + 1 || 1
       setOrder(orders)
    }

    const loadSampleBurgers = ()=>{
        setBurgers(sampleBurgers)
    }
    const deleteBurger = key => {
        const burg = {...burgers}
     delete burg[key] 
        setBurgers(burg)
    }
    const deleteFromOrder = key => {
        const orde = {...order}
     delete orde[key] 
     setOrder(orde)
    }
return (
    <SignIn setUserName={setUserName}>
    <div className="burger-paradise">
    <div className = "menu">
        <Header />
        <ul className='burgers'>
            {Object.keys(burgers).map(key => {
                return <Burger 
                key={key} 
                index={key} 
                details={burgers[key]}
                addToOrder={addToOrder}/>
            })}
        </ul>
    </div>  
    <Order burgers={burgers}
    order={order} 
    deleteFromOrder={deleteFromOrder}/>  
    <MenuAdmin addBurger={addBurger}
    burgers={burgers}
    loadSampleBurgers={loadSampleBurgers}
    updateBurger={updateBurger}
    deleteBurger={deleteBurger}
    userName={userName}/>
    </div>
    </SignIn>
)
}


export default Restaurant