import React from 'react'
import { Switch,Route,Link } from 'react-router-dom'
import { navMenu } from './Components/nav-menu'

//Importando as páginas
import login from './pages/Login/index'

export default function App(){
    const menu = React.createElement(navMenu)
    return(
        <>
        {menu}
        <main>
            <Switch>
                <Route path='/' component = {login}></Route>
            </Switch>
        </main>
        </>
    )
}