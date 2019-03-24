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
      category: '',
      interest: '',
      wantJobs: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount(){
      if(this.props.isAuthenticated === true){
        this.props.history.push("/report")
      }
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
    localStorage.jwtToken = token
    this.props.signIn()
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
          <div id="selectdiv">
            <label>
              <select value={this.state.category} onChange={this.handleSelect} name="category" id="chooser">
                <option> Select your position: </option>
                <option value="employer"> Employer </option>
<<<<<<< HEAD
                <option value="worker"> Employee </option>
=======
                <option value="student"> Employee </option>
>>>>>>> 062482ca964ddf1aeedf6e2f053f5e616cf54149
              </select>
            </label>
          </div>
          { this.state.category == "student" ? (
            <div>
              <div className="line">
                <label className="text"> Interests</label>
                <input className="input" onChange={this.handleChange} type = "text" name="interest" placeholder="Interests"/>
              </div>
              <hr/>
              <div className="line">
                <label className="text">Desired Jobs</label>
                <input className="input" onChange={this.handleChange} type = "text" name="wantJobs" placeholder="Ex: Clean, Walk Dogs..."/>
              </div>
            </div>
            ) : null}



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
