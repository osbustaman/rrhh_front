import React from 'react'

export const ListUsers = () => {
    return (
        <>
            <div id="layoutSidenav_content">
                <main>
                    <header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
                        <div className="container-xl px-4">
                            <div className="page-header-content">
                                <div className="row align-items-center justify-content-between pt-3">
                                    <div className="col-auto mb-3">
                                        <h1 className="page-header-title">
                                            <div className="page-header-icon">
                                                <i data-feather="user-plus">
                                                </i>
                                            </div>
                                            Add User
                                        </h1>
                                    </div>
                                    <div className="col-12 col-xl-auto mb-3">
                                        <a className="btn btn-sm btn-light text-primary" href="user-management-list.html">
                                            <i className="me-1" data-feather="arrow-left">
                                            </i>
                                            Back to Users List
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                
                    <div className="container-xl px-4 mt-4">
                        <div className="row">
                            <div className="col-xl-4">
                            
                                <div className="card mb-4 mb-xl-0">
                                    <div className="card-header">
                                        Profile Picture
                                    </div>
                                    <div className="card-body text-center">
                                    
                                        <img alt="" className="img-account-profile rounded-circle mb-2" src="assets/img/demo/user-placeholder.svg" />
                                        
                                        <div className="small font-italic text-muted mb-4">
                                            JPG or PNG no larger than 5 MB
                                        </div>
                                    
                                        <button className="btn btn-primary" type="button">
                                            Upload new image
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                            
                                <div className="card mb-4">
                                    <div className="card-header">
                                        Account Details
                                    </div>
                                    <div className="card-body">
                                        <form>
                                    
                                            <div className="row gx-3 mb-3">
                                            
                                                <div className="col-md-6">
                                                    <label className="small mb-1" for="inputFirstName">
                                                        First name
                                                    </label>
                                                    <input className="form-control" id="inputFirstName" placeholder="Enter your first name" type="text" value="" />
                                                </div>

                                                <div className="col-md-6">
                                                    <label className="small mb-1" for="inputLastName">
                                                        Last name
                                                    </label>
                                                    <input className="form-control" id="inputLastName" placeholder="Enter your last name" type="text" value="" />
                                                </div>
                                            </div>
                                    
                                            <div className="mb-3">
                                                <label className="small mb-1" for="inputEmailAddress">
                                                    Email address
                                                </label>
                                                <input className="form-control" id="inputEmailAddress" placeholder="Enter your email address" type="email" value="" />
                                            </div>
                                
                                            <div className="mb-3">
                                                <label className="small mb-1">
                                                    Group(s)
                                                </label>
                                                <div className="form-check">
                                                    <input className="form-check-input" id="groupSales" type="checkbox" value="" />
                                                    <label className="form-check-label" for="groupSales">
                                                        Sales
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" id="groupDevs" type="checkbox" value="" />
                                                    <label className="form-check-label" for="groupDevs">
                                                        Developers
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" id="groupMarketing" type="checkbox" value="" />
                                                    <label className="form-check-label" for="groupMarketing">
                                                        Marketing
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" id="groupManagers" type="checkbox" value="" />
                                                    <label className="form-check-label" for="groupManagers">
                                                        Managers
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" id="groupCustomer" type="checkbox" value="" />
                                                    <label className="form-check-label" for="groupCustomer">
                                                        Customer
                                                    </label>
                                                </div>
                                            </div>
                                
                                            <div className="mb-3">
                                                <label className="small mb-1">
                                                    Role
                                                </label>
                                                <select aria-label="Default select example" className="form-select">
                                                    <option disabled="" selected="">
                                                        Select a role:
                                                    </option>
                                                    <option value="administrator">
                                                        Administrator
                                                    </option>
                                                    <option value="registered">
                                                        Registered
                                                    </option>
                                                    <option value="edtior">
                                                        Editor
                                                    </option>
                                                    <option value="guest">
                                                        Guest
                                                    </option>
                                                </select>
                                            </div>
                    
                                            <button className="btn btn-primary" type="button">
                                                Add user
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="footer-admin mt-auto footer-light">
                    <div className="container-xl px-4">
                        <div className="row">
                            <div className="col-md-6 small">
                                Copyright Â© Your Website 2021
                            </div>
                            <div className="col-md-6 text-md-end small">
                                <a href="#!">
                                    Privacy Policy
                                </a>
                                Â·
                                <a href="#!">
                                    Terms &amp; Conditions
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}
