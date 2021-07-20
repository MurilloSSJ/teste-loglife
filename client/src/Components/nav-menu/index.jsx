import './styless.css'
import enterprise from '../../img/enterprise.png'
export const navMenu = ()=>{
    return(
        <div className='navMenu'>
            <a href="/"><div className="logoIMG">
            <img src={enterprise} alt="Logo da empresa"></img>
            </div></a>
            <div className="principalMenu">
                <a href="/newclient" className="linkMenu">Adicionar Clientes</a>
                <a href='/clients' className="linkMenu">Lista de Clientes</a>
            </div>
        </div>
    )
}