import React, { Component } from 'react';
import Navbar from './Navbar/navbar'
import SignUp from './SignUp/signup'
import "../index.css"

class App extends Component {
  render() {
    return (

      <div>
        <Navbar/>
        <SignUp/>
      </div>
    );
  }
}



export default App;
