import React, { Component } from 'react';
import Navbar from './Navbar/navbar'
import SignIn from './SignIn/signin'
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
