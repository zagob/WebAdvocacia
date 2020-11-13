import React from 'react';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

import './styles.css';

const Contato: React.FC = () => {
  return (
      <>
        <Menu />

            <div className="area_contato">
                <section className="titulo">
                    <h2>Contato</h2>
                </section>

                <section className="secao1">
                    <div className="formulario">
                        <div className="texto">
                            <h1>Olá, em que posso ajudar?</h1>
                            <p>
                                Deixe uma mensagem, preencha todos os 
                                campos corretamente para atendermos suas dúvidas.
                            </p>
                        </div>

                        <form>
                            <input type="text" placeholder="Digite seu Nome completo"/>
                            <input type="text" placeholder="Endereço de E-mail"/>
                            <input type="number" placeholder="Telefone fixo ou Celular"/>
                            <input type="text" placeholder="Asunto do Contato"/>
                            <textarea placeholder="Envie uma mensagem"></textarea>
                            <button>Enviar Mensagem</button>
                        </form>
                    </div>

                    <div className="info">
                        <h2>Informações de contato</h2>
                        <h3>Advocacia André Pedro Bestana</h3>
                        <div>
                            <span>
                                Av. Pedro Ometto, 2242 - Barra Bonita - SP
                            </span>

                            <span>Telefone:(14) 3641-8452</span>
                            <span>E-mail: </span>
                        </div>
                    </div>
                </section>
            </div>

        <Footer />
      </>
  );
}

export default Contato;