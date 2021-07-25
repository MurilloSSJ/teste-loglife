import './styless.css'
import iconADD from '../../img/perspective.png'
import logo from '../../img/enterprise.png'
export const Paineladm = ()=>{
    return(
        <div className="principalDiv nobg flexColumn">
            <img src={logo} alt="Logo Ficticia"></img>
            <div className="flexRow">
                <div className="flexRowChilds">
                    <img src={iconADD} width="64px" height="64px" alt="Icon novo Client" className="imgPainel"></img>
                    <h4 className="titleSwitch">Adicionar Cliente</h4>
                    <small className="ParagraphText fullWidht">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus.
                    Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</small>
                    <a href="/newclient" className="linkPainel"><button className="buttonPainel">Adicionar Novo Cliente</button></a>
                </div>

                <div className="flexRowChilds">
                    <img src={iconADD} width="64px" height="64px" alt="Icon novo Client" className="imgPainel"></img>
                    <h4 className="titleSwitch">Ver Clientes</h4>
                    <small className="ParagraphText fullWidht">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus.
                    Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</small>
                    <a href="/clients" className="linkPainel"><button className="buttonPainel">Ver Clientes</button></a>
                </div>
            </div>
        </div>
    )
}