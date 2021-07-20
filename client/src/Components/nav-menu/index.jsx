import './styless.css'
import enterprise from '../../img/enterprise.png'
import toggleButton from '../../img/toggleButton.png'
export const navMenu = ()=>{
    return(
        <>
        <div className='navMenu menuDesktop'>
            <a href="/"><div className="logoIMG">
            <img src={enterprise} alt="Logo da empresa"></img>
            </div></a>
            <div className="principalMenu">
                <a href="/newclient" className="linkMenu">Adicionar Clientes</a>
                <a href='/clients' className="linkMenu">Lista de Clientes</a>
            </div>
        </div>
    <div className='navMenu menuMobile'>
        <a href="/"><div className="logoIMG">
        <img src={enterprise} alt="Logo da empresa"></img>
        </div></a>
        <div className="principalMenu" id="toggleButton">
            <img src={toggleButton} alt="Toggle Button Menu"></img>
        </div>
        <div className="principalMenu" id='linkMenuMobile'>
            <a href="/newclient" className="linkMenu">Adicionar Clientes</a>
            <a href='/clients' className="linkMenu">Lista de Clientes</a>
        </div>
    </div>
    </>
    )
}