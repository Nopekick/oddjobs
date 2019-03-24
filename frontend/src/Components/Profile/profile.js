import React, {Component} from 'react'
import {apiCall,setTokenHeader} from "../../service"
import {Link, Redirect, withRouter} from 'react-router-dom'
import "./profile.css"

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
        user: {}
    }
  }

  componentDidMount(){
    console.log()
    apiCall("get", `http://localhost:8081/api/m/users/${this.props.match.params.id}`)
    .then(({user})=>{
      this.setState({user})
      console.log(user)
    }).catch((err)=>{
        console.log(err)
    })
  }

  render() {
    let {fname, lname, email, interest, wantJobs} = this.state.user
    return (
      <div className="signupss">
        <div className="line2">
          <h2 className="stat"> Name:</h2>
          <h3>{fname} {lname}</h3>
        </div>
        <div className="line2">
        <h2 className="stat">Email:</h2>
        <h3>{email}</h3>
        </div>
        <div className="line2">
        <h2 className="stat">Wanted Jobs:</h2>
        <h3>{interest}</h3>
        </div>
        <div className="line2">
        <h2 className="stat">Interests:</h2>
        <h3>{wantJobs}</h3>
        </div>
      </div>
   )
  }
}




export default withRouter(Profile);
