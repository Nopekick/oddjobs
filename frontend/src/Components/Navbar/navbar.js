import "./navbar.css"
import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  render() {
<<<<<<< HEAD
    return  <div className="topnav">
              <div className="odder">
              <Link to="/"> OdderJobs </Link>
              <Link to="/signin"> Sign In </Link>
              <Link to="/signup"> Sign Up </Link>
              </div>
              <a>Search</a>
              <Link to="/profile"><img src="" alt="."/></Link>
            </div>

=======
          return <div className="topnav">
                  <img className="image" src={ require('./otter-md.png') } alt="otter you glad you chose us"/>
                  <Link to="/"> OdderJobs </Link>
                  <Link to="/about"> About us </Link>
                  <Link to="/signin"> Sign in </Link>
                  <Link to="/signup"> Sign up </Link>
                  <img className="profilePic" src="" alt=""/>
                </div>
>>>>>>> 5af3eb70ff91835b0e7befabdb4c063c2e8621ff
  }
}
export default Navbar;
