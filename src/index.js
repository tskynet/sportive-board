// React import
import React from 'react';
import { render } from 'react-dom';

// Components
import App from './components/App';
import NotFound from './components/NotFound';
import Connexion from './components/Connexion';
import ContainerList from './components/ContainerList';
import ContainerAddList from './components/ContainerAddList';
import ContainerAddTrainning from './components/ContainerAddTrainning';
import ContainerTrainning from './components/ContainerTrainning';
// Router
import { BrowserRouter, Match, Miss} from 'react-router';

//style
import './style/css/bootstrap.min.css';
const Root= () =>{
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={ Connexion } />
        <Match pattern="/pseudo/:pseudo" component={ App } />
        <Match pattern="/pseudo/:pseudo/listing" component={ ContainerList } />
        <Match pattern="/pseudo/:pseudo/addlist" component={ ContainerAddList } />
        <Match pattern="/pseudo/:pseudo/addtrainning" component={ ContainerAddTrainning } />
        <Match pattern="/pseudo/:pseudo/showtrainning" component={ ContainerTrainning } />
        <Miss component={ NotFound } />
      </div>
    </BrowserRouter>
  )
}

render (
  <Root />,
  document.getElementById('root')
);
