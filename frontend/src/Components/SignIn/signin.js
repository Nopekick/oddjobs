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
}




export default Signin;
