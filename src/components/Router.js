import React from "react"
import{BrowserRouter, Route, Switch } from "react-router-dom"
import App from "./App"
import NotFound from "./NotFound"
import Restaurant from "./Restaurant"




const Router =()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path ='/' component={App}/>
            <Route path='/restaurant/:restauranId' component={Restaurant}/>
            <Route component={NotFound}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Router