import './styless.css'
import { Component } from 'react'
import { OnlyClientSection } from '../../Components/onlyClient/index'
class OnlyEnterpriseClient extends Component{
    constructor(props){
        super(props)
        this.state = {
            client:[]
        }
    }
    async componentDidMount(){
        const idClient = this.props.match.params.id
        const clientResponse = fetch('http://localhost:5000/clients/search/clientEnterprise/'+idClient)
        const [client] = await Promise.all([clientResponse])
        const clientJSON = await client.json()
        this.setState({client:clientJSON})
    }
    render(){
        const client = this.state.client.enterpriseClient
        return(
            <div className="principalDiv">
                <OnlyClientSection client={client} typePerson="clientEnterprise"></OnlyClientSection>
            </div>
        )
        
    }
}
export default OnlyEnterpriseClient