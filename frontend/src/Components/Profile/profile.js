import React, {Component} from 'react'
import {apiCall,setTokenHeader} from "../../service"
import {Link, Redirect, withRouter} from 'react-router-dom'

class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
        user: {}
    }
  }

  componentDidMount(){
    apiCall("get", `http://localhost:8081/api/m/users/${this.props.match.params.user_id}`)
    .then((user)=>{
      this.setState({user})
      console.log(user)
    }).catch((err)=>{
        console.log(err)
    })
  }

  render() {
  return (
    <div>
      
    </div>
    );
  }
}




export default withRouter(Profile);
