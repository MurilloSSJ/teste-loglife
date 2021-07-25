import './styless.css';
import { Component } from 'react'
import React from 'react'
import { FormsLogin } from '../../Components/login/index';
class Login extends Component{
  constructor(props){
    super(props)
    this.state={
      email:'',
      password:'',
      login:{
        email:'admin@admin.com',
        password:'admin1234'
      }
    }
  }
  clickLogin = ()=>{
      if(this.state.email===this.state.login.email && this.state.password===this.state.login.password){
        sessionStorage.token = true
        window.location.href('/admin')
      }
    
  }
  changeInput = (event)=>{
    if(event.target.name==='email'){
      this.setState({email:event.target.value})
    }else if(event.target.name==='password'){
      this.setState({password:event.target.value})
    }
  }
  render(){
    return(
      <>
      <div className="principalDiv">
        <FormsLogin 
        onClick={this.clickLogin}
        onChange = {this.changeInput}
        ></FormsLogin>
      </div>
      </>
    )
  }
}
export default Login;
