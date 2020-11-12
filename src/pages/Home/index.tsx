import React from 'react';
import Menu from '../../components/Menu';

import './styles.css';

const Home: React.FC = () => {
  return (
      <>
        <Menu />
        
        <main className="carousel">
          <h1>Ola Mojo</h1>
        </main>

        <section className="contato">
            <h2>Olá, como posso ajudar</h2>
            <p>Clique no icone abaixo e contate-nós pelo whatsapp.</p>
        </section>
      </>
  );
}

export default Home;