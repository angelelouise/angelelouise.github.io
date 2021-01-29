import React from "react";
import avatar from "../images/avatar.png";
import vector from "../images/Vector 19.png";
// import {FiArrowRight} from "react-icons/fi";
import '../style/landing.css'
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-header">

            </div>
            <div id="content-wrapper">
                <div className="row" id="about">
                    <div className="sideLeft">
                        <img src={avatar} ></img>

                    </div>
                    <div className="sideRight">
                        <main>
                            <h1>Angele Louise, Analista de Testes</h1>
                            <p> Líder da equipe de controle de qualidade do SIPAC na Superintendência de Informática da UFRN, ISTQB Certified                                Tester - CTFL, com experiência em testes exploratórios, testes ágeis, testes automatizados e análise de                                     requisitos.<br/><br/>

                                Especialista em Desenvolvimento de Aplicações para Dispositivos Móveis (2019) pelo Instituto Metrópole Digital                               da UFRN, graduada em Engenharia da Computação (2017) pela Universidade Federal do Rio Grande do Norte - UFRN,                               bacharela em Ciências e Tecnologia também pela Universidade Federal do Rio Grande do Norte (2014).<br/>                                     Atualmente, aluna de mestrado em sistemas e computação (PPGSC). <br/>
                            </p>
                            <Link to="/files/Angele_CV.pdf" target="_blank">
                                <button>Download Currículo</button>
                            </Link>

                        </main>
                    </div>
                </div>
                <div className="row" id="work">
                    <h2>Portfólio</h2>
                </div>
            </div>
            <div id="box">
                {/*<img id="sidebox" src={vector} ></img>*/}
            </div>
        </div>
    );
}

export default Landing;