import React from "react";
import avatar from "../images/avatar.png";
import pdf from "../files/Angele_CV.pdf";
import apotheca from "../images/apotheca.png";
import cypress from "../images/cypress.jpg";
import selenium from "../images/selenium.png";
import appium from "../images/appium.png";
import junit from "../images/junit.png";
import js from "../images/js.png";
import java from "../images/java.png";
import sql from "../images/sql.png";
import json from "../images/json.png";
import html from "../images/html.png";
import css from "../images/css.png";
import robot from "../images/robotfw.png";
import {FaGithubSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import '../style/landing.css'
import '../style/global.css'
import ReactTooltip from "react-tooltip";
import {Badge, Col, Container, Row} from "react-bootstrap";
import PageHeader from "../fragments/page-header";
import PageFooter from "../fragments/page-footer";
import {Link} from "react-router-dom";

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
                                <p> Analista QA Fullstack, ISTQB Certified Tester - CTFL, com experiência em testes exploratórios, testes ágeis, testes automatizados ponta a ponta (end-to-end) e de API com Cypress, Selenium e Robot Framework, metodologias de teste como BDD e TDD e análise de requisitos.<br/>
                                    Especialista em Desenvolvimento de Aplicações para Dispositivos Móveis (2019) pelo Instituto Metrópole Digital da UFRN, graduada em Engenharia da Computação (2017) pela Universidade Federal do Rio Grande do Norte - UFRN, bacharela em Ciências e Tecnologia também pela Universidade Federal do Rio Grande do Norte (2014).  <br/>
                                </p>
                                <br/>
                                <br/>
                                <a href={pdf} className="button">Download Currículo</a>

                            </main>
                        </div>
                    </div>
                    <div id="skills">
                        <Container>
                            <Row>
                                <Col>
                                    <main>
                                        <h1>Skills</h1>
                                    </main>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src={cypress} alt="cypress" style={{width: 50, height: 50}} />
                                    <Row className="justify-content-center">
                                        <span>Cypress</span>
                                    </Row>

                                </Col>
                                <Col>
                                    <img src={robot} alt="robotf" style={{width: 50, height: 50}} />
                                    <Row className="justify-content-center">
                                        <span>Robot Framework</span>
                                    </Row>

                                </Col>
                                <Col>
                                    <img src={selenium} alt="selenium" style={{width: 50, height: 50}} />
                                    <Row className="justify-content-center">
                                        <span>Selenium</span>
                                    </Row>
                                </Col>
                                <Col>
                                    <img src={appium} alt="appium" style={{width: 50, height: 50}} />
                                    <Row className="justify-content-center">
                                        <span>Appium</span>
                                    </Row>
                                </Col>
                                <Col>
                                    <img src={junit} alt="junit" style={{width: 50, height: 50}} />
                                    <Row className="justify-content-center">
                                        <span>JUnit</span>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src={js} alt="js" style={{width: 50, height: 50}} />
                                    <Row className="justify-content-center">
                                        <span>Javascript</span>
                                    </Row>
                                </Col>
                                <Col>
                                    <img src={java} alt="java" style={{width: 50, height: 50}} />
                                    <Row className="justify-content-center">
                                        <span>Java</span>
                                    </Row>
                                </Col>
                                <Col>
                                    <img src={sql} alt="sql" style={{width: 50, height: 50}} />
                                    <Row className="justify-content-center">
                                        <span>SQL</span>
                                    </Row>
                                </Col>
                                <Col>
                                    <img src={json} alt="json" style={{width: 50, height: 50}} />
                                    <Row className="justify-content-center">
                                        <span>JSON</span>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src={html} alt="html" style={{width: 50, height: 50}} />
                                    <Row className="justify-content-center">
                                        <span>HTML</span>
                                    </Row>
                                </Col>
                                <Col>
                                    <img src={css} alt="css" style={{width: 50, height: 50}} />
                                    <Row className="justify-content-center">
                                        <span>CSS</span>
                                    </Row>
                                </Col>

                            </Row>

                        </Container>
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
                                <Col sm={2}>
                                    <img src={robot} alt="robot" style={{width: 200, height: 200, position: 'relative'}}/>
                                </Col>
                                <Col sm={10}>
                                    <main>
                                        <h2>Robot framework: API Testing</h2>
                                        <Badge pill variant="info">
                                            Robot
                                        </Badge>{' '}
                                        <Badge pill variant="info">
                                            Python
                                        </Badge>{' '}
                                        <Badge pill variant="info">
                                            JSON
                                        </Badge>{' '}
                                        <p> Projeto prático de testes em API utilizando o Robot framework em uma API de sign up.
                                        </p>
                                        <Row>
                                            <Col className="link_group">
                                                <a href="https://github.com/angelelouise/poc_api_robot#readme" className="button">Acessar Projeto</a>
                                            </Col>
                                        </Row>
                                    </main>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2}>
                                    <img src={robot} alt="robot" style={{width: 200, height: 200, position: 'relative'}}/>
                                </Col>
                                <Col sm={10}>
                                    <main>
                                        <h2>Robot framework: Front testing</h2>
                                        <Badge pill variant="info">
                                            Robot
                                        </Badge>{' '}
                                        <Badge pill variant="info">
                                            Python
                                        </Badge>{' '}
                                        <Badge pill variant="info">
                                            JSON
                                        </Badge>{' '}
                                        <p> Projeto prático de testes de aceitação utilizando o Robot framework no site Parodify.
                                        </p>
                                        <Row>
                                            <Col className="link_group">
                                                <a href="https://github.com/angelelouise/parodify_robot#readme" className="button">Acessar Projeto</a>
                                            </Col>
                                        </Row>
                                    </main>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2}>
                                    <img src={cypress} alt="cypress" style={{width: 200, height: 200, position: 'relative'}}/>
                                </Col>
                                <Col sm={10}>
                                    <main>
                                        <h2>Cypress: Front-end testing</h2>
                                        <Badge pill variant="info">
                                            Cypress
                                        </Badge>{' '}
                                        <Badge pill variant="info">
                                            JavaScript
                                        </Badge>{' '}
                                        <Badge pill variant="info">
                                            JSON
                                        </Badge>{' '}
                                        <p> Projeto para treinamento de testes automatizados voltados para o front-end.
                                        </p>
                                        <Row>
                                            <Col className="link_group">
                                                <Link to="/example-cypress" className="button">Acessar Página</Link>
                                            </Col>
                                            <Col className="link_group">
                                                <a href="https://github.com/angelelouise/cypress_test_front" className="button">Acessar Projeto</a>
                                            </Col>
                                        </Row>

                                    </main>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2}>
                                    <img src={cypress} alt="cypress" style={{width: 200, height: 200, position: 'relative'}}/>
                                </Col>
                                <Col sm={10}>
                                    <main>
                                        <h2>Cypress: API Testing</h2>
                                        <Badge pill variant="info">
                                            Cypress
                                        </Badge>{' '}
                                        <Badge pill variant="info">
                                            JavaScript
                                        </Badge>{' '}
                                        <Badge pill variant="info">
                                            JSON
                                        </Badge>{' '}
                                        <p> Projeto prático de testes em APIs públicas utilizando do framework de testes Cypress.
                                        </p>
                                        <Row>
                                            <Col className="link_group">
                                                <a href="https://github.com/angelelouise/cypress_test_api" className="button">Acessar Projeto</a>
                                            </Col>
                                        </Row>
                                    </main>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2}>
                                    <img src={apotheca} alt="apotheca" style={{width: 200, height: 200, position: 'relative'}}/>
                                </Col>
                                <Col sm={10}>
                                    <main>
                                        <h2>Apotheca</h2>
                                        <Badge pill variant="info">
                                            Android
                                        </Badge>{' '}
                                        <Badge pill variant="info">
                                            Firebase
                                        </Badge>{' '}
                                        <p> Aplicativo de Compartilhamento de Conhecimento para Alunos da UFRN, desenvolvido como trabalho de                                            conclusão da especialização em dispositivos móveis.
                                        </p>
                                        <Row>
                                            <Col className="link_group">
                                                <a href="https://github.com/angelelouise/apotheca" className="button">Acessar Projeto</a>
                                            </Col>
                                        </Row>
                                    </main>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <a href="/#work" className="button">Veja mais...</a>
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