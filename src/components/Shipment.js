
import React from "react"


function Shipment(props) {
const shipping = props.total > 0 && props.total < 500 ? 350 : 99
const shippingNeon = shipping === 99 ? (<span 
    className='font-effect-neon total_wrap-cheap'>{shipping} RUB</span>):(
    <span>{shipping} RUB</span>)

return  <div className='total'>
<div className='total_wrap'>
<div>
    <div>Доставка: {props.total > 0 ? shippingNeon : null}</div>
    <div className='total_wrap-free'>
        {props.total < 500 ? `Закажите еще раз на ${500-props.total} RUB для доставки за 99 RUB`: null}
    </div>
</div> 
    <div className='total_wrap-final'>
        Итого: {props.total}RUB
    </div>
</div>
</div>
}


export default Shipment