import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Router from './Router/Router';
import Route from './Router/Route';

import Root from './pages/Root/Root';
import About from './pages/About/About';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <Route path="/" component={<Root />} />
            <Route path="/about" component={<About />} />
        </Router>
    </React.StrictMode>
);
