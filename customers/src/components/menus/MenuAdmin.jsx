import React from 'react'
import { Link } from "react-router-dom"

export const MenuAdmin = () => {
    return (
        <>
        
            <div className="sidenav-menu-heading">
                Configuración
            </div>

            <a aria-controls="collapseDashboards" aria-expanded="false" className="nav-link collapsed"
                data-bs-target="#collapseDashboards" data-bs-toggle="collapse" href="#">
                <div className="nav-link-icon">
                    <i className="fa-solid fa-industry"></i>
                </div>
                Empresa
                <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down">
                    </i>
                </div>
            </a>
            <div className="collapse" data-bs-parent="#accordionSidenav" id="collapseDashboards">
                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">

                    <Link className='nav-link' to='lista-empresas'> Ver Empresas</Link>
                    <Link className='nav-link' to='agregar-empresa'> Crear Empresa</Link>
    
                    <a className="nav-link" href="#">
                        Áreas
                    </a>
                    
                    <a className="nav-link" href="#">
                        Centros de Costos
                    </a>
                    <a className="nav-link" href="#">
                        Carga Masiva
                    </a>
                </nav>
            </div>
            
            <div className="sidenav-menu-heading">
                Custom
            </div>

            <a aria-controls="collapsePages" aria-expanded="false" className="nav-link collapsed"
                data-bs-target="#collapsePages" data-bs-toggle="collapse" href="#">
                <div className="nav-link-icon">
                    <i data-feather="grid">
                    </i>
                </div>
                Pages
                <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down">
                    </i>
                </div>
            </a>
            <div className="collapse" data-bs-parent="#accordionSidenav" id="collapsePages">
                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">

                    <a aria-controls="pagesCollapseAccount" aria-expanded="false" className="nav-link collapsed"
                        data-bs-target="#pagesCollapseAccount" data-bs-toggle="collapse"
                        href="#">
                        Account
                        <div className="sidenav-collapse-arrow">
                            <i className="fas fa-angle-down">
                            </i>
                        </div>
                    </a>
                    <div className="collapse" data-bs-parent="#accordionSidenavPagesMenu"
                        id="pagesCollapseAccount">
                        <nav className="sidenav-menu-nested nav">
                            <a className="nav-link" href="account-profile.html">
                                Profile
                            </a>
                            <a className="nav-link" href="account-billing.html">
                                Billing
                            </a>
                            <a className="nav-link" href="account-security.html">
                                Security
                            </a>
                            <a className="nav-link" href="account-notifications.html">
                                Notifications
                            </a>
                        </nav>
                    </div>

                    <a aria-controls="pagesCollapseAuth" aria-expanded="false" className="nav-link collapsed"
                        data-bs-target="#pagesCollapseAuth" data-bs-toggle="collapse"
                        href="#">
                        Authentication
                        <div className="sidenav-collapse-arrow">
                            <i className="fas fa-angle-down">
                            </i>
                        </div>
                    </a>
                    <div className="collapse" data-bs-parent="#accordionSidenavPagesMenu"
                        id="pagesCollapseAuth">
                        <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPagesAuth">

                            <a aria-controls="pagesCollapseAuthBasic" aria-expanded="false"
                                className="nav-link collapsed" data-bs-target="#pagesCollapseAuthBasic"
                                data-bs-toggle="collapse" href="#">
                                Basic
                                <div className="sidenav-collapse-arrow">
                                    <i className="fas fa-angle-down">
                                    </i>
                                </div>
                            </a>
                            <div className="collapse" data-bs-parent="#accordionSidenavPagesAuth"
                                id="pagesCollapseAuthBasic">
                                <nav className="sidenav-menu-nested nav">
                                    <a className="nav-link" href="auth-login-basic.html">
                                        Login
                                    </a>
                                    <a className="nav-link" href="auth-register-basic.html">
                                        Register
                                    </a>
                                    <a className="nav-link" href="auth-password-basic.html">
                                        Forgot Password
                                    </a>
                                </nav>
                            </div>

                            <a aria-controls="pagesCollapseAuthSocial" aria-expanded="false"
                                className="nav-link collapsed" data-bs-target="#pagesCollapseAuthSocial"
                                data-bs-toggle="collapse" href="#">
                                Social
                                <div className="sidenav-collapse-arrow">
                                    <i className="fas fa-angle-down">
                                    </i>
                                </div>
                            </a>
                            <div className="collapse" data-bs-parent="#accordionSidenavPagesAuth"
                                id="pagesCollapseAuthSocial">
                                <nav className="sidenav-menu-nested nav">
                                    <a className="nav-link" href="auth-login-social.html">
                                        Login
                                    </a>
                                    <a className="nav-link" href="auth-register-social.html">
                                        Register
                                    </a>
                                    <a className="nav-link" href="auth-password-social.html">
                                        Forgot Password
                                    </a>
                                </nav>
                            </div>
                        </nav>
                    </div>

                    <a aria-controls="pagesCollapseError" aria-expanded="false" className="nav-link collapsed"
                        data-bs-target="#pagesCollapseError" data-bs-toggle="collapse"
                        href="#">
                        Error
                        <div className="sidenav-collapse-arrow">
                            <i className="fas fa-angle-down">
                            </i>
                        </div>
                    </a>
                    <div className="collapse" data-bs-parent="#accordionSidenavPagesMenu"
                        id="pagesCollapseError">
                        <nav className="sidenav-menu-nested nav">
                            <a className="nav-link" href="error-400.html">
                                400 Error
                            </a>
                            <a className="nav-link" href="error-401.html">
                                401 Error
                            </a>
                            <a className="nav-link" href="error-403.html">
                                403 Error
                            </a>
                            <a className="nav-link" href="error-404-1.html">
                                404 Error 1
                            </a>
                            <a className="nav-link" href="error-404-2.html">
                                404 Error 2
                            </a>
                            <a className="nav-link" href="error-500.html">
                                500 Error
                            </a>
                            <a className="nav-link" href="error-503.html">
                                503 Error
                            </a>
                            <a className="nav-link" href="error-504.html">
                                504 Error
                            </a>
                        </nav>
                    </div>
                    <a className="nav-link" href="pricing.html">
                        Pricing
                    </a>
                    <a className="nav-link" href="invoice.html">
                        Invoice
                    </a>
                </nav>
            </div>

            <a aria-controls="collapseApps" aria-expanded="false" className="nav-link collapsed"
                data-bs-target="#collapseApps" data-bs-toggle="collapse" href="#">
                <div className="nav-link-icon">
                    <i data-feather="globe">
                    </i>
                </div>
                Applications
                <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down">
                    </i>
                </div>
            </a>
            <div className="collapse" data-bs-parent="#accordionSidenav" id="collapseApps">
                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavAppsMenu">

                    <a aria-controls="appsCollapseKnowledgeBase" aria-expanded="false"
                        className="nav-link collapsed" data-bs-target="#appsCollapseKnowledgeBase"
                        data-bs-toggle="collapse" href="#">
                        Knowledge Base
                        <div className="sidenav-collapse-arrow">
                            <i className="fas fa-angle-down">
                            </i>
                        </div>
                    </a>
                    <div className="collapse" data-bs-parent="#accordionSidenavAppsMenu"
                        id="appsCollapseKnowledgeBase">
                        <nav className="sidenav-menu-nested nav">
                            <a className="nav-link" href="knowledge-base-home-1.html">
                                Home 1
                            </a>
                            <a className="nav-link" href="knowledge-base-home-2.html">
                                Home 2
                            </a>
                            <a className="nav-link" href="knowledge-base-category.html">
                                Category
                            </a>
                            <a className="nav-link" href="knowledge-base-article.html">
                                Article
                            </a>
                        </nav>
                    </div>

                    <a aria-controls="appsCollapseUserManagement" aria-expanded="false"
                        className="nav-link collapsed" data-bs-target="#appsCollapseUserManagement"
                        data-bs-toggle="collapse" href="#">
                        User Management
                        <div className="sidenav-collapse-arrow">
                            <i className="fas fa-angle-down">
                            </i>
                        </div>
                    </a>
                    <div className="collapse" data-bs-parent="#accordionSidenavAppsMenu"
                        id="appsCollapseUserManagement">
                        <nav className="sidenav-menu-nested nav">
                            <a className="nav-link" href="user-management-list.html">
                                Users List
                            </a>
                            <a className="nav-link" href="user-management-edit-user.html">
                                Edit User
                            </a>
                            <a className="nav-link" href="user-management-add-user.html">
                                Add User
                            </a>
                            <a className="nav-link" href="user-management-groups-list.html">
                                Groups List
                            </a>
                            <a className="nav-link" href="user-management-org-details.html">
                                Organization Details
                            </a>
                        </nav>
                    </div>

                    <a aria-controls="appsCollapsePostsManagement" aria-expanded="false"
                        className="nav-link collapsed" data-bs-target="#appsCollapsePostsManagement"
                        data-bs-toggle="collapse" href="#">
                        Posts Management
                        <div className="sidenav-collapse-arrow">
                            <i className="fas fa-angle-down">
                            </i>
                        </div>
                    </a>
                    <div className="collapse" data-bs-parent="#accordionSidenavAppsMenu"
                        id="appsCollapsePostsManagement">
                        <nav className="sidenav-menu-nested nav">
                            <a className="nav-link" href="blog-management-posts-list.html">
                                Posts List
                            </a>
                            <a className="nav-link" href="blog-management-create-post.html">
                                Create Post
                            </a>
                            <a className="nav-link" href="blog-management-edit-post.html">
                                Edit Post
                            </a>
                            <a className="nav-link" href="blog-management-posts-admin.html">
                                Posts Admin
                            </a>
                        </nav>
                    </div>
                </nav>
            </div>

            <a aria-controls="collapseFlows" aria-expanded="false" className="nav-link collapsed"
                data-bs-target="#collapseFlows" data-bs-toggle="collapse" href="#">
                <div className="nav-link-icon">
                    <i data-feather="repeat">
                    </i>
                </div>
                Flows
                <div className="sidenav-collapse-arrow">
                    <i className="fas fa-angle-down">
                    </i>
                </div>
            </a>
            <div className="collapse" data-bs-parent="#accordionSidenav" id="collapseFlows">
                <nav className="sidenav-menu-nested nav">
                    <a className="nav-link" href="multi-tenant-select.html">
                        Multi-Tenant Registration
                    </a>
                    <a className="nav-link" href="wizard.html">
                        Wizard
                    </a>
                </nav>
            </div>
        </>
    )
}
