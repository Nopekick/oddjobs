<<<<<<< HEAD
import React, {Component} from 'react'

class Signin extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
  return (
    <div>

    </div>
    );
  }
=======
import React, {Component} from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom'
import "./signin.css"
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
>>>>>>> efbbb1985048b9031504d72b45ce9d23056cb295
}



<<<<<<< HEAD

export default Signin;
=======
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
>>>>>>> efbbb1985048b9031504d72b45ce9d23056cb295
