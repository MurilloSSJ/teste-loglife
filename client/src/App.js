import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
class App extends Component{
  constructor(props){
    super(props)
    this.state = {apiResponse:''}
  }
  callAPI(){
    fetch('http://localhost:9000/test').then(res => res.text())
    .then(res=>this.setState({apiResponse:res}))
  }
  componentDidMount(){
    this.callAPI()
  }
  render(){
    var apiResponse = this.state.apiResponse
    return(
      <div>{apiResponse}</div>
    )
  }
}
export default App;
