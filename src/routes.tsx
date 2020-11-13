import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import Escritorio from '../src/pages/Escritorio';

const src: React.FC = () => {
  return (
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/o-escritorio" component={Escritorio} />
      </BrowserRouter>
  );
}

export default src;