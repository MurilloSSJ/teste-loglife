import { Switch, Route, BrowserRouter,Redirect } from "react-router-dom"
import { isAuthenticated } from "./auth"
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


const PrivateRoute = ({component:Component,...rest}) =>{
    return(
    <Route 
    {...rest} 
    render = {props =>{
        var promise = isAuthenticated()
        promise.then((resposta)=>{
            if(resposta===true){
                <Component {...props}></Component>
            }else{
                <Redirect to={{pathname:'/'}}/>
            }
        })

    }}>
    </Route>
    )
}
const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route component={UpdatePersonClient} exact path="/clients/clientPerson/update/:id"></Route>
                <Route component={OnlyPersonClient} exact path='/clients/clientPerson/:id'></Route>
                <Route component={personClients} exact path='/clients/clientPerson'></Route>

                <Route component={UpdateEnterpriseClient} exact path= '/clients/enterpriseClient/update/:id'></Route>
                <Route component={OnlyEnterpriseClient} exact path="/clients/enterpriseClient/:id"></Route>
                <Route component={enterpriseClients} exact path ='/clients/enterpriseClient'></Route>

                <PrivateRoute exact path="/clients" component={clients}></PrivateRoute>
                <Route component ={newClient} exact path='/newclient'></Route>

                <Route component = {login} exact path='/' ></Route>

                <Route component={notFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes