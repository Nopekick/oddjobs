import React, { Component } from 'react';
import Navbar from './Navbar/navbar'
import SignUp from './SignUp/signup'
import Homepage from './Homepage/homepage'
import "../index.css"

class App extends Component {
  render() {
    return (

      <div>
        <Navbar/>
        <Homepage/>
      </div>
    );
  }
}



export default App;
