import React, {Component} from 'react'
import {apiCall,setTokenHeader} from "../../service"
import {Link, Redirect, withRouter} from 'react-router-dom'

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      people: []
    }
  }

// componentWillMount(){
//   apiCall("get", `http://localhost:8081/api/m/${this.props.category}/all`)
//   .then((people)=>{
//     this.setState({people})
//   })
// }

  render() {


  return (
    <div>

    </div>
    );
  }
}




export default withRouter(Search);
