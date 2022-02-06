import React from 'react';
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import "bulma/css/bulma.min.css";
import Abecedario from "./Abecedario";
import Foto from "./Foto";
import Razas from "./Razas";
import Page404 from "./404";

import { Header } from "../Util/Components/Header";

const Pages = ({ match }) => {

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Routes>
                <Route path="/" element={<Abecedario />}>
                    <Route path="razas" element={<Razas />} />
                    <Route path="fotos" element={<Foto />} />
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}

export default Pages;
