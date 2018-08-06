//react 
import React from 'react';
import ReactDOM from 'react-dom';
//react material
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

//Application
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//react router
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();