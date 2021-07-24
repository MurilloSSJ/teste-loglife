import './styless.css'
export const ClientSection = ({clients,typeClient})=>{
    if(typeClient==="clientPerson"){
        return(
            <div className="clientSection">
                {(clients || []).map(clients =>(
                    <div key={clients._id} className="clientCard">
                        <div>
                            <h2 className="titleClient">{clients.name}<br></br> {clients.lastName}</h2>
                            <p>Situação: <strong>{clients.situation}</strong></p>
                            <small>Telefone: <strong>{clients.phone}</strong></small>
                            <br></br>
    
                            
                            <a className="linkDualButton" href={"/clients/clientPerson/"+clients._id}><button className="buttonIcons successButton">Ver cliente</button></a>
                            <br></br>
    
                            <a className="linkDualButton" href={"/clients/clientPerson/update/"+clients._id}><button className="buttonIcons alert">Editar cliente</button></a>
                            <br></br>
    
                            <form method="POST" action={"http://localhost:5000/clients/delete/clientPerson/"+clients._id}>
                            <button className="buttonIcons danger">Remover</button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        )
    }else if(typeClient ==='clientEnterprise'){
        return(
            <div className="clientSection">
                {(clients || []).map(clients =>(
                    <div key={clients._id} className="clientCard">
                        <div>
                            <h2 className="titleClient">{clients.name}<br></br> {clients.lastName}</h2>
                            <p>Situação: <strong>{clients.situation}</strong></p>
                            <small>Telefone: <strong>{clients.phone}</strong></small>
                            <br></br>
    
                            
                            <a className="linkDualButton" href={"/clients/enterpriseClient/"+clients._id}><button className="buttonIcons successButton">Ver cliente</button></a>
                            <br></br>
    
                            <a className="linkDualButton" href={"/clients/enterpriseClient/update/"+clients._id}><button className="buttonIcons alert">Editar cliente</button></a>
                            <br></br>
    
                            <form method="POST" action={"http://localhost:5000/clients/delete/clientEnterprise/"+clients._id}>
                            <button className="buttonIcons danger">Remover</button>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
