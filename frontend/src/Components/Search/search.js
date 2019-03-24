import React, {Component} from 'react'
import "./search.css"
import {apiCall,setTokenHeader} from "../../service"
import {Link, Redirect, withRouter} from 'react-router-dom'

// title, description, employer, pay, time estimate
class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      jobs: []
    }
  }

 componentDidMount(){
   apiCall("get", 'http://localhost:8081/api/m/jobs/all')
   .then(({jobs})=>{
     this.setState({jobs})
     console.log(jobs)
   }).catch((err)=>{
       console.log(err)
   })
 }

  render() {
      let jobList = this.state.jobs.map((job, index)=>{
        let {title, description, timeEstimate, pay, employer} = job
        let {fname, lname} = employer
        return <div key={job._id}>
          <div id="job">
            <h1 id="jobname">{title} </h1>
            <em id="fill"> offered by <em id="name">{fname} {lname}</em></em>
            <h2 id="pay"> ~ {timeEstimate},  {pay} </h2>
            <h2 id="desc"> Job description: {description}</h2>
            <Link id="link2" to="/signin"><span id="span1"></span></Link>
          </div>
        </div>
      })

  return (
    <div id="alljobs">
      {jobList}
    </div>
    );
  }
}




export default withRouter(Search);
