import { Navigate, Route, Routes, Router } from "react-router-dom";
import "bulma/css/bulma.min.css";
import Abecedario from "./Abecedario";
import Foto from "./Foto";
import Razas from "./Razas";

import { Header } from "../Util/Components/Header";

const Pages = ({ match }) => {

    return (
        <div className="App">
            <Header>a</Header>
            {/* <Router>
                <Routes>
                    <Route path="/" element={<Abecedario />} />
                    <Route path="/razas" element={<Razas />} />
                    <Route path="/fotos" element={<Foto />} />
                    {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
            {/* </Routes>
            </Router> */}
        </div>
    );
}

export default Pages;
