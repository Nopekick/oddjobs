import React, {Component} from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom'
import "./homepage.css"

class Homepage extends Component {
  constructor(props){
    super(props)
    }


render(){
  return (
    <div id="homepage">
      <img id="otter" src={ require('./WhyIOtter.jpg') }/>
      <div id="box1">
        <h1 id="title"> ODDER JOBS </h1>
        <h3 id="info"> Odd jobs, internships, and voluneer opportunities for youth. </h3>
        <button id="clicky" type="submit">Get to work!</button>
      </div>
    </div>
 )
}
}
export default withRouter(Homepage);
