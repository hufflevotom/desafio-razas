import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './Abecedario.css';
// import "bulma/css/bulma.min.css";

const Abecedario = () => {

    var abecedario = Array.from(String.fromCharCode(...Array(91).keys()).slice(65));

    return (
        <div className="contenedorGlobal">
            <h1 className="titulo">Abecedario</h1>
            <div className="columns is-multiline">
                {abecedario.map((element) => {
                    return (
                        <div className="column is-one-quarter" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Link to={`/razas/${element}`} key={element} className="letra">{element}</Link>
                        </div>
                    );
                })}
            </div>
        </div >
    );
};

export default Abecedario;
