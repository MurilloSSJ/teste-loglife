import './styless.css';
import { Component } from 'react';
import { ClientSection } from '../../Components/personClientSection';
export class enterpriseClients extends Component{
    state = {
        clients:[],
        allClients:[],
        page:0,
        clientsPerPage:4
    }
    async componentDidMount(){
        //const {page,clientsPerPage} = this.state
        const clientsResponse = fetch('http://localhost:5000/clients/search/clientEnterprise')
        const [clients] = await Promise.all([clientsResponse])
        const clientsJSON = await clients.json()
        this.setState({
            clients:clientsJSON
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
        const clients = this.state.clients.enterpriseClients
        return(
            <>
            <ClientSection
            clients={clients}
            typeClient="clientEnterprise"
            ></ClientSection>
            </>
        )
    }
}
export default enterpriseClients