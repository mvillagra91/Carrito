import React from "react";
import { Badge, Button, Popover, PopoverBody, PopoverHeader, Table } from "reactstrap";
import listaCarrito from '../listaCarrito.json';

class Carro extends React.Component{
    constructor(){
        super();
        this.state = {
            popoverOpen:false,
            listaCarrito
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }

    render(){

        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito, i) =>{
                return(
                    <tr>
                        <td>{i+=1}</td>
                        <td>{listaCarrito.titulo}</td>
                        <td>{listaCarrito.precio}</td>
                    </tr>
                )
            }
        )
        return(
            <div>
                <Button id="Popover1" color="info">
                    <span className="material-icons">shopping_cart</span>
                    <Badge color="secondary">{arregloCarrito.length}</Badge>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>Listado de Compras</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <td>#</td>
                                    <td>Producto</td>
                                    <td>Precio</td>
                                </tr>
                            </thead>
                            <tbody>
                                {arregloCarrito}
                            </tbody>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}
export default Carro;