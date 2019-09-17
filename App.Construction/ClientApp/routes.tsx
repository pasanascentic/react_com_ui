import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Lagg } from './pages/Lagg';
import { ClubProfile } from './pages/ClubProfile';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/lagg' component={Lagg} />
    <Route path='/klubbprofil' component={ClubProfile} />
</Layout>;
