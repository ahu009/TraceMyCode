import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(<AppContainer><App/></AppContainer>, document.querySelector('#app'));

if (module && module.hot) {
  module.hot.accept('./', () => {
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.querySelector('#app')
    );
  });
}
