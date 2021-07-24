import React from 'react'
import { Switch,Route } from 'react-router-dom'
import { navMenu } from './Components/nav-menu'
import { rodape } from './Components/rodape'

//Importando as páginas
import login from './pages/Login/index'
import clients from './pages/Lista-clientes/index'
import newClient from './pages/new-client/index'
import personClients from './pages/personClients/index'
import OnlyPersonClient from './pages/onlyClientPerson'
import enterpriseClients from './pages/enterpriseClients'
import OnlyEnterpriseClient from './pages/onlyEnterprise'
import UpdatePersonClient from './pages/updatePerson'
import UpdateEnterpriseClient from './pages/updateEnterprise'
export default function App(){
    const menu = React.createElement(navMenu)
    const rodapePage = React.createElement(rodape)
    return(
        <>
        {menu}
        <main>
            <Switch>

                <Route path="/clients/clientPerson/update/:id" component={UpdatePersonClient}></Route>
                <Route path='/clients/clientPerson/:id' component={OnlyPersonClient}></Route>
                <Route path='/clients/clientPerson' component={personClients}></Route>

                <Route path= '/clients/enterpriseClient/update/:id' component={UpdateEnterpriseClient}></Route>
                <Route path="/clients/enterpriseClient/:id" component={OnlyEnterpriseClient}></Route>
                <Route path ='/clients/enterpriseClient' component={enterpriseClients}></Route>

                <Route path='/clients' component = {clients}>

                </Route>
                <Route path='/newclient' component ={newClient}></Route>
                <Route path='/' component = {login}></Route>
            </Switch>
        </main>
        {rodapePage}
        </>
    )
}