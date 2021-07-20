import './styless.css'
import enterprise from '../../img/enterprise.png'
export const navMenu = ()=>{
    return(
        <div className='navMenu'>
            <div className="logoIMG">
            <img src={enterprise} alt="Logo da empresa"></img>
            </div>
            <div className="principalMenu">
                <a className="linkMenu">Adicionar Clientes</a>
                <a className="linkMenu">Lista de Clientes</a>
            </div>
        </div>
    )
}