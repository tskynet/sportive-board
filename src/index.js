// React import
import React from 'react';
import { render } from 'react-dom';

// Components
import App from './components/App';
import NotFound from './components/NotFound';
import Connexion from './components/Connexion';

// Router
import { BrowserRouter, Match, Miss} from 'react-router';

const Root= () =>{
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={ Connexion } />
        <Miss component={ NotFound } />
      </div>
    </BrowserRouter>
  )
}

render (
  <Root />,
  document.getElementById('root')
);
