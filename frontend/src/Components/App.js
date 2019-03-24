import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import Navbar from './Navbar/navbar'

import Search from './Search/search'
import SignIn from './SignIn/signin'
import SignUp from './SignUp/signup'
<<<<<<< HEAD
import Homepage from "./Homepage/homepage"

=======
import bottom from './bottom/bottom'
import Homepage from './Homepage/homepage'
>>>>>>> 16fdd06ca0f4ff0eb203c23ea541951893e59b7a
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
