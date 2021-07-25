import './styless.css'
import { Component } from 'react'
import { Paineladm } from '../../Components/painelAdm'
export class painelAdmin extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    logOut(){
        window.sessionStorage.clear()
        window.location.href='/'
    }
    render(){
        return(
            <>
            <Paineladm
            onClick={this.logOut}
            ></Paineladm>
            </>
        )
    }
}
export default painelAdmin