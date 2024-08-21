import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

import './style_menu.css';

export const MenuAdmin = () => {

    return (
        <>
        
        <div className="sidenav-menu-heading">
                Configuración
            </div>

            <a 
                aria-controls="collapseDashboards" 
                aria-expanded={localStorage.getItem('item') === 'ver_empresas' ? 'true' : 'false'}
                className={localStorage.getItem('item') === 'ver_empresas' ? 'nav-link' : 'nav-link collapsed'}
                data-bs-target="#collapseDashboards" 
                data-bs-toggle="collapse" 
                href="#"
            >
                <div className="nav-link-icon">
                    <i className="fa-solid fa-industry"></i>
                </div>
                <span className={localStorage.getItem('item') === 'ver_empresas' ? 'color-text-1' : ''}>Empresa</span>

                <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down">
                    </i>
                </div>
            </a>
            <div 
                className={localStorage.getItem('item') === 'ver_empresas' ? 'collapse show' : 'collapse'}
                data-bs-parent="#accordionSidenav" 
                id="collapseDashboards"
                >
                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">

                    <Link className={localStorage.getItem('sub-item') === 'lista_empresas' ? `active nav-link` : 'nav-link'} to='lista-empresas'> Ver Empresas</Link>
                    <Link className={localStorage.getItem('sub-item') === 'agregar_empresa' ? `active nav-link` : 'nav-link'} to='agregar-empresa'> Crear Empresa</Link>
                    <Link className='nav-link' to='#'> Áreas</Link>
                    <Link className='nav-link' to='#'> Centros de Costos</Link>
                    <Link className='nav-link' to='#'> Carga Masiva</Link>
                    
                </nav>
            </div>
            
        </>
    )
}
