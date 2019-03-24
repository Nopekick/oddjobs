import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import Navbar from './Navbar/navbar'
import SignUp from './SignUp/signup'
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
        </Switch>
      </div>
    );
  }
}

// <Route path="/signin">
// <Route path="/inbox">
// <Route path="/contact">
// <Route path="/students">
// <Route path="/employers">



export default App;
