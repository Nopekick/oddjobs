import "./navbar.css"
import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Navbar extends React.Component {
  render() {
<<<<<<< HEAD

=======
>>>>>>> 824bdace8715af84b6c6776b2aaf06baa346db5f
          return <div className="topnav">
                  <img className="image" src={ require('./otter-md.png') } alt="otter you glad you chose us"/>
                  <Link to="/"> OdderJobs </Link>
                  <Link to="/about"> About us </Link>
                  <Link to="/signin"> Sign in </Link>
                  <Link to="/signup"> Sign up </Link>
                  <img className="profilePic" src="" alt=""/>
                </div>
  }
}
export default Navbar;
