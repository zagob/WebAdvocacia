import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../src/pages/Home';
import Escritorio from '../src/pages/Escritorio';
import AreaDeAtuacao from '../src/pages/AreaDeAtuacao';
import Contato from '../src/pages/Contato';
import Consulta from '../src/pages/Consulta';

const src: React.FC = () => {
  return (
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/o-escritorio" component={Escritorio} />
        <Route path="/area-de-atuacao" component={AreaDeAtuacao} />
        <Route path="/consulta" component={Consulta} />
        <Route path="/contato" component={Contato} />
      </BrowserRouter>
  );
}

export default src;