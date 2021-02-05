import React from "react";
import avatar from "../images/avatar.png";
import pdf from "../files/Angele_CV.pdf";
import fb from "../images/fb.png";
import insta from "../images/insta.png";
import linkedin from "../images/Linkedin.png";
import {FaGithubSquare} from "react-icons/fa";
import '../style/landing.css'
import '../style/global.css'
import { Link } from 'react-router-dom';
import {HiOutlineMail} from "react-icons/all";
import ReactTooltip from "react-tooltip";

function Landing() {
    return (
        <div id="page-landing">
            <ReactTooltip />
            <div id ="page-content">
                <div id="content-wrapper">
                    <div id="page-header">
                        <ReactTooltip />
                        <a href="https://github.com/angelelouise" data-tip="Github">
                            <FaGithubSquare size={33} color="#21243D" />
                        </a>
                        <a href="https://www.facebook.com/angeleTeles">
                            <img src={fb} alt="Facebook" data-tip="Facebook"/>
                        </a>
                        <a href="https://www.instagram.com/angelelouise/ " data-tip="Instagram">
                            <img src={insta}/>
                        </a>
                        <a href="https://www.linkedin.com/in/angele-teles-6a670b141/" data-tip="Linkedin">
                            <img src={linkedin}/>
                        </a>
                        <Link id="link_contato" to="/contato" data-tip="Entre em Contato">
                            <HiOutlineMail size={36} color="#21243D"/>
                        </Link>
                    </div>
                    <div className="row" id="about">
                        <div className="sideLeft">
                            <img src={avatar} ></img>

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
                    <div className="row" id="work">
                        <main>
                            <h2>Portfólio</h2>
                        </main>

                    </div>
                </div>
                <div id="box"/>
            </div>
        </div>
    );
}

export default Landing;