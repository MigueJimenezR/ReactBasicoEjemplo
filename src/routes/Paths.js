import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import Layout from '../Layout';
import  Login  from '../pages/Login/Login';
import Index from '../pages/Index/Index';
import VistaRegistros from '../pages/VistaRegistro/VistaRegistro';
import CargaArchivos from '../pages/CargaArchivos/CargaArchivos';



function paths() {

    return (
        <BrowserRouter>
        
        <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Layout />}>
                    <Route exact path='/' element={<Index />}></Route>
                    <Route path='vistaregistro' element={<VistaRegistros />}></Route>
                    <Route path='cargaArvhivos' element={<CargaArchivos />}></Route>
                    <Route path='*' element={<Navigate replace to="/" />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}
export default paths;
