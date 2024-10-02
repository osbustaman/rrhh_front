import React from 'react';
import { Link } from "react-router-dom";

export const MenuJefatura = () => {
    return (
        <>
            <div className="sidenav-menu-heading">
                Jefatura
            </div>

            <a 
                aria-controls="collapseJefatura" 
                aria-expanded={localStorage.getItem('item') === 'jefatura' ? 'true' : 'false'}
                className={localStorage.getItem('item') === 'jefatura' ? 'nav-link' : 'nav-link collapsed'}
                data-bs-target="#collapseJefatura" 
                data-bs-toggle="collapse" 
                href="#"
            >
                <div className="nav-link-icon">
                    <i className="fa-solid fa-handshake"></i>
                </div>
                <span className={localStorage.getItem('item') === 'jefatura' ? 'color-text-1' : ''}>Jefatura</span>
                <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                </div>
            </a>
            <div 
                className={localStorage.getItem('item') === 'jefatura' ? 'collapse show' : 'collapse'}
                data-bs-parent="#accordionSidenav" 
                id="collapseJefatura"
            >
                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                    <Link className={localStorage.getItem('sub-item') === '' ? `active nav-link` : 'nav-link'} to=''> Datos perfil</Link>
                    <Link className={localStorage.getItem('sub-item') === '' ? `active nav-link` : 'nav-link'} to=''> Ver área</Link>
                </nav>
            </div>

        </>
    )
}
