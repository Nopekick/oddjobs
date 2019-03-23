import "./navbar.css"
import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  render() {
    return <div className="topnav">
            <span><Link to="/"> Home </Link></span>
            <span><p id="icon"> Search</p></span>
            <span><p id="icon"> Profile Picture</p></span>


            </div>
  }
}
export default Navbar;
