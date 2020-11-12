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
      </>
  );
}

export default Home;