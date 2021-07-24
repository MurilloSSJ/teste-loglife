import './styless.css'
import { Component } from 'react'
import { OnlyClientSection } from '../../Components/onlyClient/index'
class OnlyPersonClient extends Component{
    constructor(props){
        super(props)
        this.state = {
            client:[]
        }
    }
    async componentDidMount(){
        const idClient = this.props.match.params.id
        const clientResponse = fetch('http://localhost:5000/clients/search/clientPerson/'+idClient)
        const [client] = await Promise.all([clientResponse])
        const clientJSON = await client.json()
        this.setState({client:clientJSON})
    }
    render(){
        const client = this.state.client.personClient
        return(
            <div className="principalDiv">
                <OnlyClientSection client={client} typePerson="clientPerson"></OnlyClientSection>
            </div>
        )
        
    }
}
export default OnlyPersonClient