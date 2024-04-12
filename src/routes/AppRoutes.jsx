import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicial from "../pages/Inicial";
import Body from "../layouts/Body";
import Produto from "../pages/Produto";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobre";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Inicial />} />
          <Route path="/produto" element={<Produto />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
