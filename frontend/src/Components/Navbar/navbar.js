import "./navbar.css"
import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  render() {
<<<<<<< HEAD
          return <div>
              <img className="image" src={ require('./otter-md.png') } alt="."/>
                <div className="topnav">
                <Link to="/"> OdderJobs </Link>
                <a>Search</a>
                <Link to="Profile"><img src="" alt="."/></Link>
=======
    return  <div className="topnav">
              <div className="odder">
              <Link to="/"> OdderJobs </Link>
>>>>>>> b90c144d34aff71469e912ee7fa091a42fd31db0
              </div>
            </div>
<<<<<<< HEAD
=======

>>>>>>> b90c144d34aff71469e912ee7fa091a42fd31db0
  }
}
export default Navbar;
