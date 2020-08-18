import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Projects from './projects';

//Settings the routes to each of the different pages
const Main = () => (

    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/projects" component={Projects} />
    </Switch>


)

export default Main;