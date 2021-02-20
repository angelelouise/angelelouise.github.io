import React from "react";
import {
    Accordion,
    Button,
    ButtonGroup,
    Card,
    Container,
    Dropdown,
    DropdownButton,
    Form,

} from "react-bootstrap";

class CyExample extends React.Component<any, any>{
    private outputText: any;
    constructor(props:any) {
        super(props);
        this.outputText = React.createRef();
        this.state ={
            texto: '',
            outTexto: ''
        }
    }
    handleChangeTexto = (event: { target: { value: string; }; })=>{
        if(!(event.target.value.length===0)){//se o campo não estiver vazio
            this.setState({
                texto:event.target.value

            });
        }
    }
    submit=()=>{
        this.setState({
            //setting value using state
            outTexto: 'Tester says: '+ this.state.texto
        })
        //Another way of setting value using ref
        this.outputText.value = 'Tester says: '+ this.state.texto;
    }
    render() {
        return (
            <div>
                <Container>
                    <Form>
                        <br/>
                        <Form.Group controlId="exampleForm.Text">
                            <Form.Label>Insira uma string no campo de texto:</Form.Label>
                            <input id="input_texto" className="input" name="texto" onChange={this.handleChangeTexto}/>
                            <Button className="button" id="input_submit" onClick={this.submit}> Gerar string</Button>
                            <br/>
                            <br/>
                            <Form.Label>String gerada: </Form.Label>
                            <Form.Control ref={(c:any)=>this.outputText=c} plaintext readOnly defaultValue=" " value={this.state.outTexto}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Selecione uma opção:</Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Selecione várias opções:</Form.Label>
                            <Form.Control as="select" multiple>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <br/>
                        {['checkbox', 'radio'].map((type:any) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
                                <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
                                <Form.Check
                                    inline
                                    disabled
                                    label="3 (disabled)"
                                    type={type}
                                    id={`inline-${type}-3`}
                                />
                            </div>
                        ))}
                        <label>Button group:</label>
                        <br/>
                        <ButtonGroup aria-label="button_group">
                            <Button variant="secondary">Esquerda</Button>
                            <Button variant="secondary">Meio</Button>
                            <Button variant="secondary">Direita</Button>
                        </ButtonGroup>
                        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                            <Dropdown.Item eventKey="1">Dropdown 1</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Dropdown 2</Dropdown.Item>
                        </DropdownButton>
                        <br/>
                        <br/>
                        <label>Accordion:</label>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Mostrar/Ocultar
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>LOREM IPSUM</Card.Body>
                                    </Accordion.Collapse>
                                </Card.Header>
                            </Card>
                        </Accordion>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Insira um arquivo:" />
                        </Form.Group>
                        <Form.Group controlId="formBasicRange">
                            <Form.Label>Range</Form.Label>
                            <Form.Control type="range" />
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default CyExample;