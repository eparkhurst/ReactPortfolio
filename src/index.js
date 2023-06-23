import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './index.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB2An43H-2iVFyYut38GsatF6MgFN-AaHo",
  authDomain: "portfolio-5f6a0.firebaseapp.com",
  projectId: "portfolio-5f6a0",
  storageBucket: "portfolio-5f6a0.appspot.com",
  messagingSenderId: "454454439880",
  appId: "1:454454439880:web:010018e08fbe9b97029afd",
  measurementId: "G-3JHTY7CG3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
