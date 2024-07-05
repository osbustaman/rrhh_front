import React, { useState } from 'react';

export const MenuAdmin = () => {
    const [openItems, setOpenItems] = useState({});

    const handleToggle = (item) => {
        setOpenItems((prevOpenItems) => ({
            ...prevOpenItems,
            [item]: !prevOpenItems[item],
        }));
    };

    return (
        <>
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <div className="menu_section">
                    <h3>General</h3>
                    <ul className="nav side-menu">
                        <li>
                            <a onClick={() => handleToggle('home')}>
                                <i className="fa fa-home"></i> Home <span className="fa fa-chevron-down"></span>
                            </a>
                            {openItems['home'] && (
                                <ul className="nav child_menu">
                                    <li><a href="#">Dashboard</a></li>
                                    <li><a href="#">Dashboard2</a></li>
                                    <li><a href="#">Dashboard3</a></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a onClick={() => handleToggle('forms')}>
                                <i className="fa fa-edit"></i> Forms <span className="fa fa-chevron-down"></span>
                            </a>
                            {openItems['forms'] && (
                                <ul className="nav child_menu">
                                    <li><a href="#">General Form</a></li>
                                    <li><a href="#">Advanced Components</a></li>
                                    <li><a href="#">Form Validation</a></li>
                                    <li><a href="#">Form Wizard</a></li>
                                    <li><a href="#">Form Upload</a></li>
                                    <li><a href="#">Form Buttons</a></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a onClick={() => handleToggle('ui-elements')}>
                                <i className="fa fa-desktop"></i> UI Elements <span className="fa fa-chevron-down"></span>
                            </a>
                            {openItems['ui-elements'] && (
                                <ul className="nav child_menu">
                                    <li><a href="#">General Elements</a></li>
                                    <li><a href="#">Media Gallery</a></li>
                                    <li><a href="#">Typography</a></li>
                                    <li><a href="#">Icons</a></li>
                                    <li><a href="#">Glyphicons</a></li>
                                    <li><a href="#">Widgets</a></li>
                                    <li><a href="#">Invoice</a></li>
                                    <li><a href="#">Inbox</a></li>
                                    <li><a href="#">Calendar</a></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a onClick={() => handleToggle('tables')}>
                                <i className="fa fa-table"></i> Tables <span className="fa fa-chevron-down"></span>
                            </a>
                            {openItems['tables'] && (
                                <ul className="nav child_menu">
                                    <li><a href="#">Tables</a></li>
                                    <li><a href="#">Table Dynamic</a></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a onClick={() => handleToggle('data-presentation')}>
                                <i className="fa fa-bar-chart-o"></i> Data Presentation <span className="fa fa-chevron-down"></span>
                            </a>
                            {openItems['data-presentation'] && (
                                <ul className="nav child_menu">
                                    <li><a href="#">Chart JS</a></li>
                                    <li><a href="#">Chart JS2</a></li>
                                    <li><a href="#">Moris JS</a></li>
                                    <li><a href="#">ECharts</a></li>
                                    <li><a href="#">Other Charts</a></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a onClick={() => handleToggle('layouts')}>
                                <i className="fa fa-clone"></i> Layouts <span className="fa fa-chevron-down"></span>
                            </a>
                            {openItems['layouts'] && (
                                <ul className="nav child_menu">
                                    <li><a href="#">Fixed Sidebar</a></li>
                                    <li><a href="#">Fixed Footer</a></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="menu_section">
                    <h3>Live On</h3>
                    <ul className="nav side-menu">
                        <li>
                            <a onClick={() => handleToggle('additional-pages')}>
                                <i className="fa fa-bug"></i> Additional Pages <span className="fa fa-chevron-down"></span>
                            </a>
                            {openItems['additional-pages'] && (
                                <ul className="nav child_menu">
                                    <li><a href="#">E-commerce</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">Project Detail</a></li>
                                    <li><a href="#">Contacts</a></li>
                                    <li><a href="#">Profile</a></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a onClick={() => handleToggle('extras')}>
                                <i className="fa fa-windows"></i> Extras <span className="fa fa-chevron-down"></span>
                            </a>
                            {openItems['extras'] && (
                                <ul className="nav child_menu">
                                    <li><a href="#">403 Error</a></li>
                                    <li><a href="#">404 Error</a></li>
                                    <li><a href="#">500 Error</a></li>
                                    <li><a href="#">Plain Page</a></li>
                                    <li><a href="#">Login Page</a></li>
                                    <li><a href="#">Pricing Tables</a></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a onClick={() => handleToggle('multilevel-menu')}>
                                <i className="fa fa-sitemap"></i> Multilevel Menu <span className="fa fa-chevron-down"></span>
                            </a>
                            {openItems['multilevel-menu'] && (
                                <ul className="nav child_menu">
                                    <li><a href="#">Level One</a></li>
                                    <li>
                                        <a onClick={() => handleToggle('level-one')}>
                                            Level One <span className="fa fa-chevron-down"></span>
                                        </a>
                                        {openItems['level-one'] && (
                                            <ul className="nav child_menu">
                                                <li className="sub_menu"><a href="level2#">Level Two</a></li>
                                                <li><a href="#">Level Two</a></li>
                                                <li><a href="#">Level Two</a></li>
                                            </ul>
                                        )}
                                    </li>
                                    <li><a href="#">Level One</a></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-laptop"></i> Landing Page <span className="label label-success pull-right">Coming Soon</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
