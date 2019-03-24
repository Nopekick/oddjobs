import React, {Component} from 'react'
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
          <h1>{title}<h2> offered by <em>{fname} {lname}</em></h2></h1>
          <h2> Approximately {timeEstimate} for {pay} </h2>
          <h2> Description: {description}</h2>
        </div>
      })

  return (
    <div>
        <h1> Here </h1>
          {jobList}
    </div>
    );
  }
}




export default withRouter(Search);
