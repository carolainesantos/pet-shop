import { BrowserRouter, Routes, Route } from "react-router-dom"; {/* importa pacotes da biblioteca react-router-dom */}
import Body from "../layouts/Body"; {/* importação do corpo da página */}
import Inicial from "../pages/Inicial"; {/* importação da página de index */}
import Produto from "../pages/Produto"; {/* importação da página produto */}
import Contato from "../pages/Contato"; {/* importação da página contato */}

export default function AppRoutes() {
    return (
        <BrowserRouter>
            {" "}
            <Routes>
                {" "}
                <Route path="/" element={<Body/>}>
                    <Route path="/" element={<Inicial/>}/>
                    <Route path="/produto" element={<Produto/>}/>
                    <Route path="/contato" element={<Contato/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}