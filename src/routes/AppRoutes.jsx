import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "../"
export default function AppRoutes() {
    return (
        <BrowserRouter>
            {" "}
            <Routes>
                {" "}
                <Route path="/" element={<Body/>}>

               {/* <Route path="/" element={</>}> - rota para página index*/}
               {/* <Route path="/produto" element={</>}> - rota para a página produto*/}
               {/* <Route path="/contato" element={</>}> - rota para a página contato*/}
                {/* </Route> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}