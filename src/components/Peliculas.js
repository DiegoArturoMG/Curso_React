import React, { Component } from 'react';
import Pelicula from './Pelicula';

class Peliculas extends Component {

    state = {}

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        //var random = Math.floor(Math.random() * 2);
        peliculas[0].titulo = "Batman Begins";
        this.setState({
            peliculas: peliculas
        })
    }

    favorita = (pelicula, indice) => {
        //console.log(pelicula, indice);
        this.setState({
            favorita: pelicula
        })
    }

    componentWillMount() { // Antes de que se monte el componente
        this.setState({
            peliculas: [
                { titulo: "Batman V Superman", image: "https://cde.laprensa.e3.pe/ima/0/0/1/2/8/128722.jpg" },
                { titulo: "Gran Torino", image: "https://cde.laprensa.e3.pe/ima/0/0/1/2/8/128722.jpg" }
            ],
            nombre: "Arturo Morales",
            favorita: {}
        })
    }

    componentDidMount() { // Despues de que se monta el componente

    }

    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        };

        var favorita;
        if (this.state.favorita.titulo) {
            favorita = (
                <p className="favorita" style={pStyle}>
                    <strong>La pelicula favorita es: </strong>
                    <span>{this.state.favorita.titulo}</span>
                </p>
            )
        } else {
            favorita = (
                <p>No hay pelicula favorita</p>
            )
        }

        return (
            <div id="content" className="peliculas">
                <h2 className="subheader">Peliculas</h2>
                <p>Sección de peliculas de {this.state.nombre}</p>

                <p>
                    <button onClick={this.cambiarTitulo}>
                        Cambiar titutlo de batman
                    </button>
                </p>

                {/*
                    this.state.favorita.titulo ? ( // Operador ternario IF
                        <p className="favorita" style={pStyle}>
                            <strong>La pelicula favorita es: </strong>
                            <span>{this.state.favorita.titulo}</span>
                        </p>
                    ) : (
                            <p>No hay pelicula favorita</p>
                        )
                */}

                {favorita}

                {/*Crear componente pelicula*/}

                <div id="articles" className="peliculas">
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula
                                    key={i}
                                    pelicula={pelicula}
                                    indice={i}
                                    marcarFavorita={this.favorita}
                                />
                            );
                        })
                    }
                </div>

            </div>
        )
    }
}

export default Peliculas;