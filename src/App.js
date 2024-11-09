import React from 'react';
import Producto from './components/Producto';
import './App.css';
import { Container, Row } from 'reactstrap';
import Navegacion from './components/Navegacion';
import listaProductos from './listaProductos.json'

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      listaProductos: listaProductos.listaProductos
    };
  }

  render(){
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) => {
        return(
          <Producto
            key = {i}
            titulo = {listaProductos.titulo}
            imagen = {listaProductos.imagen}
            descripcion = {listaProductos.descripcion}
            precio = {listaProductos.precio}
            stock = {listaProductos.stock}
          />
        )
      }
    );
    return (
      <div>
        <Container>
          <Navegacion titulo="Mi primer sitio de compras en React"/>
          <Row>
            {arregloComponentes}
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;
