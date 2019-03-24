import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import Navbar from './Navbar/navbar'

import Search from './Search/search'
import SignIn from './SignIn/signin'
import SignUp from './SignUp/signup'
import Homepage from "./Homepage/homepage"

import "../index.css"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route path="/signup" component={()=> <SignUp /> } />
          <Route path="/signin" component={()=> <SignIn /> } />
          <Route path="/students" component={()=> <Search category="student" />} />
          <Route path="/employers" component={()=> <Search category="employer" />} />
          <Route path="/" component={()=> <Homepage  />} />
        </Switch>
      </div>
    );
  }
}

// <Route path="/inbox">
// <Route path="/contact">




export default App;
