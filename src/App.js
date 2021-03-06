import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './components/Menu/Menu'
import CtxApp from './context/CtxApp'
import Index from './pages/Index'
import Favorites from './pages/Favorites'

export default function App() {
    return (
        <>
        <CtxApp>
            <Router>
                <Menu/>
                <Switch>
                    <Route path='/' exact={true} component ={Index}/>
                    <Route path='/favorites' exact={true} component={Favorites}/>
                </Switch>
            </Router>
        </CtxApp>
        </>
    )
}
