import 'bootstrap';

// import './theme/toolkit/toolkit.css'
// import './theme/toolkit/toolkit-startup.css'

import './theme/icons/iconic-bootstrap.css'
import './theme/icons.css';

import './theme/site.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import * as RoutesModule from './routes';
let routes = RoutesModule.routes;

import { LanguageProvider } from './backbone/Language';

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')!;
    ReactDOM.render(
        <AppContainer >
            <LanguageProvider>
                <BrowserRouter children={ routes } basename={ baseUrl } />
            </LanguageProvider>
        </AppContainer>,
        document.getElementById('react-app')
    );
    
}

renderApp(); //run the app

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require<typeof RoutesModule>('./routes').routes;
        renderApp();
    });
}
