import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import Navbar from './Navbar/navbar'

import Search from './Search/search'
import SignIn from './SignIn/signin'
import SignUp from './SignUp/signup'
<<<<<<< HEAD
=======
<<<<<<< HEAD

import Bottom from './bottom/bottom'
import Homepage from './Homepage/homepage'

=======
<<<<<<< HEAD
=======
import Homepage from "./Homepage/homepage"
>>>>>>> a2deee0da45485ff29d3f75e7263a0aaf92c0201
>>>>>>> 0cd0cfe6a36df4e780a51ed8a3183ebe23da1d29
import bottom from './bottom/bottom'
import Homepage from './Homepage/homepage'
>>>>>>> 78e1c05c9465ce42d2b2ca3e9c64422db567b0db
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
