// React import
import React from 'react';
import { render } from 'react-dom';

// Components
import App from './components/App';
import NotFound from './components/NotFound';
import Connexion from './components/Connexion';
import ContainerList from './components/ContainerList';
import ContainerAddList from './components/ContainerAddList';
// Router
import { BrowserRouter, Match, Miss} from 'react-router';

const Root= () =>{
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={ Connexion } />
        <Match pattern="/pseudo/:pseudo" component={ App } />
        <Match pattern="/pseudo/:pseudo/listing" component={ ContainerList } />
        <Match pattern="/pseudo/:pseudo/addlist" component={ ContainerAddList } />
        <Miss component={ NotFound } />
      </div>
    </BrowserRouter>
  )
}

render (
  <Root />,
  document.getElementById('root')
);
