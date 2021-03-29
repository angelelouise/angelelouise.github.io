import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from "./pages/Landing";
import Contato from "./pages/Contato";
import CyExample from "./pages/CyExample";
import Jogo from "./pages/Jogo";
function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/contato" exact component={Contato} />
                <Route path="/example-cypress" exact component={CyExample} />
                <Route path="/jogo" exact component={Jogo} />
            </Switch>
        </BrowserRouter>
    );

}

export default Routes;