import React from 'react';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

import './styles.css'

const AreaDeAtuacao: React.FC = () => {
  return (
      <>
        <Menu />
            <div className="area">
                <section className="titulo">
                    <h1>Área de Atuação</h1>
                    <h3>
                        Somos um escritório com uma ampla 
                        possibilidade de atendimentos e, dentre
                         inúmeras outras ações e procedimentos, 
                         destacamos algumas abaixo:
                    </h3>
                </section>

                <section className="conteudo1">
                    <div>
                        <h4>Inventário e Sucessões</h4>
                        <li><a href="">Inventario</a></li>
                    </div>

                    <div>
                        <h4>Seguro de vida e seguros</h4>

                        <li><a href="">Seguro de vida em grupo ou pessoal</a></li>
                        <li><a href="">Análise de Apólices em geral</a></li>
                        <li><a href="">Seguro de Empresa</a></li>
                        <li><a href="">Seguro Bancário</a></li>
                    </div>

                    <div>
                        <h4>Trabalhista</h4>

                        <li><a href="">Reclamações Trabalhista</a></li>
                        <li><a href="">Recisórias</a></li>
                        <li><a href="">Defesas em geral</a></li>
                        <li><a href="">Acidente de trabalho</a></li>
                        <li><a href="">Audiências</a></li>
                        <li><a href="">Acidente Pessoal</a></li>
                        <li><a href="">Assédio Moral e Sexual</a></li>
                        <li><a href="">Dano Moral e Material</a></li>
                        <li><a href="">Doença Ocupacional</a></li>
                    </div>

                    <div>
                        <h4>Aposentadoria e Revisões</h4>

                        <div className="ajuste">
                            <li><a href="">Aposentadoria</a></li>
                            <li><a href="">Revisões e Beneficios</a></li>
                            <li><a href="">Auxilio e Pensões</a></li>   
                        </div>
                    </div>

                    <div>
                        <h4>Direito do consumidor</h4>

                        <li><a href="">Inclusão indevida no SPC/SERASA</a></li>
                        <li><a href="">Danos materiais e morais</a></li>
                        <li><a href="">Planos de Saúde</a></li>
                        <li><a href="">Medicamentos, Próteses, internações psiquiátrica</a></li>
                    </div>

                    <div>
                        <h4>Direito civil</h4>

                        <li><a href="">Cobrança judiciais e Extrajudiciais</a></li>
                        <li><a href="">Contratos em geral</a></li>
                        <li><a href="">Responsabilidade civil</a></li>
                        <li><a href="">Consultoria jurídica em lei geral de Proteção de dados</a></li>
                    </div>
                </section>
            </div>
        <Footer />
      </>
  );
}

export default AreaDeAtuacao;