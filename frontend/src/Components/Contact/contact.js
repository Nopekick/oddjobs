import React, {Component} from 'react'
import {apiCall,setTokenHeader} from "../../service"
import {Link, Redirect, withRouter} from 'react-router-dom'
import './contact.css'

class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      content: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount(){
    if(!this.props.isAuthenticated || !this.props.category==='student'){
      this.props.history.push("/job-openings")
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    apiCall("post", `http://localhost:8081/api/m/send/${this.props.match.params.rec_id}`, this.state).then(()=>{
      this.props.history.push('/job-openings')
    }).catch((err)=>{
      console.log(err)
      this.props.history.push('/')
    })
  }

  render() {
  return (
    <div id="requestform">
      <h2 id="header"> Apply for OddJob </h2>
      <div id="container">
          <div>
            <form onSubmit={this.handleSubmit} >
              <label  id="desc1"></label>
              <textarea  id="reqdesc" onChange={this.handleChange} name="content" placeholder="Message..."/>

              <button type="submit">Send</button>
            </form>
          </div>
          <img src="http://www.chinadaily.com.cn/business/img/attachement/jpg/site1/20160805/b083fe955aa1190e67fb01.jpg"  />
        </div>
    </div>
    );
  }
}




export default withRouter(Contact);
