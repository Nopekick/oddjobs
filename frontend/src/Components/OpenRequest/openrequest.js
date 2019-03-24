import React, {Component} from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom'
import "./openrequest.css"
import {apiCall,setTokenHeader} from "../../service"
import axios from 'axios'


class OpenRequest extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      pay: '',
      timeEstimate: '',
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
  apiCall("post", "http://localhost:8081/api/auth/ninecup", this.state).then(({ token })=>{
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
    <div id="ninecup">
        <h1>Create Opening</h1>
        <form onSubmit={this.handleSubmit}>

        <div id="dorms">

        <div>

          <div className="line">
            <label className="checks">Work Type</label>
            <input className="input" onChange={this.handleChange} type = "text" name = "title" placeholder="baker"/>
          </div>

          <hr/>

          <div className="line">
            <label className="checks">Per hour pay</label>
            <input className="input" onChange={this.handleChange} type = "text" name="pay" placeholder="$0"/>
          </div>

          <hr/>

          <div className="line">
            <label className="checks">Time needed</label>
            <input className="input" onChange={this.handleChange} type = "text" name="timeEstimate" placeholder="hours:minutes"/>
          </div>

          <button id="submit" type="submit">Submit </button>

        </div>

          <div className="line">
            <label className="textbox"></label>
            <textarea className="input" onChange={this.handleChange} type = "text" name = "description" placeholder="You will do..."/>
          </div>
          </div>

        </form>
    </div>
 )
}

}

export default withRouter(OpenRequest);
