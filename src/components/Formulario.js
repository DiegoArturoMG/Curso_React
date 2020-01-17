import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component {
    
    recibirFormulario = (e) => {
        e.preventDefault();
        alert('Enviado');
    }
    
    render() {
        return (
            <div id="formulario">
                <div className="center">
                    <div id="content">
                        <h2 class="subheader">Formulario</h2>
                        {
                            /*Crear formulario*/
                            <form class="mid-form" onSubmit={this.recibirFormulario}>
                                <div class="form-group">
                                    <label for="nombre">Nombre</label>
                                    <input type="text" name="nombre" />
                                </div>

                                <div class="form-group">
                                    <label for="apellidos">Apellidos</label>
                                    <input type="text" name="apellidos" />
                                </div>

                                <div class="form-group">
                                    <label for="bio">Biografia</label>
                                    <textarea name="bio"></textarea>
                                </div>

                                <div class="form-group radibuttons">
                                    <input type="radio" name="genero" value="hombre" /> Hombre
                                    <input type="radio" name="genero" value="mujer" /> Mujer
                                    <input type="radio" name="genero" value="otro" /> Otro
                                </div>

                                <div class="clearfix"></div>

                                <input type="submit" value="Enviar" class="btn btn-success" />

                            </form>
                        }
                    </div>
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default Formulario;