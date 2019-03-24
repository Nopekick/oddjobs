import "./navbar.css"
import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  render() {
          return <div className="topnav">
                  <img className="image" src={ require('./otter-md.png') } alt="otter you glad you chose us"/>
                  <Link to="/"> OdderJobs </Link>
                  <Link to="/employers"> Employers </Link>
                  <Link to="/students"> Prospective Employees </Link>
                  <Link to="/signin"> Sign in </Link>
                  <Link to="/signup"> Sign up </Link>
                </div>
  }
}
export default Navbar;
