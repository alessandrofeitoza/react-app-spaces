import { Route, Routes as ReactRoutes } from "react-router-dom";
import Rooms from "../pages/Rooms";
import Home from "../pages/Home";
import Reservation from "../pages/Reservation";

export default function Routes(){
    return (
        <ReactRoutes>
            <Route path="/" element={<Home/>}/>
            <Route path="/salas" element={<Rooms/>}/>
            <Route path="/reservas" element={<Reservation/>}/>
            <Route path="/*" element={<div>Pagina nao encontrada</div>}/>
        </ReactRoutes>
    );
} 