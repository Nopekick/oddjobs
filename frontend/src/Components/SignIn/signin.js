import React, {Component} from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom'
import "./signin.css"
import {apiCall,setTokenHeader} from "../../service"
import axios from 'axios'
import jwt_decode from 'jwt-decode'



class Signup extends Component {
  constructor(props){
    super(props)
    this.state = {
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
  apiCall("post", "http://localhost:8081/api/auth/signin", this.state).then(({ token })=>{
    setTokenHeader(token)
    localStorage.jwtToken = token
    this.props.signIn()
    this.props.set(jwt_decode(token).category)
    console.log("signed in")
    console.log(token)
    this.props.history.push('/job-openings')
    console.log(axios.defaults.headers.common)
  }).catch((err)=>{
    console.log(err)
    this.props.history.push('/')
  })
}


render(){
  return (
    <div id="signups">
        <h1 id="signup"> Sign In </h1>
        <form onSubmit={this.handleSubmit}>
        <div id="forms">
          <div className="line">
            <label className="text">Email</label>
            <input className="input" onChange={this.handleChange} type = "text" name="email" placeholder="Email"/>
          </div>
          <hr/>
          <div className="line">
            <label className="text">Password</label>
            <input className="input" onChange={this.handleChange} type = "password" name="password" placeholder="Password"/>
          </div>

          <button id="submit" type="submit">Sign In </button>
          <span id="things">Dont have an account? </span>
          <Link id="link1" to="/signup">Sign up</Link>
        </div>
        </form>
    </div>
 )
}

}

export default withRouter(Signup);
