import "./navbar.css"
import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  render() {
    return  <div className="topnav">
              <div className="odder">
              <Link to="/"> OdderJobs </Link>
              </div>
              <a>Search</a>
              <Link to="Profile"><img src="" alt="."/></Link>
            </div>

  }
}
export default Navbar;
