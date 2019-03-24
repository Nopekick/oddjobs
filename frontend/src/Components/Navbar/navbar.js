import "./navbar.css"
import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  render() {
    return <div className="topnav">
<<<<<<< HEAD
            <div id= "odder"><Link to="/"> OdderJobs </Link></div>
            <a>Search</a>
            <Link to="Profile">Profile Picture</Link>
            </div>
=======
      <span><Link to="/"> OdderJobs </Link></span>
      <span id="search"><Link to="/"> Search </Link></span>
      <span id="profile"><Link to="Profile">Profile Picture</Link></span>
    </div>
>>>>>>> ed1614a777d8de39df6205a4e9504f8fb8bad680
  }
}
export default Navbar;
