import React, { Component } from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import Navbar from './Navbar/navbar'
import Search from './Search/search'
import SignIn from './SignIn/signin'
import SignUp from './SignUp/signup'
import Bottom from './Bottom/bottom'
import Homepage from './Homepage/homepage'
<<<<<<< HEAD
=======
import "../index.css"
<<<<<<< HEAD
=======
>>>>>>> 935de13a9983f1f478b69dee6e7cfdebe50ad027
=======
import Bottom from './bottom/bottom'
import Homepage from './Homepage/homepage'
import {setTokenHeader} from "../service.js"
>>>>>>> df4d52b5d429a4bc5397879f7ec524cc2a7c2a1c
>>>>>>> 45471f25b9cfcf67c8770a66c63abd81fc556927

>>>>>>> df4d52b5d429a4bc5397879f7ec524cc2a7c2a1c

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
          <Route path="/students" component={()=> <Search category="student" />} />
          <Route path="/employers" component={()=> <Search category="employer" />} />
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
