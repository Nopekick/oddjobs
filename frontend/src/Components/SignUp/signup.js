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
      password: '',
      category: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSelect = (e) => {
    this.setState({category: e.target.value}, function(){
      console.log(this.state)
    })
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
          <div className="line">
            <label className="text">First Name</label>
            <input className="input" onChange={this.handleChange} type = "text" name = "fname" placeholder="First Name"/>
          </div>
          <hr/>
          <div className="line">
            <label className="text">Last Name</label>
            <input className="input" onChange={this.handleChange} type = "text" name = "lname" placeholder="Last Name"/>
          </div>
          <hr/>
          <div className="line">
            <label className="text">Email</label>
            <input className="input" onChange={this.handleChange} type = "text" name="email" placeholder="Email"/>
          </div>
          <hr/>
          <div className="line">
            <label className="text">Password</label>
            <input className="input" onChange={this.handleChange} type = "password" name="password" placeholder="Password"/>
          </div>
          <div className="line">
            <select value={this.state.category} onChange={this.handleSelect} name = "category" placeholder="Category">
              <option value='employer'>  Employer (in need of a worker/helper) </option>
              <option value='worker'>  Worker (want a job, has skills to offer) </option>
            </select>
          </div>

          <button id="submit" type="submit">Sign Up </button>
          <span id="things">Already have an account? </span>
          <Link id="link1" to="/signin">Sign in</Link>
        </div>
        </form>
    </div>
 )
}

}

export default withRouter(Signup);
