import React from "react";
import avatar from "../images/avatar.png";
import pdf from "../files/Angele_CV.pdf";
import apotheca from "../images/apotheca.png";
import cypress from "../images/cypress.jpg";
import {FaGithubSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import '../style/landing.css'
import '../style/global.css'
import ReactTooltip from "react-tooltip";
import {Col, Container, Row} from "react-bootstrap";
import PageHeader from "../fragments/page-header";
import PageFooter from "../fragments/page-footer";

function Landing() {
    return (
        <div id="page-landing">
            <ReactTooltip />
            <div id ="page-content">
                <div id="content-wrapper">
                    <PageHeader/>
                    <div className="row" id="about">
                        <div className="sideLeft">
                            <img src={avatar} alt="avatar"/>
                            <div id="sociais">
                                <ReactTooltip />
                                <a href="https://github.com/angelelouise" data-tip="Github">
                                    <FaGithubSquare size={33} color="#21243D" />
                                </a>
                                <a href="https://www.facebook.com/angeleTeles" data-tip="Facebook">
                                    <FaFacebookSquare size={33} color="#21243D" />
                                </a>
                                <a href="https://www.instagram.com/angelelouise/ " data-tip="Instagram">
                                    <FaInstagramSquare size={33} color="#21243D"/>
                                </a>
                                <a href="https://www.linkedin.com/in/angele-teles-6a670b141/" data-tip="Linkedin">
                                    <FaLinkedin size={33} color="#21243D"/>
                                </a>
                            </div>
                        </div>
                        <div className="sideRight">
                            <main>
                                <h1>Angele Louise, Analista de Testes</h1>
                                <p> Líder da equipe de controle de qualidade do SIPAC na Superintendência de Informática da UFRN, ISTQB                                          Certified Tester - CTFL, com experiência em testes exploratórios, testes ágeis, testes automatizados e                                      análise de requisitos.<br/><br/>

                                    Especialista em Desenvolvimento de Aplicações para Dispositivos Móveis (2019) pelo Instituto Metrópole                                       Digital da UFRN, graduada em Engenharia da Computação (2017) pela Universidade Federal do Rio Grande do                                     Norte - UFRN, bacharela em Ciências e Tecnologia também pela Universidade Federal do Rio Grande do Norte                                    (2014).<br/>
                                    Atualmente, aluna de mestrado em sistemas e computação (PPGSC). <br/>
                                </p>
                                <br/>
                                <br/>
                                <a href={pdf} className="button">Download Currículo</a>

                            </main>
                        </div>
                    </div>
                    <div id="work">
                        <Container>
                            <Row>
                                <Col>
                                    <main>
                                        <h1>Portfólio</h1>
                                    </main>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <img src={apotheca} alt="apotheca"/>
                                </Col>
                                <Col sm={8}>
                                    <main>
                                        <h2>Apotheca</h2>
                                        <div className="listTech">
                                            <span>Android</span>
                                            <span>Firebase</span>
                                        </div>
                                        <p> Aplicativo de Compartilhamento de Conhecimento para Alunos da UFRN, desenvolvido como trabalho de                                            conclusão da especialização em dispositivos móveis.
                                        </p>
                                        <br/>
                                        <br/>
                                        <a href="https://github.com/angelelouise/apotheca" className="button">Acessar Projeto</a>
                                    </main>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <img src={cypress} alt="cypress"/>
                                </Col>
                                <Col sm={8}>
                                    <main>
                                        <h2>Cypress: API Testing</h2>
                                        <div className="listTech">
                                            <span>Cypress</span>
                                            <span>JavaScript</span>
                                            <span> JSON </span>
                                        </div>
                                        <p> Projeto prático de testes em APIs públicas utilizando do framework de testes Cypress.
                                        </p>
                                        <br/>
                                        <br/>
                                        <a href="https://github.com/angelelouise/cypress_test_api" className="button">Acessar Projeto</a>
                                    </main>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <PageFooter/>
                </div>
                <div id="box"/>
            </div>
        </div>
    );
}

export default Landing;