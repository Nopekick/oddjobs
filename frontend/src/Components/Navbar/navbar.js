import "./navbar.css"
import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  render() {
          return <div>
              <img className="image" src={ require('./otter-md.png') } alt="."/>
                <div className="topnav">
                <Link to="/"> OdderJobs </Link>
                <a>Search</a>
                <Link to="Profile"><img src="" alt="."/></Link>
              </div>
            </div>
  }
}
export default Navbar;
