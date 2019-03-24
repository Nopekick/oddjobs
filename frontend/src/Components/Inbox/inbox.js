import React, {Component} from 'react'
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
   .then((messages)=>{
     console.log("inside of componentdidmount")
     this.setState({messages})
   }).catch((err)=>{
      console.log("catch of componentdidmount")
       console.log(err)
   })
 }

  render() {
      // let messages = this.state.messages.map((message, index)=>{
      //   let {title, description, timeEstimate, pay, employer} = message
      //   return <div key={message._id}>
      //     <div >
      //
      //       <Link id="link2" to="/user/"> Student's profile</Link>
      //     </div>
      //   </div>
      // })

  return (
    <div >
      <h2> hello </h2>
    </div>
    );
  }
}




export default withRouter(Inbox);
