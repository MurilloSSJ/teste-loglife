import './styless.css';
import { Component } from 'react'
import React from 'react'
import { switchClients } from '../../Components/opcoes-clientes';
class Login extends Component{
  constructor(props){
    super(props)
    this.state = {apiResponse:''}
  }
  callAPI(){
    fetch('http://localhost:5000/test').then(res => res.text())
    .then(res=>this.setState({apiResponse:res}))
  }
  componentDidMount(){
    //this.callAPI()
  }
  render(){
      const typeClients = React.createElement(switchClients)
    return(
      <>
          {typeClients}
      </>
    )
  }
}
export default Login;