import React from "react";
import avatar from "../images/avatar.png";
import pdf from "../files/Angele_CV.pdf";
import fb from "../images/fb.png";
import insta from "../images/insta.png";
import linkedin from "../images/Linkedin.png";
// import {FiArrowRight} from "react-icons/fi";
import '../style/landing.css'
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div id="page-landing">
            <div id ="page-content">
                <div id="content-wrapper">
                    <div id="page-header">
                        <a href="https://www.facebook.com/angeleTeles">
                            <img src={fb}/>
                        </a>
                        <a href="https://www.instagram.com/angelelouise/">
                            <img src={insta}/>
                        </a>
                        <a href="https://www.linkedin.com/in/angele-teles-6a670b141/">
                            <img src={linkedin}/>
                        </a>
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