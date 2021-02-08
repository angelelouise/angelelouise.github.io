import React from "react";
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ModalCadastroSucesso extends React.Component{
    constructor(props){
        super(props);
        if(this.props.show){
            this.state = {
                showModal:this.props.show,
                title:'Email enviado com sucesso!',
                message:'Agradeço o contato!'
            };

        }else{
            this.state({
                showModal:true,
                title : 'Houve uma falha!',
                message : 'Não foi possível enviar o E-mail.'
            })
        }
    }
    render() {
        console.log(this.state.showModal);

        return(
            <>
                <Modal show={this.state.showModal} >
                    <Modal.Header >
                        <Modal.Title>{this.state.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{this.state.message}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Link to="/" >
                            Ok
                        </Link>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
export default ModalCadastroSucesso;