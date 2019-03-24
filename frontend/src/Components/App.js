import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import Navbar from './Navbar/navbar'
<<<<<<< HEAD
import Search from './Search/search'
import SignIn from './SignIn/signin'
import SignUp from './SignUp/signup'
=======
import SignIn from './SignIn/signin'
>>>>>>> efbbb1985048b9031504d72b45ce9d23056cb295
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
        <Switch>
          <Route path="/signup" component={()=> <SignUp /> } />
          <Route path="/signin" component={()=> <SignIn /> } />
          <Route path="/students" component={()=> <Search category="student" />} />
          <Route path="/employers" component={()=> <Search category="employer" />} />
        </Switch>
=======
        <SignIn/>
>>>>>>> efbbb1985048b9031504d72b45ce9d23056cb295
      </div>
    );
  }
}

// <Route path="/inbox">
// <Route path="/contact">




export default App;
