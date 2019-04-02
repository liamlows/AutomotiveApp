import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'font-awesome/css/font-awesome.css'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );
  
serviceWorker.unregister();
