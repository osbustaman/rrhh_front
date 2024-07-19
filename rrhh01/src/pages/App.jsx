
import React, { useState, useEffect } from 'react';

import { Routes, Route, Outlet } from "react-router-dom";
import { Menu } from "../components/Menu";
import { Dashboard } from "./Dashboard";
import { NotFound } from "../components/NotFound";
import { ImageUser } from "./admin/ImageUser";
import { BreadCrumbs } from "../components/breadcrumbs/BreadCrumbs";
import { AppProvider, AppContext } from '../providers/AppProvider';


import { Title } from "../components/Title";
import { MenuTitle } from "../components/menu_title/MenuTitle";
import { Messages } from "../components/messages/Messages";
import { ButtonsMenuDown } from "../components/buttons/ButtonsMenuDown";


import { ListCustomer } from "../pages/admin/ListCustomer";
import { EditCustomer } from "../pages/admin/EditCustomer";
import { AddCustomer } from './admin/AddCustomer';

import '../static/style.css'

export const App = () => {

    const [currentYear, setCurrentYear] = useState('');

    useEffect(() => {
        // Función para obtener el año actual
        const getYear = () => {
            setCurrentYear(new Date().getFullYear().toString());
        };

        // Llamada inicial para obtener el año actual al montar el componente
        getYear();
    }, []);

    return (
        <>

            <AppProvider>
                <div className="container body">
                    <div className="main_container">
                        <div className="col-md-3 left_col menu_fixed">
                            <div className="left_col scroll-view">
                                <div className="navbar nav_title nav_title_2">
                                    <a href="#" className="site_title"><i className="fa fa-paw"></i> <span>Solvix</span></a>
                                </div>
                                <div className="clearfix"></div>
                                <div className="profile clearfix">
                                    <div className="profile_pic">
                                        <ImageUser route={'../../static/image/'} name={`${localStorage.getItem('username')}.jpg`} icon={true}/>
                                    </div>
                                    <div className="profile_info">
                                        <span>Bienvenido,</span>
                                        <h2>{`${localStorage.getItem('first_name')} ${localStorage.getItem('last_name')}`}</h2>
                                    </div>
                                </div>
                                <br />
                                {<Menu />}
                                {< ButtonsMenuDown />}

                            </div>
                        </div>

                        <div className="top_nav">
                            <div className="nav_menu">
                                <div className="nav toggle">
                                    <a id="menu_toggle"><i className="fa fa-bars"></i></a>
                                </div>
                                <nav className="nav navbar-nav">
                                    <ul className=" navbar-right">
                                        <li className="nav-item dropdown open nav_item">
                                            <a href="#" className="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
                                                <ImageUser route={'../../static/image/'} name={`${localStorage.getItem('username')}.jpg`} icon={false}/>
                                                {`${localStorage.getItem('first_name')} ${localStorage.getItem('last_name')}`}
                                            </a>
                                            <div className="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" href="#"> Configuración</a>
                                                <a className="dropdown-item" href="#"><i className="fa fa-sign-out pull-right"></i> Cerrar Sesión</a>
                                            </div>
                                        </li>
                                        {<Messages />}
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className="right_col right_col_2" role="main">

                            <div className="">
                                <div className="page-title">
                                    <div className="title_left">
                                        <AppContext.Consumer>
                                            {({ breadcrumbs }) => <BreadCrumbs breadcrumbs={breadcrumbs} />}
                                        </AppContext.Consumer>
                                    </div>

                                    <div className="clearfix"></div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="x_panel">
                                                <div className="x_title">

                                                    <AppContext.Consumer>
                                                        {({ breadcrumbs,titulo, buttons }) => (
                                                            <>
                                                                <Title title={titulo} />
                                                                <MenuTitle list_buttons={buttons}/>
                                                            </>
                                                        )}
                                                    </AppContext.Consumer>
                                                    <div className="clearfix"></div>
                                                </div>
                                                <div className="x_content">
                                                    <Routes>
                                                        <Route path="list-customers" element={<ListCustomer />} />
                                                        <Route path="add-customer" element={<AddCustomer />} />
                                                        <Route path="edit-customer/:id" element={<EditCustomer />} />
                                                        <Route path="dashboard" element={<Dashboard />} />
                                                        <Route path="*" element={<NotFound />} />
                                                    </Routes>
                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <footer>
                            <div className="pull-right">
                                <p>&copy; Solvix SPA. Marca registrada 2024-{currentYear}</p>
                            </div>
                            <div className="clearfix"></div>
                        </footer>

                    </div>
                </div>
            </AppProvider>
        </>
    );
};
