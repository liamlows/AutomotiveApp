import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
// import 'bootstrap';
import 'font-awesome/css/font-awesome.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );
  
serviceWorker.unregister();
