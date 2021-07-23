import './styless.css'
import enterpriseIcon from'../../img/enterpriseIcon.png'
import personIcon from '../../img/personIcon.png'
import allSwitchsIcon from '../../img/perspective.png'
export const switchClients= ()=>{
    return(
        <>
        <div className="switchDiv">
            <div className="flexItem">
                <img src ={enterpriseIcon} alt="Icon pessoa jurídica"></img>
                <h4 className="titleSwitch">Clientes Júridicos</h4>
                <small className="ParagraphText">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus.
                Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</small>
                <button className="buttonIcons">Ver clientes</button>
            </div>
            <div className="flexItem">
                <img src ={personIcon} alt="Icon pessoa física"></img>
                <h4 className="titleSwitch">Clientes Físicos</h4>
                <small className="ParagraphText">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus.
                Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</small>
                <a href="http://localhost:3000/clients/clientPerson" className="linkButton"><button className="buttonIcons">Ver clientes</button></a>
            </div>
            <div className="flexItem">
                <img src ={allSwitchsIcon} alt="Icon todos clientes"></img>
                <h4 className="titleSwitch">Todos os clientes</h4>
                <small className="ParagraphText">Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus.
                Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</small>
                <button className="buttonIcons">Ver clientes</button>
            </div>
        </div>
        </>
    )
}
