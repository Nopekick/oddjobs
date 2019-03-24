import React, {Component} from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom'
import "./signup.css"
import {apiCall,setTokenHeader} from "../../service"
import axios from 'axios'


class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

handleSubmit(e){
  e.preventDefault()
  apiCall("post", "http://localhost:8081/api/auth/signup", this.state).then(({ token })=>{
    setTokenHeader(token)
    //setTokenHeader()
    localStorage.jwtToken = token
    this.props.signIn()
    this.props.history.push('/report')
    console.log(axios.defaults.headers.common)
  }).catch((err)=>{
    console.log(err)
    this.props.history.push('/')
  })
}



render(){
  return (
    <div id="signups">
        <h1 id="signup"> Sign Up </h1>
        <form onSubmit={this.handleSubmit}>
        <div id="forms">
          <label className="text">First Name</label>
          <input onChange={this.handleChange} type = "text" name = "fname" placeholder="First Name"/>

          <label className="text">Last Name</label>
          <input onChange={this.handleChange} type = "text" name = "lname" placeholder="Enter your last name..."/>

          <label className="text">Email</label>
          <input onChange={this.handleChange} type = "text" name="email" placeholder="email"/>

          <label className="text">Password</label>
          <input onChange={this.handleChange} type = "password" name="password" placeholder="password"/>

          <button type="submit">Sign Up </button>
          <p>Already have an account? <Link to="/signin">Sign in</Link></p>
        </div>
        </form>
    </div>
 )
}

}

export default withRouter(Signup);



/*
function signup(props) {
  return <h1>Hello world</h1>;
}
*/
