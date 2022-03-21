import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie'
const cookies = new Cookies();

export default function Layout() {
    const cerrarSesion=()=>{
    console.log('entro');
    cookies.remove('token',{path:"/"});
    window.location.href='/login';
    
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/cargaArvhivos">Cargar Archivos</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/vistaregistro">Ver Registros</Link>
              </li>
            </ul>
          </div>
          
          <form  className="form-inline my-2 my-lg-0">
            <button  className="btn btn-danger my-2 my-sm-0"  onClick={()=>cerrarSesion()}>Cerrar Sesión</button>
          </form>
        </nav>
        <section>
            <Outlet />
        </section>
    </div>
  )
}
