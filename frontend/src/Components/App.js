import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import Navbar from './Navbar/navbar'
import Search from './Search/search'
import SignIn from './SignIn/signin'
import SignUp from './SignUp/signup'
<<<<<<< HEAD
import Bottom from './bottom/bottom'
=======
import Bottom from './Bottom/bottom'
>>>>>>> e16f2241ebc7beb3f27eef74aa83edbd57adb94b
import OpenRequest from './OpenRequest/openrequest'
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
        <Navbar logout={this.logout} isAuthenticated={this.state.isAuthenticated}/>
        <Switch>
          <Route path="/signup" component={()=> <SignUp isAuthenticated={this.state.isAuthenticated} signIn={this.userLoggedIn} /> } />
<<<<<<< HEAD
          <Route path="/signin" component={()=> <SignIn signIn={this.userLoggedIn} /> } />
          <Route path="/employer/request" component={()=> <OpenRequest />} />
          <Route path="/job-openings" component={()=> <Search  />} />
=======
          <Route path="/signin" component={()=> <SignIn /> } />
          <Route path="/students" component={()=> <Search category="student" />} />
          <Route path="/employers" component={()=> <Search category="employer" />} />
          <Route path="/employer/request" component={()=> <OpenRequest />} />
>>>>>>> e16f2241ebc7beb3f27eef74aa83edbd57adb94b
          <Route path="/" component={()=> <Homepage  />} />
        </Switch>
        <Bottom/>
      </div>
    );
  }
}

// <Route path="/inbox">
// <Route path="/contact">




export default withRouter(App);
