import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SeccionPruebas from './components/SeccionPrueba';
import MiComponente from './components/MiComponente';
import Error from './components/Error';

class Router extends Component {

    render() {
        return (
            <BrowserRouter>
                {/*Configurar rutas y paginas*/}
                <Switch>
                    <Route path="/ruta-prueba" component={SeccionPruebas} />
                    <Route path="/segunda-ruta" component={MiComponente} />

                    <Route component={Error}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;