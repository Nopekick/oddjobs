import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import Navbar from './Navbar/navbar'
import Search from './Search/search'
import SignIn from './SignIn/signin'
import SignUp from './SignUp/signup'
<<<<<<< HEAD
import Bottom from './Bottom/bottom'
import OpenRequest from './OpenRequest/openrequest'
=======
import Bottom from './bottom/bottom'
>>>>>>> 42fd06a104981097ff9c545dd88ba4be0f6757f5
import Homepage from './Homepage/homepage'
import "../index.css"
import {setTokenHeader} from "../service.js"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        isAuthenticated: false,
    }
  }

  userLoggedIn = () => {
    this.setState({ isAuthenticated: true})
  }

  logout = () => {
    this.setState({isAuthenticated:false, isAdmin: false})
    setTokenHeader()
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route path="/signup" component={()=> <SignUp isAuthenticated={this.state.isAuthenticated} signIn={this.userLoggedIn} /> } />
          <Route path="/signin" component={()=> <SignIn /> } />
<<<<<<< HEAD
          <Route path="/students" component={()=> <Search category="student" />} />
          <Route path="/employers" component={()=> <Search category="employer" />} />
          <Route path="/employer/request" component={()=> <OpenRequest />} />
=======
          <Route path="/job-openings" component={()=> <Search  />} />
>>>>>>> 42fd06a104981097ff9c545dd88ba4be0f6757f5
          <Route path="/" component={()=> <Homepage  />} />
        </Switch>
        <Bottom/>
      </div>
    );
  }
}

// <Route path="/inbox">
// <Route path="/contact">




export default App;
