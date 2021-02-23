import React, { useState } from 'react'


const Login = (props)=>{
    const [name, setName] = useState('')


    return(
        <div className='login-container'>
            <nav className='login'>
                <h2>Авторизация</h2>
                
                <input style={{position: 'relative',right: -100}}
                type='text' placeholder = 'Введите имя' value={name} 
                onChange={(even)=>setName(even.currentTarget.value)}/>
                <br/><br/>
                <button className="github" onClick={()=>props.authenticate(name)}>Войти</button>
            </nav>
        </div>
    )
}

export default Login