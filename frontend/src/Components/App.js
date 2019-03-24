import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import Navbar from './Navbar/navbar'

import Search from './Search/search'
import SignIn from './SignIn/signin'
import SignUp from './SignUp/signup'
<<<<<<< HEAD
import bottom from './bottom/bottom'
=======
import Homepage from "./Homepage/homepage"

<<<<<<< HEAD

=======
>>>>>>> 5f21d8d0e2dfca5c067a4f96e99eb6312ea0ddae
>>>>>>> ebcc6a6c825e5a506bab9ba772d8f91395080ef8
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
<<<<<<< HEAD
        <SignIn/>
        <bottom/>
=======
        <Switch>
          <Route path="/signup" component={()=> <SignUp /> } />
          <Route path="/signin" component={()=> <SignIn /> } />
          <Route path="/students" component={()=> <Search category="student" />} />
          <Route path="/employers" component={()=> <Search category="employer" />} />
          <Route path="/" component={()=> <Homepage  />} />
        </Switch>
>>>>>>> ebcc6a6c825e5a506bab9ba772d8f91395080ef8
      </div>
    );
  }
}

// <Route path="/inbox">
// <Route path="/contact">




export default App;
