import React from "react";
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ModalCadastroFalha extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal:this.props.showF
        };
    }
    toggleModal = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));
    };
    render() {
        console.log(this.state.showModal);
        return(
            <>
                <Modal show={this.state.showModal} >
                    <Modal.Header >
                        <Modal.Title>Houve uma falha!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Não foi possível enviar o E-mail.</p>
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
export default ModalCadastroFalha;