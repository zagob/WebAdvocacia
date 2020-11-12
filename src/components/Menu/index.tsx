import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo2.png';

import './styles.css';

const Menu: React.FC = () => {
  return (
      <div className="top">

        <div className="logo">
            <h1>Bestana Sociedade de Advogados</h1>
        </div>

            <img src={logo} />

        <div className="menu">
            <nav>
                <ul>
                    <li><a><Link to="/">Home</Link></a></li>
                    <li><a><Link to="/">O Escritorio</Link></a></li>
                    <li><a><Link to="/">Área de atuação</Link></a></li>
                    <li><a><Link to="/">Consulta</Link></a></li>
                    <li><a><Link to="/">Contato</Link></a></li>
                </ul>
            </nav>
        </div>
      </div>
  );
}

export default Menu;