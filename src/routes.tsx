import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from "./pages/Landing";
import Contato from "./pages/Contato";

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/contato" exact component={Contato} />
            </Switch>
        </BrowserRouter>
    );

}

export default Routes;