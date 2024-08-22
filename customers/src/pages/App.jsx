import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { MenuAdmin } from '../components/menus/MenuAdmin';
import { NotFound } from '../components/NotFound';
import { BreadCrumbs } from '../components/breadcrumbs/BreadCrumbs';
import { AlertsMails } from './AlertsMails';
import { AlertCenter } from './AlertCenter';
import { Config } from './Config';
import { Profile } from './User/Profile';
import { Title } from "../components/Title";

import { AppProvider, AppContext } from '../providers/AppProvider';

import '../static/style_override.css';
import { Factory } from './rrhh/Factory';
import { AddFactory } from './rrhh/AddFactory';
import { EditFactory } from './rrhh/EditFactory';
import { ListSmallButtons } from '../components/buttons/ListSmallButtons';
import useMenuMiddleware from '../hooks/useMenuMiddleware';
import { AddBranchOffice } from './rrhh/BranchOffice/AddBranchOffice';
import { EditarBranchOffice } from './rrhh/BranchOffice/EditarBranchOffice';
import { AddCenterCost } from './rrhh/CenterCost/AddCenterCost';
import { EditCenterCost } from './rrhh/CenterCost/EditCenterCost';
import { AddAssociatedEntities } from './rrhh/AssociatedEntities/AddAssociatedEntities';

export const App = () => {

    useMenuMiddleware();

    const [currentYear, setCurrentYear] = useState('');
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    useEffect(() => {
        // Función para obtener el año actual
        const getYear = () => {
            setCurrentYear(new Date().getFullYear().toString());
        };

        // Llamada inicial para obtener el año actual al montar el componente
        getYear();
    }, []);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    return (
        <>
            <AppProvider>
                <nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white"
                    id="sidenavAccordion">

                    <button
                        className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0"
                        id="sidebarToggle"
                        onClick={toggleSidebar}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>

                    <a className="navbar-brand pe-3 ps-4 ps-lg-2" href="#">
                        SB Admin Pro
                    </a>

                    <form className="form-inline me-auto d-none d-lg-block me-3">
                        <div className="input-group input-group-joined input-group-solid">
                            <input aria-label="Search" className="form-control pe-0" placeholder="Search" type="search" />
                            <div className="input-group-text">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </form>

                    <ul className="navbar-nav align-items-center ms-auto">
                        <AlertCenter />
                        <AlertsMails />
                        <Config />
                    </ul>
                </nav>

                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav" className={isSidebarVisible ? "" : "d-none"}>
                        <nav className="sidenav shadow-right sidenav-light">
                            <div className="sidenav-menu">
                                <div className="nav accordion" id="accordionSidenav">
                                    <MenuAdmin />
                                </div>
                            </div>

                            <div className="sidenav-footer">
                                <div className="sidenav-footer-content">
                                    <div className="sidenav-footer-subtitle">
                                        Bienvenid@:
                                    </div>
                                    <div className="sidenav-footer-title">
                                        Valerie Luna
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div id="layoutSidenav_content">
                        <main>
                            <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                                <div className="container-xl px-4">
                                    <div className="page-header-content pt-4">
                                        <div className="row align-items-center justify-content-between">
                                            <div className="col mt-4">
                                                <h1 className="page-header-title">
                                                    <div className="page-header-icon">
                                                        <i data-feather="layout">
                                                        </i>
                                                    </div>
                                                    <AppContext.Consumer>
                                                        {({ titulo }) => (
                                                            <>
                                                                <Title title={titulo} />
                                                            </>
                                                        )}
                                                    </AppContext.Consumer>
                                                    
                                                </h1>
                                                <div className="page-header-subtitle">
                                                    <div className="row">
                                                        <div className='col-md-9'>
                                                            <AppContext.Consumer>
                                                                {({ breadcrumbs }) => <BreadCrumbs breadcrumbs={breadcrumbs} />}
                                                            </AppContext.Consumer>
                                                        </div>
                                                        <div className='col-md-3 d-flex align-items-center justify-content-end'>
                                                            <div className="d-none d-sm-block">
                                                                <AppContext.Consumer>
                                                                    {({ buttons }) => <ListSmallButtons buttons={buttons} />}
                                                                </AppContext.Consumer>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>

                            <div className="container-xl px-4 mt-n10">
                                <Routes>
                                    <Route path="profile" element={<Profile />} />
                                    <Route path="lista-empresas" element={<Factory />} />
                                    <Route path="agregar-empresa" element={<AddFactory />} />
                                    <Route path="editar-empresa/:id_customer" element={<EditFactory />} />
                                    <Route path="agregar-sucursal/:id_customer" element={<AddBranchOffice />} />
                                    <Route path="editar-sucursal/:id_customer/:id_branch" element={<EditarBranchOffice />} />
                                    <Route path="agregar-centro-costo/:id_customer" element={<AddCenterCost />} />
                                    <Route path="editar-centro-costo/:id_customer/:cencost_id" element={<EditCenterCost />} />
                                    <Route path="agregar-entidades-asociadas/:id_customer" element={<AddAssociatedEntities />} />
                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                            </div>
                        </main>
                        <footer className="footer-admin mt-auto footer-light">
                            <div className="container-xl px-4">
                                <div className="row">
                                    <div className="col-md-6 small">
                                        [nombre cliente]
                                    </div>
                                    <div className="col-md-6 text-md-end small">
                                        &copy; Solvix SPA. Marca registrada 2024-{currentYear}
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </AppProvider>
        </>
    )
}
