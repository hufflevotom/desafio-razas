import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import "./Razas.css";

//* API razas
import { listarRazas } from "../../Services/razas";

const Razas = () => {
    var { letra } = useParams();

    const [razas, setRazas] = useState();

    const traerLista = async () => {
        const respuesta = await listarRazas();
        var array = [];
        Object.entries(respuesta.data.message).forEach(element => {
            array.push({ raza: element[0], subRaza: element[1] });
        })
        array = array.filter(element => element.raza.charAt(0) === letra.toLowerCase());
        setRazas(array);
    }

    useEffect(() => {
        traerLista();
    }, []);

    if (razas ? razas.length === 0 : false) {
        return (
            <div className="contenedorGlobal">
                <div className="titulo">
                    No hay razas con la letra {letra}
                </div>
                <Link to={`/`} key="back" style={{ color: 'green', fontSize: '20px' }}>
                    Volver
                </Link>
            </div>
        );
    } else {
        return (
            <div className="contenedorGlobal">
                <div className="titulo">
                    <div className="contenedorTitulo">
                        <Link to={`/`} key="back" style={{ color: 'green' }}>
                            {'<'}
                        </Link>
                        <h1>Razas con la letra {letra}</h1>
                    </div>
                </div>
                {
                    razas ?
                        razas.map(raza => {
                            return (
                                <div className="contenedorRazas">
                                    <Link to={`/foto/${raza.raza}`} key={raza.raza} className="raza">{raza.raza}</Link>
                                    {raza.subRaza.map(subRaza => {
                                        return (
                                            <Link to={`/foto/${raza.raza}-${subRaza}`} key={subRaza} className="subRaza">{subRaza}</Link>
                                        );
                                    })}
                                </div>
                            );
                        })
                        : null
                }
            </div>
        );
    }
}

export default Razas;