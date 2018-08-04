import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Aboutme from './aboutme';
import LandingPage from './landingpage';
import Projects from './projects';
import Contact from './contact';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/index.html" component={LandingPage} />
        <Route exact path="/aboutme.html" component={Aboutme} />
        <Route exact path="/work.html" component={Projects} />
        <Route exact path="/contact.html" component={Contact} />
    </Switch>
);

export default Routes;