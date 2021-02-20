import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from "./pages/Landing";
import Contato from "./pages/Contato";
import CyExample from "./pages/CyExample";

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/contato" exact component={Contato} />
                <Route path="/example-cypress" exact component={CyExample} />
            </Switch>
        </BrowserRouter>
    );

}

export default Routes;