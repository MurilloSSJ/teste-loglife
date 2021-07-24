import './styless.css'
export const OnlyClientSection = ({client,typePerson})=>{
    if(client !== undefined){
        console.log(client.vehicles[0])
        var data = client.attendanceDay.slice(0,10)
        var dia = data.slice(8)
        var mes = data.slice(5,7)
        var ano = data.slice(0,4)
    }
    if(client === undefined){
        return(
            <div></div>
        )
    }else{
        if(typePerson==="clientPerson"){
            return(
                <div className="sectionOnlyClient">
                    <h1 className="nameClient">{client.name}</h1>

                    <p className="textClient"><strong>Tipo: </strong>Pessoa Física</p>

                    <p className="textClient"><strong>Situação: </strong>{client.situation}</p>

                    <p className="textClient"><strong>Nome: </strong>{client.name + ' ' + client.lastName}</p>

                    <p className="textClient"><strong>CPF: </strong>{client.cpf}</p>

                    <p className="textClient"><strong>Email: </strong>{client.email}</p>

                    <p className="textClient"><strong>Telefone: </strong>{client.phone}</p>
    
                    <p className="textClient"><strong>CEP: </strong>{client.cep}</p>

                    <p className="textClient"><strong>Rua: </strong>{client.street}</p>

                    <p className="textClient"><strong>Cidade: </strong>{client.city}</p>

                    <p className="textClient"><strong>Estado: </strong>{client.country}</p>

                    <p className="textClient"><strong>Horário de abertura: </strong>{client.openingHours}</p>

                    <p className="textClient"><strong>Dia de atendimento: </strong>{dia + '/' + mes + '/' +ano}</p>

                    <p className="textClient"><strong>Veículos: </strong>{client.vehicles.map(vehicle =>(
                        <div>
                            <p className="textClient">{vehicle} </p>
                        </div>
                    ))}</p>
                    <div className="alignCenterOnlyClient">
                        <a href="/clients/clientPerson"><button className="buttonIcons">Voltar</button></a>
                    </div>
                </div>
                )
        }else if(typePerson==='clientEnterprise'){
            return(
                <div className="sectionOnlyClient">
                    <h1 className="nameClient">{client.name}</h1>

                    <p className="textClient"><strong>Tipo: </strong>Pessoa Jurídica</p>

                    <p className="textClient"><strong>Situação: </strong>{client.situation}</p>

                    <p className="textClient"><strong>Nome: </strong>{client.name}</p>

                    <p className="textClient"><strong>Razão Social: </strong>{client.socialReason}</p>

                    <p className="textClient"><strong>CPF: </strong>{client.cnpj}</p>

                    <p className="textClient"><strong>Email: </strong>{client.email}</p>

                    <p className="textClient"><strong>Telefone: </strong>{client.phone}</p>
    
                    <p className="textClient"><strong>CEP: </strong>{client.cep}</p>

                    <p className="textClient"><strong>Rua: </strong>{client.street}</p>

                    <p className="textClient"><strong>Cidade: </strong>{client.city}</p>

                    <p className="textClient"><strong>Estado: </strong>{client.country}</p>

                    <p className="textClient"><strong>Horário de abertura: </strong>{client.openingHours}</p>

                    <p className="textClient"><strong>Dia de atendimento: </strong>{dia + '/' + mes + '/' +ano}</p>

                    <p className="textClient"><strong>Veículos: </strong>{client.vehicles.map(vehicle =>(
                        <div>
                            <p className="textClient">{vehicle} </p>
                        </div>
                    ))}</p>
                    <div className="alignCenterOnlyClient">
                        <a href="/clients/enterpriseClient"><button className="buttonIcons">Voltar</button></a>
                    </div>
                </div>
                )
        }
    }
}