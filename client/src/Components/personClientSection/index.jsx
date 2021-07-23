import './styless.css'
export const ClientSection = ({clients})=>{

    return(
        <div className="clientSection">
            {(clients.personClients || []).map(clients =>(
                <div key={clients._id} className="clientCard">
                    <div>
                        <h2 className="titleClient">{clients.name}<br></br> {clients.lastName}</h2>
                        <p>Situação: <strong>{clients.situation}</strong></p>
                        {console.log(clients.situation)}
                        <small>Telefone: <strong>{clients.phone}</strong></small>
                        <br></br>
                        <button className="buttonIcons successButton">Ver cliente</button>
                        <div className="sectionButtonManager">
                            <button className="buttonIcons alert">Editar</button>
                            <button className="buttonIcons danger">Remover</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}