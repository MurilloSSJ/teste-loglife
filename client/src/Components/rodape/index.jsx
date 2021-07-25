import './styless.css'
import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'
import instagram from '../../img/instagram.png'
import logo from '../../img/enterprise.png'
export const rodape = ()=>{
    return(
        <div className="rodapeFlex">
            <img src={logo} width="64px" height="64px" alt="Logo Empresa"></img>
            <br></br>
            <div className="rodapeSection">
                <h3 className="rodapeTitle">Redes sociais</h3>
                <div className="rodapeIcons">

                    <a href="https://www.linkedin.com/in/murillo-santhiago-334b591b5/"><img className="iconsRodape" src={linkedin} alt="Icon Linkedin"></img></a>

                    <a href='https://github.com/MurilloSSJ'><img className="iconsRodape" src={github} alt="Icon Github"></img></a>

                    <a href="https://www.instagram.com/murillo_ssj/"><img className="iconsRodape" src={instagram} alt="Icon Instagram"></img></a>
                </div>
            </div>
            <div className="copyright">
                <p>Projeto desenvolvido por <a href="https://github.com/MurilloSSJ"><span className="spanCopy">Murillo Santhiago &#128151;</span></a></p>
            </div>
        </div>
    )
}