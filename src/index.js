//react 
import React from 'react';
import ReactDOM from 'react-dom';
//react material
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
//react router
import { BrowserRouter } from 'react-router-dom'
//Application
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();
