import React from 'react';
import {CardImg, Button, Container, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import './css/FichaProducto.css';
import listaCarrito from '../listaCarrito.json';

class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state = {
            modal:false,
            listaCarrito
        };
        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    agregarCarrito(){
        listaCarrito.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio
        });
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render(){
        return(
            <Container>
                <Button onClick={this.toggle}>Ver Ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}/>
                        <p>La descripción del producto es el siguiente:</p>
                        {this.props.props.descripcion}
                        <p>Este producto vale: {this.props.props.valor}</p>
                        <p>Stock: {this.props.props.stock}</p>
                    </ModalBody>
                    <ModalFooter className='ModalFooter'>
                        <Button color='primary' onClick={this.agregarCarrito}>Agregar al carrito</Button>
                        <Button color='secondary' onClick={this.toggle}>Volver atras</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}
export default FichaProducto;