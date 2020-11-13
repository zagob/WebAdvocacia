import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import Escritorio from '../src/pages/Escritorio';
import AreaDeAtuacao from '../src/pages/AreaDeAtuacao';

const src: React.FC = () => {
  return (
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/o-escritorio" component={Escritorio} />
        <Route path="/area-de-atuacao" component={AreaDeAtuacao} />
      </BrowserRouter>
  );
}

export default src;