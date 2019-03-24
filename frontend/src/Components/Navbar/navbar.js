import "./navbar.css"
import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  render() {
    return <div className="topnav">
            <div id= "odder"><Link to="/"> OdderJobs </Link></div>
            <a>Search</a>
            <Link to="Profile">Profile Picture</Link>
            </div>

  }
}
export default Navbar;
