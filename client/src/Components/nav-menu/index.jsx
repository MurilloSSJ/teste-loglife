import './styless.css'
import { Component } from 'react'
import enterprise from '../../img/enterprise.png'
export class navMenu extends Component{
    render(){

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
    </>
    )
    }
}