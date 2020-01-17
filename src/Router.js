import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Importar componentes
import Peliculas from './components/Peliculas';
import SeccionPruebas from './components/SeccionPrueba';
import MiComponente from './components/MiComponente';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

class Router extends Component {

    render() {

        return (
            <BrowserRouter>
                <Header />


                {/*Configurar rutas y paginas*/}
                <Switch>
                    <Route exact path="/" component={Peliculas} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/ruta-prueba" component={SeccionPruebas} />
                    <Route exact path="/segunda-ruta" component={MiComponente} />

                    <Route exact path="/pagina-1" render={() => (
                        <React.Fragment>
                            <h1>Hola mundo desde la ruta: PAGINA 1</h1>
                            <MiComponente saludo="Hola amigo" />
                        </React.Fragment>
                    )} />

                    <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                        var nombre = props.match.params.nombre;
                        var apellidos = props.match.params.apellidos;

                        return (
                            <div id="content">
                                <h1>Pagina de pruebas</h1>
                                <h2>
                                    {nombre && !apellidos &&
                                        <React.Fragment>
                                            {nombre}
                                        </React.Fragment>
                                    }
                                    {nombre && apellidos &&
                                        <React.Fragment>
                                            {nombre} {apellidos}
                                        </React.Fragment>
                                    }
                                </h2>
                            </div>
                        );
                    }} />

                    <Route component={Error} />
                </Switch>


                <div className="clearfix"></div>

                <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;