//Importar as dependências
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Principal from './components/Principal';
import Resultado from './components/Resultado'

//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Principal} />
                <Route path="/Resultado" component={Resultado} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;