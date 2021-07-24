import './styless.css';
import { Component } from 'react'
import React from 'react'
import { formsLogin } from '../../Components/login/index';
import axios from 'axios'
class Login extends Component{
  constructor(props){
    super(props)
    this.state = {apiResponse:''}
  }
  callAPI(){
    fetch('http://localhost:9000/test').then(res => res.text())
    .then(res=>this.setState({apiResponse:res}))
  }
  login = ()=>{
    axios.post('http://localhost:3000/auth')
  }
  componentDidMount(){
    //this.callAPI()
  }
  render(){
    const divLogin = React.createElement(formsLogin)
    return(
      <>
      <div className="principalDiv">
        {divLogin}
      </div>
      </>
    )
  }
}
export default Login;
