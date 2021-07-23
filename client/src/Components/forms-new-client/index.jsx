import './styless.css'
import enterprise from '../../img/enterprise.png'
export const formsNewClient = ()=>{
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
                <select name="typeClient" className="inputLogin" required={true}>
                    <option value='clientPerson'>Pessoa Física</option>
                    <option value='clientEnterprise'>Pessoa Jurídica</option>
                </select>
                <br></br>

                <label htmlFor="situation">Situação</label>
                <br></br>
                <div className="flexCheckbox">
                    <div>
                        <label>Ativo</label>
                        <input type="radio" value='Ativo' name="situation"></input>
                    </div>
                    <div>
                        <label>Não Ativo</label>
                        <input type="radio" value="Não ativo" name="situation"></input>
                    </div>
                </div>

                <label htmlFor="name">Nome / NomeFantasia</label>
                <br></br>
                <input name="name" className="inputLogin" type="text"></input>
                <br></br>
                <label htmlFor="lastName">Razão social / Sobrenome</label>
                <br></br>
                <input name="lastName" className="inputLogin" type="text"></input>
                <br></br>

                <label htmlFor="cpfcnpj">CPF / CNPJ</label>
                <br></br>
                <input name="cpfcnpj" className="inputLogin"></input>
                <br></br>

                <label htmlFor="email">Email</label>
                <br></br>
                <input type="mail" className="inputLogin" name="email"></input>
                <br></br>

                <label htmlFor="phone">Telefone</label>
                <br></br>
                <input name="phone" className="inputLogin"></input>
                <br></br>

                <label htmlFor="cep">CEP</label>
                <br></br>
                <input name="cep" className="inputLogin"></input>
                <br></br>

                <label htmlFor="street">Rua</label>
                <br></br>
                <input name="street" className="inputLogin"></input>
                <br></br>

                <label htmlFor="adress">Número</label>
                <br></br>
                <input name="adress" className="inputLogin"></input>
                <br></br>

                <label htmlFor="city">Cidade</label>
                <br></br>
                <input name="city" className="inputLogin"></input>
                <br></br>

                <label htmlFor="country">Estado</label>
                <br></br>
                <select name="country" className="inputLogin">
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
                <input name="opening" className="inputLogin"></input>
                <br></br>

                <label htmlFor="attendance">Dia de atendimento</label>
                <br></br>
                <input name="attendance" className="inputLogin" type="Date"></input>
                <br></br>

                <label htmlFor="vehicles">Veículos Utilizados</label>
                <br></br>
                <div className="flexCheckbox">
                    <div>
                        <label>Caminhão</label>
                        <input type="checkbox" value="Caminhão"></input>
                    </div>
                    <div>
                        <label>Carro</label>
                        <input type="checkbox" value="Carro"></input>
                    </div>
                    <div>
                        <label>Moto</label>
                        <input type="checkbox" value="Moto"></input>
                    </div>
                </div>

                <div className="alignCenterLogin">
                    <button type='submit' className="buttonLogin">Fazer cadastro</button>
                </div>
        </form>
        </div>
    )
}