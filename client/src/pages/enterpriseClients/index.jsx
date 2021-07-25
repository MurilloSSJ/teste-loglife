import './styless.css';
import { Component } from 'react';
import { ClientSection } from '../../Components/personClientSection';
export class enterpriseClients extends Component{
    state = {
        clients:[],
        allClients:[],
        page:0,
        clientsPerPage:10
    }
    async componentDidMount(){
        const {page,clientsPerPage} = this.state
        //const {page,clientsPerPage} = this.state
        const clientsResponse = fetch('http://localhost:5000/clients/search/clientEnterprise')
        const [clients] = await Promise.all([clientsResponse])
        const clientsJSON = await clients.json()
        const clientsReal = clientsJSON.enterpriseClients
        this.setState({
            clients:clientsReal.slice(page,clientsPerPage),
            allClients:clientsReal
        })

    }
    moreClients = ()=>{
        const {page,clientsPerPage,allClients,clients} = this.state
        const nextPage = page+clientsPerPage
        const nextClient = allClients.slice(nextPage,nextPage + clientsPerPage)
        clients.push(...nextClient)
        this.setState({clients,page:nextPage})
    }

    render(){
        const {clients,page,clientsPerPage,allClients} = this.state
        const noMoreClients = page + clientsPerPage >=allClients.length
        return(
            <div className="paginationDiv">
            <ClientSection
            clients={clients}
            typeClient="clientEnterprise"
            ></ClientSection>
            <button className="buttonIcons successButton disable"
            onClick={this.moreClients}
            disabled = {noMoreClients}
            >Ver mais clientes</button>
            </div>
        )
    }
}
export default enterpriseClients