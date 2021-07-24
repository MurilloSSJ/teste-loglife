import './styless.css'
import { Component } from 'react'
import React from 'react'
import {FormsNewClient} from '../../Components/forms-new-client/index'
class newUser extends Component{
    constructor(props){
        super(props)
        this.state = {apiResponse:''}
    }
    render(){
        return(
            <div className="principalDiv nobg">
                <FormsNewClient></FormsNewClient>
            </div>
        )
    }
}
export default newUser