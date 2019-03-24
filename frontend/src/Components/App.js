import React, { Component } from 'react';
import Navbar from './Navbar/navbar'
import SignUp from './SignUp/signup'
import SignIn from './SignIn/signin'
import Homepage from './Homepage/homepage'
import "../index.css"

class App extends Component {
  render() {
    return (

      <div>
        <Navbar/>
        <SignIn/>
      </div>
    );
  }
}



export default App;
