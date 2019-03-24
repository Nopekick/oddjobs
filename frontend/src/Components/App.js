import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import Navbar from './Navbar/navbar'
import Search from './Search/search'
import SignIn from './SignIn/signin'
import SignUp from './SignUp/signup'
import Bottom from './Bottom/bottom'
import Homepage from './Homepage/homepage'
import {setTokenHeader} from '../service.js'
import "../index.css"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        isAuthenticated: false,
    }
  }

  userLoggedIn = () => {
    this.setState({ isAuthenticated: true})
    console.log("user logged in")
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
          <Route path="/signin" component={()=> <SignIn signIn={this.userLoggedIn} /> } />
          <Route path="/job-openings" component={()=> <Search  />} />
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
