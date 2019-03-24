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

 componentWillMount(){
   apiCall("get", 'http://localhost:8081/api/m/jobs/all')
   .then((jobs)=>{
     this.setState({jobs})
   })
 }

  render() {
  this.state.jobs.map((job)=>{
    return <div>
        
    </div>
  })

  return (
    <div>

    </div>
    );
  }
}




export default withRouter(Search);
