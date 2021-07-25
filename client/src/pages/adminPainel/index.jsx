import './styless.css'
import { Component } from 'react'
import { Paineladm } from '../../Components/painelAdm'
export class painelAdmin extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <>
            <Paineladm></Paineladm>
            </>
        )
    }
}
export default painelAdmin