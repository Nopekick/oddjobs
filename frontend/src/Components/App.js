import React, { Component } from 'react';
import Navbar from './Navbar/navbar'
import SignIn from './SignIn/signin'
import SignUp from './SignUp/signup'
import bottom from './bottom/bottom'
import "../index.css"

class App extends Component {
  render() {
    return (

      <div>
        <Navbar/>
        <SignIn/>
        <bottom/>
      </div>
    );
  }
}



export default App;
