import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Footer: React.FC = () => {
  return (
      <footer>
          <div className="container"> 
            <div className="footer">
                <div className="logo">
                    <div className="divLogo">
                        <img src="https://cdn.pixabay.com/photo/2017/09/13/22/47/justice-2747368_960_720.png" width="190" alt=""/>
                    </div>
                    <h2>Bestana Sociedade de Advogados</h2>
                        <p>
                            O Escritório de Advocacia, está localizado em 
                            Igaraçu do Tietê-SP, se notabiliza pela 
                            prestação de serviços jurídicos de alta 
                            qualidade nas diversas áreas do direito. 
                            A meta do escritório é estabelecer e manter 
                            um padrão de atendimento eficaz e de resultados.
                        </p>
                </div>
                <div className="m">
                    <h2>Menu</h2>
                    <ul>
                        <li><a><Link to="/">Home</Link></a></li>
                        <li><a><Link to="/">O Escritorio</Link></a></li>
                        <li><a><Link to="/">Área de Atuação</Link></a></li>
                        <li><a><Link to="/">Contato</Link></a></li>
                    </ul>
                </div>
                <div className="links">
                        <h2>Links Uteis</h2>
                    <ul>
                        <li><a>OAB/SP - Ordem dos Advogados do Brasil</a></li>
                        <li><a>Google Maps</a></li>
                        <li><a>JORNAL - FOLHA DE SÃO PAULO</a></li>
                    </ul>
                </div>
                <div className="contatos">

                        <h2>Contatos</h2>
                        <span>Endereço</span>
                        <span>CEP:</span>
                        <span>E-mail:</span>
                        <span>Horário de atendimento:</span>
                </div>
            </div>
          </div>

          <div className="rodape">
              <h4>© 2020 Advocacia André Pedro Bestana | Todos os direito reservados.</h4>
          </div>
      </footer>
  );
}

export default Footer;