import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import Navbar from './Navbar/navbar'
import Search from './Search/search'
import SignIn from './SignIn/signin'
import SignUp from './SignUp/signup'
import Bottom from './bottom/bottom'
import OpenRequest from './OpenRequest/openrequest'
import Homepage from './Homepage/homepage'
import Inbox from './Inbox/inbox'
import "../index.css"
import {setTokenHeader} from "../service.js"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        isAuthenticated: false,
        category: ''
    }
  }

  userLoggedIn = () => {
    this.setState({ isAuthenticated: true})
  }

  setCategory = (category) => {
    this.setState({category: category})
    console.log(category)
  }

  logout = () => {
    this.setState({isAuthenticated:false, isAdmin: false})
    setTokenHeader()
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        <Navbar cat={this.state.category} logout={this.logout} isAuthenticated={this.state.isAuthenticated}/>
        <Switch>
          <Route path="/signup" component={()=> <SignUp set={this.setCategory} isAuthenticated={this.state.isAuthenticated} signIn={this.userLoggedIn} /> } />
          <Route path="/signin" component={()=> <SignIn set={this.setCategory} signIn={this.userLoggedIn} /> } />
          <Route path="/employer/request" component={()=> <OpenRequest />} />
          <Route path="/job-openings" component={()=> <Search  />} />
          <Route path="/inbox" component={()=> <Inbox />} />
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
