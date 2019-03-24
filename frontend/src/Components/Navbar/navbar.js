import "./navbar.css"
import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  render() {
    return  <div className="topnav">
              <div className="odder">
              <Link to="/"> OdderJobs </Link>
              <Link to="/signin"> Sign In </Link>
              <Link to="/signup"> Sign Up </Link>
              </div>
              <a>Search</a>
              <Link to="/profile"><img src="" alt="."/></Link>
            </div>

  }
}
export default Navbar;
