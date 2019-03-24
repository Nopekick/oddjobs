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
      cat: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  componentWillMount(){
    if(!this.props.isAuthenticated || !this.props.category==='employer'){
      this.props.history.push("/job-openings")
    }
  }


handleSubmit(e){
  e.preventDefault()
  apiCall("post", "http://localhost:8081/api/m/employer/create", this.state).then(()=>{
    this.props.history.push("/job-openings")
  }).catch((err)=>{
    console.log(err)
    this.props.history.push('/job-openings')
  })
}

handleSelect = (e) => {
  this.setState({category: e.target.value}, function(){
    console.log(this.state)
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

          <hr />

          <div>
            <label> Type   </label>
              <select style={{'width': '130px', 'height': '25px', 'border': '1px solid black', 'border-radius': '0px', 'margin-left': '114px'}} value={this.state.category} onChange={this.handleSelect} name="category" id="chooser">
                <option value="volunteering"> Volunteering </option>
                <option value="internship"> Internship </option>
                <option value="odd job"> Odd job </option>
              </select>

          </div>

          <button id="submit" type="submit">Submit </button>

        </div>

          <div className="line">
            <textarea className="textbox" onChange={this.handleChange} type = "text" name = "description" placeholder="You will do..."/>
          </div>
          </div>

        </form>
    </div>
 )
}

}

export default withRouter(OpenRequest);
