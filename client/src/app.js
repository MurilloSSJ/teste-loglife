import React from 'react'
import { Switch,Route } from 'react-router-dom'
import { navMenu } from './Components/nav-menu'

//Importando as páginas
import login from './pages/Login/index'
import clients from './pages/Lista-clientes/index'
import newClient from './pages/new-client/index'

export default function App(){
    const menu = React.createElement(navMenu)
    return(
        <>
        {menu}
        <main>
            <Switch>
                <Route path='/clients' component = {clients}></Route>
                <Route path='/newclient' component ={newClient}></Route>
                <Route path='/' component = {login}></Route>
            </Switch>
        </main>
        </>
    )
}