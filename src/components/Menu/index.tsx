import React from 'react';
import { FaBalanceScale } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo2.svg';

import './styles.css';

const Menu: React.FC = () => {
  return (
      <div className="top">

        <div className="logo">
            <div>
                <FaBalanceScale size={50} />
            </div>
            <h1> Bestana Sociedade de Advogados</h1>
        </div>

            {/* <img src={logo} /> */}
            {/* <div className="balance">
                <FaBalanceScale size={50} />
            </div> */}

        <div className="menu">
            <nav>
                <ul>
                    <li><a><Link to="/">Home</Link></a></li>
                    <li><a><Link to="/o-escritorio">O Escritorio</Link></a></li>
                    <li><a><Link to="/area-de-atuacao">Área de atuação</Link></a></li>
                    <li><a><Link to="/consulta">Consulta</Link></a></li>
                    <li><a><Link to="/contato">Contato</Link></a></li>
                </ul>
            </nav>
        </div>
      </div>
  );
}

export default Menu;