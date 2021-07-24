import './styless.css'
import enterprise from '../../img/enterprise.png'
export const FormsNewClient = ({client,typeClient})=>{
    if(typeClient===undefined || client ===undefined){
        return(
            <div className="loginDiv newClientRegister">
                <div className="alignCenterLogin">
                    <img src={enterprise} className="imgLogin" alt="Logo da empresa"></img>
                </div>
                <h3 className="smallTitle">Novo cliente</h3>
                <div className="Transition"></div>
                <form method="POST" action="http://localhost:5000/clients/add">
    
                    <label htmlFor="typeClient">Tipo de cliente</label>
                    <br></br>
                    <select name="typeClient" className="inputLogin">
                        <option value='clientPerson' defaultChecked>Pessoa Física</option>
                        <option value='clientEnterprise'>Pessoa Jurídica</option>
                    </select>
                    <br></br>
    
                    <label htmlFor="situation">Situação</label>
                    <br></br>
                    <div className="flexCheckbox">
                        <div>
                            <label>Ativo</label>
                            <input type="radio" value='Ativo' name="situation" defaultChecked></input>
                        </div>
                        <div>
                            <label>Não Ativo</label>
                            <input type="radio" value="Não ativo" name="situation"></input>
                        </div>
                    </div>
    
                    <label htmlFor="name">Nome / NomeFantasia</label>
                    <br></br>
                    <input name="name" className="inputLogin" type="text" required></input>
                    <br></br>
                    <label htmlFor="lastName">Razão social / Sobrenome</label>
                    <br></br>
                    <input name="lastName" className="inputLogin" type="text" required></input>
                    <br></br>
    
                    <label htmlFor="cpfcnpj">CPF / CNPJ</label>
                    <br></br>
                    <input name="cpfcnpj" className="inputLogin" required></input>
                    <br></br>
    
                    <label htmlFor="email">Email</label>
                    <br></br>
                    <input type="email" className="inputLogin" name="email" required></input>
                    <br></br>
    
                    <label htmlFor="phone">Telefone</label>
                    <br></br>
                    <input name="phone" className="inputLogin" required></input>
                    <br></br>
    
                    <label htmlFor="cep">CEP</label>
                    <br></br>
                    <input name="cep" className="inputLogin" required></input>
                    <br></br>
    
                    <label htmlFor="street">Rua</label>
                    <br></br>
                    <input name="street" className="inputLogin" required></input>
                    <br></br>
    
                    <label htmlFor="adress" required>Número</label>
                    <br></br>
                    <input name="adress" className="inputLogin" required></input>
                    <br></br>
    
                    <label htmlFor="city">Cidade</label>
                    <br></br>
                    <input name="city" className="inputLogin" required></input>
                    <br></br>
    
                    <label htmlFor="country">Estado</label>
                    <br></br>
                    <select name="country" className="inputLogin" required>
                        <option value='MG'>Minas Gerais</option>
                        <option value='SP'>São Paulo</option>
                        <option value='RJ'>Rio de Janeiro</option>
                        <option value='ES'>Espirito Santo</option>
                        <option value='SC'>Santa Catarina</option>
                        <option value='RS'>Rio Grande do Sul</option>
                        <option value='PR'>Paraná</option>
                        <option value='GO'>Goiás</option>
                        <option value='MT'>Mato Grosso</option>
                        <option value='MS'>Mato Grosso do Sul</option>
                        <option value='BA'>Bahia</option>
                        <option value='AL'>Alagoas</option>
                        <option value='MA'>Maranhão</option>
                        <option value='PI'>Piauí</option>
                        <option value='CE'>Ceará</option>
                        <option value='RN'>Rio Grande do Norte</option>
                        <option value='PE'>Pernambuco</option>
                        <option value='PB'>Paraíba</option>
                        <option value='SE'>Sergipe</option>
                        <option value='AM'>Amazonas</option>
                        <option value='RR'>Roraima</option>
                        <option value='AP'>Amapá</option>
                        <option value='PA'>Pará</option>
                        <option value='TO'>Tocantins</option>
                        <option value='RO'>Rondônia</option>
                        <option value='AC'>Acre</option>
                    </select>
                    <br></br>
    
                    <label htmlFor="opening">Hora de abertura</label>
                    <br></br>
                    <input type="time" name="opening" className="inputLogin" required></input>
                    <br></br>
    
                    <label htmlFor="attendance">Dia de atendimento</label>
                    <br></br>
                    <input name="attendance" className="inputLogin" type="Date" required></input>
                    <br></br>
    
                    <label htmlFor="vehicles">Veículos Utilizados</label>
                    <br></br>
                    <div className="flexCheckbox">
                        <div>
                            <label>Caminhão</label>
                            <input type="checkbox" value="Caminhão" name="vehicles"></input>
                        </div>
                        <div>
                            <label>Carro</label>
                            <input type="checkbox" value="Carro" name="vehicles"></input>
                        </div>
                        <div>
                            <label>Moto</label>
                            <input type="checkbox" value="Moto" name="vehicles" defaultChecked></input>
                        </div>
                    </div>
    
                    <div className="alignCenterLogin">
                        <button type='submit' className="buttonLogin">Fazer cadastro</button>
                    </div>
            </form>
            </div>
        )

    }else if(typeClient==='personClient' && client!==undefined){
        return(
            <div className="loginDiv newClientRegister">
                <div className="alignCenterLogin">
                    <img src={enterprise} className="imgLogin" alt="Logo da empresa"></img>
                </div>
                <h3 className="smallTitle">Novo cliente</h3>
                <div className="Transition"></div>
                <form method="POST" action={"http://localhost:5000/clients/alter/clientPerson/"+client._id}>
    
                    <label htmlFor="situation">Situação</label>
                    <br></br>
                    <div className="flexCheckbox">
                        <div>
                            <label>Ativo</label>
                            <input type="radio" value='Ativo' name="situation" checked></input>
                        </div>
                        <div>
                            <label>Não Ativo</label>
                            <input type="radio" value="Não ativo" name="situation"></input>
                        </div>
                    </div>
    
                    <label htmlFor="name">Nome / NomeFantasia</label>
                    <br></br>
                    <input name="name" className="inputLogin" type="text" required defaultValue={client.name}></input>
                    <br></br>

                    <label htmlFor="lastName">Razão social / Sobrenome</label>
                    <br></br>
                    <input name="lastName" className="inputLogin" type="text" required defaultValue = {client.lastName}></input>
                    <br></br>
    
                    <label htmlFor="cpfcnpj">CPF / CNPJ</label>
                    <br></br>
                    <input name="cpfcnpj" className="inputLogin" required defaultValue={client.cpf}></input>
                    <br></br>
    
                    <label htmlFor="email">Email</label>
                    <br></br>
                    <input type="email" className="inputLogin" name="email" required defaultValue={client.email}></input>
                    <br></br>
    
                    <label htmlFor="phone">Telefone</label>
                    <br></br>
                    <input name="phone" className="inputLogin" required defaultValue={client.phone}></input>
                    <br></br>
    
                    <label htmlFor="cep">CEP</label>
                    <br></br>
                    <input name="cep" className="inputLogin" required defaultValue={client.cep}></input>
                    <br></br>
    
                    <label htmlFor="street">Rua</label>
                    <br></br>
                    <input name="street" className="inputLogin" required defaultValue={client.street}></input>
                    <br></br>
    
                    <label htmlFor="adress" required>Número</label>
                    <br></br>
                    <input name="adress" className="inputLogin" required defaultValue={client.adressNumber}></input>
                    <br></br>
    
                    <label htmlFor="city">Cidade</label>
                    <br></br>
                    <input name="city" className="inputLogin" required defaultValue={client.city}></input>
                    <br></br>
    
                    <label htmlFor="country">Estado</label>
                    <br></br>
                    <select name="country" className="inputLogin" required
                    defaultChecked={client.country}>
                        <option value='MG'>Minas Gerais</option>
                        <option value='SP'>São Paulo</option>
                        <option value='RJ'>Rio de Janeiro</option>
                        <option value='ES'>Espirito Santo</option>
                        <option value='SC'>Santa Catarina</option>
                        <option value='RS'>Rio Grande do Sul</option>
                        <option value='PR'>Paraná</option>
                        <option value='GO'>Goiás</option>
                        <option value='MT'>Mato Grosso</option>
                        <option value='MS'>Mato Grosso do Sul</option>
                        <option value='BA'>Bahia</option>
                        <option value='AL'>Alagoas</option>
                        <option value='MA'>Maranhão</option>
                        <option value='PI'>Piauí</option>
                        <option value='CE'>Ceará</option>
                        <option value='RN'>Rio Grande do Norte</option>
                        <option value='PE'>Pernambuco</option>
                        <option value='PB'>Paraíba</option>
                        <option value='SE'>Sergipe</option>
                        <option value='AM'>Amazonas</option>
                        <option value='RR'>Roraima</option>
                        <option value='AP'>Amapá</option>
                        <option value='PA'>Pará</option>
                        <option value='TO'>Tocantins</option>
                        <option value='RO'>Rondônia</option>
                        <option value='AC'>Acre</option>
                    </select>
                    <br></br>
    
                    <label htmlFor="opening">Hora de abertura</label>
                    <br></br>
                    <input type="time" name="opening" className="inputLogin" required defaultValue={client.openingHours}></input>
                    <br></br>
    
                    <label htmlFor="attendance">Dia de atendimento</label>
                    <br></br>
                    <input name="attendance" className="inputLogin" type="Date" required defaultValue={client.attendanceDay.slice(0,10)}></input>
                    <br></br>
    
                    <label htmlFor="vehicles">Veículos Utilizados</label>
                    <br></br>
                    <div className="flexCheckbox">
                        <div>
                            <label>Caminhão</label>
                            <input type="checkbox" value="Caminhão" name="vehicles"></input>
                        </div>
                        <div>
                            <label>Carro</label>
                            <input type="checkbox" value="Carro" name="vehicles"></input>
                        </div>
                        <div>
                            <label>Moto</label>
                            <input type="checkbox" value="Moto" name="vehicles" defaultChecked></input>
                        </div>
                    </div>
    
                    <div className="alignCenterLogin">
                        <button type='submit' className="buttonLogin">Fazer cadastro</button>
                    </div>
            </form>
            </div>
        )
    }else if(typeClient==='enterpriseClient' && client!==undefined){
        return(
            <div className="loginDiv newClientRegister">
                <div className="alignCenterLogin">
                    <img src={enterprise} className="imgLogin" alt="Logo da empresa"></img>
                </div>
                <h3 className="smallTitle">Novo cliente</h3>
                <div className="Transition"></div>
                <form method="POST" action={"http://localhost:5000/clients/alter/clientEnterprise/"+client._id}>
    
                    <label htmlFor="situation">Situação</label>
                    <br></br>
                    <div className="flexCheckbox">
                        <div>
                            <label>Ativo</label>
                            <input type="radio" value='Ativo' name="situation" checked></input>
                        </div>
                        <div>
                            <label>Não Ativo</label>
                            <input type="radio" value="Não ativo" name="situation"></input>
                        </div>
                    </div>
    
                    <label htmlFor="name">Nome / NomeFantasia</label>
                    <br></br>
                    <input name="name" className="inputLogin" type="text" required defaultValue={client.name}></input>
                    <br></br>

                    <label htmlFor="lastName">Razão social / Sobrenome</label>
                    <br></br>
                    <input name="lastName" className="inputLogin" type="text" required defaultValue = {client.socialReason}></input>
                    <br></br>
    
                    <label htmlFor="cpfcnpj">CPF / CNPJ</label>
                    <br></br>
                    <input name="cpfcnpj" className="inputLogin" required defaultValue={client.cnpj}></input>
                    <br></br>
    
                    <label htmlFor="email">Email</label>
                    <br></br>
                    <input type="email" className="inputLogin" name="email" required defaultValue={client.email}></input>
                    <br></br>
    
                    <label htmlFor="phone">Telefone</label>
                    <br></br>
                    <input name="phone" className="inputLogin" required defaultValue={client.phone}></input>
                    <br></br>
    
                    <label htmlFor="cep">CEP</label>
                    <br></br>
                    <input name="cep" className="inputLogin" required defaultValue={client.cep}></input>
                    <br></br>
    
                    <label htmlFor="street">Rua</label>
                    <br></br>
                    <input name="street" className="inputLogin" required defaultValue={client.street}></input>
                    <br></br>
    
                    <label htmlFor="adress" required>Número</label>
                    <br></br>
                    <input name="adress" className="inputLogin" required defaultValue={client.adressNumber}></input>
                    <br></br>
    
                    <label htmlFor="city">Cidade</label>
                    <br></br>
                    <input name="city" className="inputLogin" required defaultValue={client.city}></input>
                    <br></br>
    
                    <label htmlFor="country">Estado</label>
                    <br></br>
                    <select name="country" className="inputLogin" required
                    defaultChecked={client.country}>
                        <option value='MG'>Minas Gerais</option>
                        <option value='SP'>São Paulo</option>
                        <option value='RJ'>Rio de Janeiro</option>
                        <option value='ES'>Espirito Santo</option>
                        <option value='SC'>Santa Catarina</option>
                        <option value='RS'>Rio Grande do Sul</option>
                        <option value='PR'>Paraná</option>
                        <option value='GO'>Goiás</option>
                        <option value='MT'>Mato Grosso</option>
                        <option value='MS'>Mato Grosso do Sul</option>
                        <option value='BA'>Bahia</option>
                        <option value='AL'>Alagoas</option>
                        <option value='MA'>Maranhão</option>
                        <option value='PI'>Piauí</option>
                        <option value='CE'>Ceará</option>
                        <option value='RN'>Rio Grande do Norte</option>
                        <option value='PE'>Pernambuco</option>
                        <option value='PB'>Paraíba</option>
                        <option value='SE'>Sergipe</option>
                        <option value='AM'>Amazonas</option>
                        <option value='RR'>Roraima</option>
                        <option value='AP'>Amapá</option>
                        <option value='PA'>Pará</option>
                        <option value='TO'>Tocantins</option>
                        <option value='RO'>Rondônia</option>
                        <option value='AC'>Acre</option>
                    </select>
                    <br></br>
    
                    <label htmlFor="opening">Hora de abertura</label>
                    <br></br>
                    <input type="time" name="opening" className="inputLogin" required defaultValue={client.openingHours}></input>
                    <br></br>
    
                    <label htmlFor="attendance">Dia de atendimento</label>
                    <br></br>
                    <input name="attendance" className="inputLogin" type="Date" required defaultValue={client.attendanceDay.slice(0,10)}></input>
                    <br></br>
    
                    <label htmlFor="vehicles">Veículos Utilizados</label>
                    <br></br>
                    <div className="flexCheckbox">
                        <div>
                            <label>Caminhão</label>
                            <input type="checkbox" value="Caminhão" name="vehicles"></input>
                        </div>
                        <div>
                            <label>Carro</label>
                            <input type="checkbox" value="Carro" name="vehicles"></input>
                        </div>
                        <div>
                            <label>Moto</label>
                            <input type="checkbox" value="Moto" name="vehicles" defaultChecked></input>
                        </div>
                    </div>
    
                    <div className="alignCenterLogin">
                        <button type='submit' className="buttonLogin">Fazer cadastro</button>
                    </div>
            </form>
            </div>
        )
    }

}