import React from "react";
import {Badge, Button, Col, Container, Row} from "react-bootstrap";
import emailjs, {init} from "emailjs-com";
import PageHeader from "../fragments/page-header";
import ModalCadastroSucesso from "../js/modal-cadastro-sucesso";
import PageFooter from "../fragments/page-footer";

interface JogoState {
    corA: any,
    corB: any,
    corC: any,
    resultado :string,
    AZUL: string,
    AMARELO: string,
    ROXO: string,
    VERDE: string,
    countA: number,
    countB: number,
    countC: number,
}
class Jogo extends React.Component<any, JogoState>{
    constructor(props : any) {
        super(props);
        this.state = {
            corA : '',
            corB : '',
            corC : '',
            AZUL: '#0000ff',
            AMARELO: '#ffff00',
            ROXO: '#9718ff',
            VERDE: '#00ff00',
            resultado: '',
            countA: 0,
            countB : 0,
            countC : 0

        };
    }
    handleResult = ()=>{
        console.log(this.state.resultado)
        if(this.state.corA===this.state.AZUL && this.state.corB===this.state.AZUL && this.state.corC===this.state.AZUL){
            this.setState({
                resultado: 'Opala'
            })
        }else if(this.state.corA===this.state.AMARELO && this.state.corB===this.state.AMARELO && this.state.corC===this.state.AMARELO){
            this.setState({
                resultado: 'Citrino'
            })
        }else if(this.state.corA===this.state.AZUL && this.state.corB===this.state.AMARELO && this.state.corC===this.state.AMARELO){
            this.setState({
                resultado: 'Jade'
            })
        }else if(this.state.corA===this.state.ROXO || this.state.corB===this.state.ROXO || this.state.corC===this.state.ROXO){
            this.setState({
                resultado: 'Ametista'
            })
        }else if(this.state.corA===this.state.VERDE && this.state.corB===this.state.VERDE && this.state.corC===this.state.AMARELO){
            this.setState({
                resultado: 'Turquesa'
            })
        }else if(this.state.corA===this.state.VERDE && this.state.corB===this.state.AMARELO && this.state.corC===this.state.VERDE){//erro
            this.setState({
                resultado: 'Esmeralda'
            })
        }else if((this.state.corA!==this.state.AMARELO && (this.state.corA===this.state.AZUL || this.state.corA===this.state.VERDE)) && (this.state.corB!==this.state.AMARELO && (this.state.corB===this.state.AZUL || this.state.corC===this.state.VERDE)) && (this.state.corC!==this.state.AMARELO && (this.state.corC===this.state.AZUL || this.state.corC===this.state.VERDE))){
            this.setState({
                resultado: 'Agua marinha'
            })
        }else{
            this.setState({
                resultado: ''
            })
        }

    }
    handleClickB = ()=>{
        var sequencia = [this.state.AZUL,this.state.AMARELO, this.state.ROXO, this.state.VERDE];
        this.setState({
            corB:sequencia[this.state.countB]
        }, ()=> this.handleResult());

        if(this.state.countB<3){
            this.setState({
                countB: this.state.countB + 1
            });
        }else{
            this.setState({
                countB: 0,
            });

        }
    }

    handleClickA = ()=>{
        var sequencia = [this.state.AZUL,this.state.AMARELO, this.state.ROXO, this.state.VERDE];
        this.setState({
            corA:sequencia[this.state.countA]
        }, ()=> this.handleResult());
        if(this.state.countA<3){
            this.setState({
                countA: this.state.countA + 1
            });
        }else{
            this.setState({
                countA: 0,
            });

        }
    }

    handleClickC = ()=>{
        //erro aqui
        var sequencia = [this.state.AZUL,this.state.AMARELO, this.state.VERDE, this.state.ROXO];
        this.setState({
            corC:sequencia[this.state.countC]
        }, ()=> this.handleResult());
        if(this.state.countC<3){
            this.setState({
                countC: this.state.countC + 1
            });
        }else{
            this.setState({
                countC: 0,
            });

        }
    }
    render(){
        return(
            <Container >
                <Row className="justify-content-center">
                        {this.state.resultado}
                </Row>
                <Row>
                    <Col id="A">
                        <Row id="CorA" style={{background: this.state.corA}}/>
                        <Row className="justify-content-center">
                            <Button id="BotaoA" onClick={()=>this.handleClickA()}> Cor A</Button>
                        </Row>
                    </Col>
                    <Col id="B">
                        <Row id="CorB" style={{background: this.state.corB}}/>
                        <Row className="justify-content-center">
                            <Button id="BotaoB" onClick={()=>this.handleClickB()}> Cor B</Button>
                        </Row>
                    </Col>
                    <Col id="C">
                        <Row id="CorC" style={{background: this.state.corC}}/>
                        <Row className="justify-content-center">
                            <Button id="BotaoC" onClick={()=>this.handleClickC()}> Cor C</Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default Jogo;