import React, { useEffect, useState } from 'react'
import Login from './Login'


const SignIn =(props)=>{
    const [user, setUser] = useState('')



    useEffect(()=>{
        const ref = localStorage.getItem("user")
       
        if(ref){setUser(ref)}
      },[])
    useEffect(()=>{
        const ref = user
        localStorage.setItem( "user", ref)
        
      },[user])

     
   const authenticate = (name)=>{
   if(!name){alert('Введите имя')}
    setUser(name)  
    props.setUserName(name)
   }
   
   
    if (!user){return <Login authenticate={authenticate} user={user}/>}
    return (
    props.children
    )}

export default SignIn