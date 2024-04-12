import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            {" "}
            <Routes>
                {" "}
               {/* <Route path="/" element={</>}>  - rota que pega o body*/} 
               {/* <Route path="/" element={</>}> - rota para página index*/}
               {/* <Route path="/produto" element={</>}> - rota para a página produto*/}
               {/* <Route path="/contato" element={</>}> - rota para a página contato*/}
                {/* </Route> */}
            </Routes>
        </BrowserRouter>
    );
}