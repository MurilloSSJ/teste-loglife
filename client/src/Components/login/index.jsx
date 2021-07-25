import './styless.css'
import { Component } from 'react'
import enterprise from "../../img/enterprise.png"
export class FormsLogin extends Component{
    render(){
    const {onClick,onChange} = this.props
    return(
    <div className="loginDiv">
        <div className="alignCenterLogin">
        <img src={enterprise} className="imgLogin" alt="Logo da empresa"></img>
        </div>
        <h3>Login</h3>
        <div className="Transition"></div>
        <form>
            <label htmlFor="inputLogin">Seu email</label>
            <br></br>
            <input type="mail" className="inputLogin" name="email" onChange={onChange}></input>
            <br></br>
            <label htmlFor="password">Sua senha</label>
            <br></br>
            <input type="password" className="inputLogin" name="password" onChange={onChange}></input>
            <br></br>
            <div className="alignCenterLogin">
            <button className="buttonLogin" onClick={onClick}>Fazer Login</button>
            </div>
        </form>
    </div>
    )
    }
}