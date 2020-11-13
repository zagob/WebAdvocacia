import React from 'react';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

import './styles.css';

const Escritorio: React.FC = () => {
  return (
      <>
        <Menu />
            <div className="escritorio">
                <div>
                    <section className="titulo">
                        <h2>O Escritorio</h2>
                    </section>

                    <section className="conteudo1">
                        <div className="img">foto</div>

                        <div className="texto">
                            <h4>Advocacia André Pedro Bestana</h4>

                            <p>
                            O Escritório de Advocacia, está localizado no centro da cidade de Igaraçu do Tietê -SP na Rua Pereira
                            de Rezende, 435 - B, se notabiliza pela prestação de serviços jurídicos de alta qualidade 
                            nas diversas áreas do direito. A meta do escritório é estabelecer e 
                            manter um padrão de atendimento eficaz e de resultados, tendo como
                            estratégia tratar cada cliente de forma personalizada, de acordo 
                            com sua necessidade e demanda.
                            </p>

                            <p>
                            Para manter um dinamismo, eficiência e discrição, 
                            trabalhamos de forma a orientar, prevenir e solucionar 
                            questões que impactem ou possam vir a impactar o negócio e 
                            a vida de seus clientes.
                            </p>

                            <p>
                            Com ética, conhecimento, experiência e em sintonia 
                            aos aspectos atuais das questões jurídicas, busca 
                            atingir as metas de cada cliente com sucesso e satisfação. 
                            O escritório conta com infraestrutura moderna, proporcionando 
                            aos clientes economia de tempo, agilidade, segurança e atendimento
                            diferenciado.
                            </p>
                        </div>
                    </section>

                    <section className="conteudo2">
                        <div>
                            <h4>Missão</h4>
                            <p>Atender o cliente em nossas especialidades, 
                            com criatividade, excelência, rapidez e eficiência, 
                            aprimorando o conhecimento técnico, buscando soluções 
                            inovadoras e eficazes.</p>

                            <p>
                            Estamos preparados para atender aos processos eletrônicos, 
                            hoje havendo maior celeridade processual quanto ao protocolo 
                            das ações judiciais, podendo haver acompanhamento "on line" 
                            dos processos.
                            </p>
                        </div>

                        <div>
                            <h4>Atendimento</h4>
                            <p>
                                APOSENTADORIA / 
                                REVISÕES DE BENEFÍCIOS PREVIDENCIÁRIOS / 
                                AÇÕES TRABALHISTAS / 
                                SEGUROS EM GERAL
                            </p>

                            <p>
                                Oferecemos também Cálculos de Aposentadoria, 
                                inclusive projetando os adicionais de Insalubridade 
                                e Periculosidade na contagem Especial, 
                                Calculo para o Trabalhador Rural e 
                                Cálculos Trabalhistas.
                            </p>

                            <p>
                                Com novas instalações o escritório ganhou 
                                prestigio e credibilidade pelos 
                                seus serviços prestados.
                            </p>
                        </div>
                        
                        <div>
                            <h4>Visão - Consultoria Júridica</h4>

                            <p>
                                Prestação de Consultoria Jurídica com excelência, 
                                nas mais diversas áreas, primando pela ética 
                                profissional e responsabilidade.
                            </p>
                        </div>
                    </section>

                    <section className="galeria">
                        <div>
                            <h1>Conheça mais nosso escritório</h1>
                            <p>Clique nas imagens abaixo para amplialas</p>
                        </div>
                    </section>
                </div>
            </div>
        <Footer />
      </>
  );
}

export default Escritorio;