import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import components from './components';

const Component = components[window.initState.componentName];

console.log({ Component, components, name: window.initState.componentName });

ReactDOMClient.hydrateRoot(
  document.getElementById('root'),
  <App {...window.initState}>
    <Component {...window.initState} />
  </App>,
);
delete window.initState;
