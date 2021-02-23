
import React from "react"


function Burger(props) {
const {image, name, price, desc, status}=props.details
const isAvailable = status ==="available"

return <li className='menu-burger'>
    <div className='image-container'>
        <img src={image} alt={name}/>
    </div>
    <div className='burger-details'>
<h3 className='burger-name'>{name}
<span className='price'>{price}RUB </span></h3>
<p>{desc}</p>
<button onClick={()=>props.addToOrder(props.index)}
 className='buttonOrder' disabled={!isAvailable}>
   {isAvailable ? 'Заказать' : 'Временно нет'} </button>
    </div>

</li>
}


export default Burger