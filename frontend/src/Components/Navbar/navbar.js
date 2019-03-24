import "./navbar.css"
import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  render() {
<<<<<<< HEAD
    return  <div className="topnav">
              <div className="odder">
              <Link to="/"> OdderJobs </Link>
              </div>
              <a>Search</a>
              <Link to="Profile"><img src="" alt="."/></Link>
            </div>
=======
    return <div className="topnav">
            <div id= "odder"><Link to="/"> OdderJobs </Link></div>
            <a>Search</a>
            <Link to="Profile">Profile Picture</Link>
            </div>

>>>>>>> d646d434c880b2a97d8c62a8c95dc2e5e4732740
  }
}
export default Navbar;
