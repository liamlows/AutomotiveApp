import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Insurance} from './Insurance';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faCar, faKey, faBuilding } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faCar, faKey, faBuilding);

class App extends Component {
  render() {
    return (
      <>
        <Insurance />
      </>
    );
  }
}

export default App;
