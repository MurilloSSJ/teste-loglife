import './styless.css'
import { Component } from 'react'
import React from 'react'
import {formsNewClient} from '../../Components/forms-new-client/index'
class newUser extends Component{
    constructor(props){
        super(props)
        this.state = {apiResponse:''}
    }
    render(){
        const formsClient = React.createElement(formsNewClient)
        return(
            <div className="principalDiv nobg">
                {formsClient}
            </div>
        )
    }
}
export default newUser