import './styless.css'
export const ClientSection = ({clients})=>{

    return(
        <div className="clientSection">
            {clients.personClients.map(clients =>(
                <div key={clients._id}>
                    <div>
                        <h2>{clients.name}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}