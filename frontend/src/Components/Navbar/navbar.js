import "./navbar.css"
import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
          return this.props.isAuthenticated===true ?
          (<div className="topnav">
                  <Link to="/"><img className="image" src={ require('./otter-md.png') } alt="otter you glad you chose us"/></Link>
                  <Link to="/"> OdderJobs </Link>
                  <Link to="/job-openings"> Job Openings </Link>
                  <a onClick={this.props.logout}> Logout </a>
                </div>)
                : (<div className="topnav">
                        <Link to="/"><img className="image" src={ require('./otter-md.png') } alt="otter you glad you chose us"/></Link>
                        <Link to="/"> OdderJobs </Link>
                        <Link to="/job-openings"> Job Openings </Link>
                        <Link to="/signin"> Sign in </Link>
                        <Link to="/signup"> Sign up </Link>
                      </div>)
  }
}
export default Navbar;
