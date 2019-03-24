import "./navbar.css"
import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  render() {
    return <div className="topnav">
            <span><Link to="/"> OdderJobs </Link></span>
            <span id="search"><Link to="/"> Search </Link></span>
            <span id="profile"><Link to="Profile">Profile Picture</Link></span>


            </div>
  }
}
export default Navbar;
