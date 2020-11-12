import React from 'react';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

import './styles.css';

const Home: React.FC = () => {
  return (
      <>
        <Menu />
        
        <main className="carousel">
          <h1>Frase</h1>
        </main>

        <section className="contato">
            <h2>Olá, como posso ajudar</h2>
            <p>Clique no icone abaixo e contate-nós pelo whatsapp.</p>
        </section>

        <section className="conteudo">
          <div>Foto</div>
          <div>Conteudo</div>
        </section>

        <Footer />
      </>
  );
}

export default Home;