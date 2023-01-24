import NavBar from "components/NavBar";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Rotas = () => (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Catalog />} />
        </Routes>
    </BrowserRouter>
);

export default Rotas;