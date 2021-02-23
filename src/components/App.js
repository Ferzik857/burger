import React, { useState } from "react"
import restaurants from "../sample-restaurants";


function App(props) {
  const [display,setDisplay]=useState(false)
  const [title,setTitle]=useState('')
  const [url,setUrl]=useState('')

const selectedRestaurant =(res)=>{
const{title,url}= res
setDisplay(false)
setTitle(title)
setUrl(url)
  }
 
  return (
    
    <div className="restaurant_select">
     <div className="restaurant_select_top">
      <div className="restaurant_select_top-header font-effect-outline"
      onClick={()=>setDisplay(!display)}>{title ? title : 'Выберите ресторан'}</div>

      <div className="arrow_picker">
        <div className="arrow_picker-up"></div>
        <div className="arrow_picker-down"></div>
      </div>
     </div>
  { display ? (<div className="restaurant_select_bottom">
     <ul>
  {restaurants.map(res=><li onClick={()=>selectedRestaurant(res)} key={res.id}>{res.title}</li>)}
     </ul>
   </div>): null}
    {title && !display ? <button onClick={()=> props.history.push(`/restaurant/${url}`)}>Перейти в ресторан</button>: null}
    </div>
    
  );
}

export default App;
