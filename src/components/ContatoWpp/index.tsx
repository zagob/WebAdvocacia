import React from 'react';
// import { FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

import './styles.css';

import IconWpp from '../../assets/icon-whatsapp.svg';

const ContatoWpp: React.FC = () => {
  return (
      <div className="caixa">
          <div className="contato-wpp">
              <h4>Contate-nos pelo Whatsapp!</h4>
              <div id="triangulo-para-direita"></div>
          </div>

          <div className="wpp">
              {/* <img src={IconWpp} alt="" width="50" /> */}
            <a href="https://api.whatsapp.com/send?phone=5514997130042" target="_blank">
                <IoLogoWhatsapp size={50} color="green" />
            </a>
          </div>
      </div>
  );
}

export default ContatoWpp;