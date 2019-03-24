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

              </div>
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
>>>>>>> 4ec8b7c5cd2dfa2dcf9499b10998d098df40c382
  }
}
export default Navbar;
