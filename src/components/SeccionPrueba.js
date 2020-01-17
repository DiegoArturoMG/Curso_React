import React, { Component } from 'react';
import MiComponente from './MiComponente';

class SeccionPrueba extends Component {

    //contador = 0;

    /*constructor(props){
        super(props);

        this.state = {
            contador: 0
        }
    }*/

    state = {
        contador: 0
    }

    //var HolaMundo = () => {}
    HolaMundo(nombre, edad) {
        var presentacion = (
            <div>
                <h2>Hola, soy {nombre}</h2>
                <h2>Tengo {edad} a&ntilde;os</h2>
            </div>
        );
        return presentacion;
    }

    sumar = (e) => {
        //this.contador += 1;
        //this.state.contador += 1;
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    restar = (e) => {
        //this.contador -= 1;
        //this.state.contador -= 1;
        this.setState({
            contador: (this.state.contador - 1)
        });
    }

    render() {
        var nombre = "Arturo Morales";
        return (
            <section id="content">
                <h2 className="subheader">Últimos artículos</h2>
                <p>Hola bienvenido al curso de React</p>
                <h2 className="subheader">Funciones y JSX</h2>
                {this.HolaMundo(nombre, 23)}
                <h2 className="subheader">Componentes</h2>
                <section className="componentes">
                    <MiComponente />
                    {/*<Pelicula />*/}
                </section>
                <h2 className="subheader">Estado</h2>
                <p>Contador: {this.state.contador}</p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar} />
                    <input type="button" value="Restar" onClick={this.restar} />
                </p>
            </section>
        );
    }
}

export default SeccionPrueba;