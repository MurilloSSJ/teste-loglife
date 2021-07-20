import './styless.css';
import { Component } from 'react'
import React from 'react'
import { formsLogin } from '../../Components/login/index';
class Login extends Component{
  constructor(props){
    super(props)
    this.state = {apiResponse:''}
  }
  callAPI(){
    fetch('http://localhost:9000/test').then(res => res.text())
    .then(res=>this.setState({apiResponse:res}))
  }
  componentDidMount(){
    //this.callAPI()
  }
  render(){
    const divLogin = React.createElement(formsLogin)
    return(
      <div className="principalDiv">
        {divLogin}
      </div>
    )
  }
}
export default Login;
