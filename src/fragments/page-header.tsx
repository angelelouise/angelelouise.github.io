import {Link} from "react-router-dom";
import React from "react";
import '../style/header.css'

function PageHeader() {
    return (
        <div id="page-header">
            <Link id="link_home" to="/" >
                Home
            </Link>
            <a id="link_portifolio" href="/#work">Portifólio</a>
            <Link id="link_contato" to="/contato">
                Contato
            </Link>
        </div>
    );
}

export default PageHeader;