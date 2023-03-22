import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/global.css';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RecoveryPassword from '../containers/RecoveryPassword';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/recovery-password" component={RecoveryPassword} />
                <Route component={NotFound} />
            </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default App;