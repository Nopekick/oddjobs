import React, {Component} from 'react'
import "./inbox.css"
import {apiCall,setTokenHeader} from "../../service"
import {Link, Redirect, withRouter} from 'react-router-dom'
import axios from 'axios'

// title, description, employer, pay, time estimate
class Inbox extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: []
    }
  }

 componentDidMount(){
   apiCall("get", 'http://localhost:8081/api/m/user/messages')
   .then(({messages})=>{
     console.log("inside of componentdidmount")
     console.log(messages)
     this.setState({messages})
   }).catch((err)=>{
      console.log("catch of componentdidmount")
       console.log(err)
   })
 }

render(){
 let messageList = this.state.messages.map((message, index)=>{
    let {content, recipient, sender} = message
    let {category, email, fname, inbox, interest, lname, wantJobs, _id} = sender
    let link = `/user/${_id}`
    return <div key={message._id}>
      <div id="message">
        <div id="text">
          <h3 id="email"> {fname} {lname}: {email} </h3>
          <p id="content"> {content} </p>
        </div>
        <div id="divbutton">
          <p id="buttontext"> See Profile </p>
          <Link id="link2" to={link}><span id="span1"></span></Link>
        </div>
      </div>
    </div>
  })

  return (
    <div id="allmessages">
      {messageList}
    </div>
    );
  }
}





export default withRouter(Inbox);
