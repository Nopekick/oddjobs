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
      <img id="otter" src="http://www.freakingnews.com/pictures/8000/OTTER--8241.jpg"/>
      <div id="box1">
        <h1 id="title"> Odder Jobs </h1>
        <h3 id="info"> Odd jobs, internships, and voluneer opportunities for youth. </h3>
        <Link id="link2" to="/signin">Get to work!</Link>
      </div>
    </div>
 )
}
}
export default withRouter(Homepage);
