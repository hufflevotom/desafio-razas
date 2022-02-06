import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import "./Foto.css";

//* API razas
import { obtenerImagenes } from "../../Services/razas";

const Foto = () => {
    var { raza } = useParams();

    const [imagenes, setImagenes] = useState();

    const traerImagenes = async () => {
        const respuesta = await obtenerImagenes(raza.replace("-", "/"));
        setImagenes(respuesta.data.message);
    }

    useEffect(() => {
        traerImagenes();
    }, []);

    if (imagenes ? imagenes.length === 0 : false) {
        return (
            <div className="contenedorGlobal">
                <div className="titulo">
                    No hay imágenes para la raza {raza.replace("-", " : ")}
                </div>
                <Link to={`/`} key="back" style={{ color: 'green', fontSize: '20px' }}>
                    Abecedario
                </Link>
            </div>
        );
    } else {
        return (
            <div className="contenedorGlobal">
                <div className="titulo">
                    <div className="contenedorTitulo">
                        <Link to={`/`} key="back" style={{ color: 'green' }}>
                            Abecedario
                        </Link>
                        <h1>Fotos para la raza {raza.replace("-", " : ")}</h1>
                    </div>
                </div>
                <div className="columns is-multiline">
                    {
                        imagenes ?
                            imagenes.map(img => {
                                return (
                                    <div className="column is-half" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={img} alt={raza.replace("-", " : ")} style={{width: '250px', height: 'auto'}} />
                                    </div>
                                );
                            })
                            : null
                    }
                </div>
            </div >
        );
    }
}

export default Foto;