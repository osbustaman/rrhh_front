import React from 'react';
import { Link } from "react-router-dom";

export const MenuCollaborators = () => {
    return (
        <>
            <div className="sidenav-menu-heading">
                Colaborador
            </div>

            <a 
                aria-controls="collapseColaborattor" 
                aria-expanded={localStorage.getItem('item') === 'collaborators' ? 'true' : 'false'}
                className={localStorage.getItem('item') === 'collaborators' ? 'nav-link' : 'nav-link collapsed'}
                data-bs-target="#collapseColaborattor" 
                data-bs-toggle="collapse" 
                href="#"
            >
                <div className="nav-link-icon">
                    <i className="fa-solid fa-person"></i>
                </div>
                <span className={localStorage.getItem('item') === 'collaborators' ? 'color-text-1' : ''}>Colaborador</span>
                <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                </div>
            </a>
            <div 
                className={localStorage.getItem('item') === 'collaborators' ? 'collapse show' : 'collapse'}
                data-bs-parent="#accordionSidenav" 
                id="collapseColaborattor"
            >
                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                    <Link className={localStorage.getItem('sub-item') === '' ? `active nav-link` : 'nav-link'} to=''> Datos Colaborador</Link>
                    <Link className={localStorage.getItem('sub-item') === '' ? `active nav-link` : 'nav-link'} to=''> Contratos</Link>
                </nav>
            </div>

        </>
    )
}
