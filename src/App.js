import React, { Component } from 'react';
import { Grommet } from 'grommet';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Provider, createClient } from 'urql';

import Home from './Home';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    }
  },
};

const client = createClient({
  url: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

class App extends Component {
  render() {
    return (
      <Provider value={client}>
        <Grommet theme={theme}>
          <BrowserRouter>
            <Route path="/" component={Home}/>
          </BrowserRouter>
        </Grommet>
      </Provider>
    );
  }
}

export default App;
