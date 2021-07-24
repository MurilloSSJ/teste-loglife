import './styless.css'
import enterprise from "../../img/enterprise.png"
export const formsLogin = ()=>{
    return(
    <div className="loginDiv">
        <div className="alignCenterLogin">
        <img src={enterprise} className="imgLogin" alt="Logo da empresa"></img>
        </div>
        <h3>Login</h3>
        <div className="Transition"></div>
        <form method="POST" action="http://localhost:5000/user/auth">
            <label htmlFor="inputLogin">Seu email</label>
            <br></br>
            <input type="mail" className="inputLogin" name="email"></input>
            <br></br>
            <label htmlFor="password">Sua senha</label>
            <br></br>
            <input type="password" className="inputLogin" name="password"></input>
            <br></br>
            <div className="alignCenterLogin">
            <button type='submit' className="buttonLogin">Fazer Login</button>
            </div>
        </form>
    </div>
    )
}