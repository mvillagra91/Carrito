import React from 'react';
import {CardText, CardImg,Col, Card, CardSubtitle, CardBody, CardTitle} from 'reactstrap';
import './css/Producto.css';
import FichaProducto from './FichaProducto';

class Producto extends React.Component{
    render(){
        return(
            <Col className='col' sm="4">
                <Card className='Card'>
                <CardImg src= {this.props.imagen}></CardImg>
                <CardBody>
                    <CardTitle>{this.props.titulo}</CardTitle>
                    <CardSubtitle> {this.props.valor}</CardSubtitle>
                    <CardText>
                        {this.props.descripcion}
                    </CardText>
                    <FichaProducto props = {this.props}/>
                </CardBody>
                </Card>
            </Col>
        );
    }
}
export default Producto;