import React from 'react';
import { FaWhatsappSquare } from 'react-icons/fa';
import ContatoWpp from '../../components/ContatoWpp';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

import './styles.css';

const Home: React.FC = () => {
  return (
      <>
        <Menu />

        <ContatoWpp />
        
        <main className="carousel">
          <h1>Frase</h1>
        </main>

        <section className="contato">
            <h2>Olá, como posso ajudar</h2>
            <p>Clique no icone abaixo e contate-nós pelo whatsapp.</p>
            <div className="wpp">
              <a href="https://api.whatsapp.com/send?phone=5514997130042" target="_blank">
                <FaWhatsappSquare size={50} color="green" />
              </a>
            </div>
        </section>

        <section className="conteudo">
          <div className="foto">Foto</div>

          <div className="atividades">
            <div className="consulta">
              <div><h2>Consulte aqui seu processo</h2></div>
              <div>
                <h3>Previdência Social - INSS</h3>
                  <ul>
                    <li><a>Consulta de situação de beneficio</a></li>
                    <li><a>E-Recurso e Beneficio</a></li>
                    <li><a>Situação do Beneficio em Revisão</a></li>
                  </ul>
              </div>

              <div>
                <h3>Processos Trabalhista - TRT 15ª</h3>
                <ul><li><a>Consulta Pública de Processo</a></li></ul>
              </div>
              
              <div>
                  <h3>Processos na justiça Comum - TJSP</h3>
                  <ul>
                    <li><a>Consulta de processo na 1° instância</a></li>
                  </ul>
              </div>

              <div style={{ border: 0 }}>
                <h3>Justiça Federal - TRF3°</h3>
                  <ul>
                    <li><a>Clique aqui</a></li>
                  </ul>
              </div>
            </div>

            <div className="links">
              <div>
                <h3>Links uteis</h3>
              </div>
                <div>
                  <li><a>OAB/SP - Ordem dos Advogados do Brasil</a></li>
                  <li><a>Google Mapas</a></li>
                  <li><a>JORNAL - FOLHA DE SÃO PAULO</a></li>
                  <li><a>Correios</a></li>
                  <li><a>Telefônica - Lista Telefônica do Brasil</a></li>
                  <li><a>Receita Federal - Consulte a situação cadastral do CNPJ - Pessoa juridica</a></li>
                  <li><a>Receita Federal - Consulte a situação cadastral do CPF - Pessoa Física</a></li>
                </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
  );
}

export default Home;