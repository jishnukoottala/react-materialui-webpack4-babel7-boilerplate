import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from 'components/Header';
import HomePage from 'components/HomePage';
import AboutPage from 'components/About';
import ContactPage from 'components/Contact';
import NotFoundPage from 'components/NotFoundPage';
import ServicesPage from 'components/Services';
import HelpPage from 'components/HelpPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path="/" component={HomePage} exact={true} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/help" component={HelpPage} />
    
    <Route path="/services" component={ServicesPage} />
    <Route component={NotFoundPage} />
    </Switch>
    </div>
    </BrowserRouter>
    );
export default AppRouter;