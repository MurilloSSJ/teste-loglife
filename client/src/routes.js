import { Switch, Route, BrowserRouter,Redirect } from "react-router-dom"
//Pages
import  UpdatePersonClient from "./pages/updatePerson"
import login from'./pages/Login/index'
import clients from'./pages/Lista-clientes/index'
import newClient from'./pages/new-client/index'
import personClients from './pages/personClients/index'
import OnlyPersonClient from './pages/onlyClientPerson'
import enterpriseClients from'./pages/enterpriseClients'
import OnlyEnterpriseClient from'./pages/onlyEnterprise'
import UpdateEnterpriseClient from'./pages/updateEnterprise'
import  notFound  from "./Components/notFound/notFound"
import AdmPainel from './pages/adminPainel/index'


const PrivateRoute = ({component:Component,...rest}) =>{
    console.log(sessionStorage)
    return(
    <Route 
    {...rest} 
    render = {props =>
        (sessionStorage.token)?(
        <Component {...props}></Component>
        ):(
            <Redirect to={{pathname:'/'}}/>
        )

    }>
    </Route>
    )
}
const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <PrivateRoute component={UpdatePersonClient} exact path="/clients/clientPerson/update/:id"></PrivateRoute>
                <PrivateRoute component={OnlyPersonClient} exact path='/clients/clientPerson/:id'></PrivateRoute>
                <PrivateRoute component={personClients} exact path='/clients/clientPerson'></PrivateRoute>

                <PrivateRoute component={UpdateEnterpriseClient} exact path= '/clients/enterpriseClient/update/:id'></PrivateRoute>
                <PrivateRoute component={OnlyEnterpriseClient} exact path="/clients/enterpriseClient/:id"></PrivateRoute>
                <PrivateRoute component={enterpriseClients} exact path ='/clients/enterpriseClient'></PrivateRoute>

                <PrivateRoute exact path="/clients" component={clients}></PrivateRoute>
                <PrivateRoute component ={newClient} exact path='/newclient'></PrivateRoute>

                <Route component = {login} exact path='/' ></Route>
                <PrivateRoute component={AdmPainel} exact path ='/admin'></PrivateRoute>

                <PrivateRoute component={notFound}></PrivateRoute>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes