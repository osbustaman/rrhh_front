import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../providers/AppProvider';


export const Profile = () => {

    const { updateBreadcrumbs, updateTitulo } = useContext(AppContext);

    const dict_bread_crumb = [
        { "bread": "[Nombre Colaborador]" }
    ];

    const dict_title = { "tittle": "Agregar nuevo cliente" };

    useEffect(() => {
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
    }, []);
    return (

        <>


            <div className="card">
                <div className="card-header border-bottom">

                    <div className="nav nav-pills nav-justified flex-column flex-xl-row nav-wizard" id="cardTab" role="tablist">

                        <a aria-controls="wizard1" aria-selected="true" className="nav-item nav-link active" data-bs-toggle="tab" href="#wizard1" id="wizard1-tab" role="tab">
                            <div className="wizard-step-icon">
                                1
                            </div>
                            <div className="wizard-step-text">
                                <div className="wizard-step-text-name">
                                    Datos Personales
                                </div>
                                <div className="wizard-step-text-details">
                                </div>
                            </div>
                        </a>

                        <a aria-controls="wizard2" aria-selected="true" className="nav-item nav-link" data-bs-toggle="tab" href="#wizard2" id="wizard2-tab" role="tab">
                            <div className="wizard-step-icon">
                                2
                            </div>
                            <div className="wizard-step-text">
                                <div className="wizard-step-text-name">
                                    Previsión
                                </div>
                                <div className="wizard-step-text-details">
                                </div>
                            </div>
                        </a>

                        <a aria-controls="wizard3" aria-selected="true" className="nav-item nav-link" data-bs-toggle="tab" href="#wizard3" id="wizard3-tab" role="tab">
                            <div className="wizard-step-icon">
                                3
                            </div>
                            <div className="wizard-step-text">
                                <div className="wizard-step-text-name">
                                    Datos para remuneración
                                </div>
                                <div className="wizard-step-text-details">
                                </div>
                            </div>
                        </a>

                        <a aria-controls="wizard4" aria-selected="true" className="nav-item nav-link" data-bs-toggle="tab" href="#wizard4" id="wizard4-tab" role="tab">
                            <div className="wizard-step-icon">
                                4
                            </div>
                            <div className="wizard-step-text">
                                <div className="wizard-step-text-name">
                                    Grupo Familiar
                                </div>
                                <div className="wizard-step-text-details">
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="card-body">
                    <div className="tab-content" id="cardTabContent">

                        <div aria-labelledby="wizard1-tab" className="tab-pane py-5 py-xl-10 fade show active" id="wizard1" role="tabpanel">
                            <div className="row justify-content-center">
                                <div className="col-xxl-6 col-xl-8">
                                    <h3 className="text-primary">
                                        Step 1
                                    </h3>
                                    <h5 className="card-title mb-4">
                                        Enter your account information
                                    </h5>
                                    <form>
                                        <div className="mb-3">
                                            <label className="small mb-1" for="inputUsername">
                                                Username (how your name will appear to other users on the site)
                                            </label>
                                            <input className="form-control" id="inputUsername" placeholder="Enter your username" type="text" value="username" />
                                        </div>
                                        <div className="row gx-3">
                                            <div className="mb-3 col-md-6">
                                                <label className="small mb-1" for="inputFirstName">
                                                    First name
                                                </label>
                                                <input className="form-control" id="inputFirstName" placeholder="Enter your first name" type="text" value="Valerie" />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label className="small mb-1" for="inputLastName">
                                                    Last name
                                                </label>
                                                <input className="form-control" id="inputLastName" placeholder="Enter your last name" type="text" value="Luna" />
                                            </div>
                                        </div>
                                        <div className="row gx-3">
                                            <div className="mb-3 col-md-6">
                                                <label className="small mb-1" for="inputOrgName">
                                                    Organization name
                                                </label>
                                                <input className="form-control" id="inputOrgName" placeholder="Enter your organization name" type="text" value="Start Bootstrap" />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label className="small mb-1" for="inputLocation">
                                                    Location
                                                </label>
                                                <input className="form-control" id="inputLocation" type="text" value="San Francisco, CA" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="small mb-1" for="inputEmailAddress">
                                                Email address
                                            </label>
                                            <input className="form-control" id="inputEmailAddress" placeholder="Enter your email address" type="email" value="name@example.com" />
                                        </div>
                                        <div className="row gx-3">
                                            <div className="col-md-6 mb-md-0">
                                                <label className="small mb-1" for="inputPhone">
                                                    Phone number
                                                </label>
                                                <input className="form-control" id="inputPhone" placeholder="Enter your phone number" type="tel" value="555-123-4567" />
                                            </div>
                                            <div className="col-md-6 mb-0">
                                                <label className="small mb-1" for="inputBirthday">
                                                    Birthday
                                                </label>
                                                <input className="form-control" id="inputBirthday" name="birthday" placeholder="Enter your birthday" type="text" value="06/10/1988" />
                                            </div>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="d-flex justify-content-between">
                                            <button className="btn btn-light disabled" disabled="" type="button">
                                                Previous
                                            </button>
                                            <button className="btn btn-primary" type="button">
                                                Next
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div aria-labelledby="wizard2-tab" className="tab-pane py-5 py-xl-10 fade" id="wizard2" role="tabpanel">
                            <div className="row justify-content-center">
                                <div className="col-xxl-6 col-xl-8">
                                    <h3 className="text-primary">
                                        Step 2
                                    </h3>
                                    <h5 className="card-title mb-4">
                                        Enter your billing details
                                    </h5>
                                    <form>
                                        <div className="row gx-3">
                                            <div className="mb-3 col-md-6">
                                                <label className="small mb-1" for="inputBillingName">
                                                    Name on card
                                                </label>
                                                <input className="form-control" id="inputBillingName" type="text" value="Valerie Luna" />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label className="small mb-1" for="inputBillingCCNumber">
                                                    Card number
                                                </label>
                                                <input className="form-control" id="inputBillingCCNumber" type="text" value="4444 3333 2222 1111" />
                                            </div>
                                        </div>
                                        <div className="row gx-3">
                                            <div className="col-md-4 mb-4 mb-md-0">
                                                <label className="small mb-1" for="inputOrgName">
                                                    Card expiry month
                                                </label>
                                                <input className="form-control" id="inputOrgName" type="text" value="06" />
                                            </div>
                                            <div className="col-md-4 mb-4 mb-md-0">
                                                <label className="small mb-1" for="inputLocation">
                                                    Card expiry year
                                                </label>
                                                <input className="form-control" id="inputLocation" type="text" value="2024" />
                                            </div>
                                            <div className="col-md-4 mb-0">
                                                <label className="small mb-1" for="inputLocation">
                                                    CVV Number
                                                </label>
                                                <input className="form-control" id="inputLocation" type="password" value="111" />
                                            </div>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="d-flex justify-content-between">
                                            <button className="btn btn-light" type="button">
                                                Previous
                                            </button>
                                            <button className="btn btn-primary" type="button">
                                                Next
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div aria-labelledby="wizard3-tab" className="tab-pane py-5 py-xl-10 fade" id="wizard3" role="tabpanel">
                            <div className="row justify-content-center">
                                <div className="col-xxl-6 col-xl-8">
                                    <h3 className="text-primary">
                                        Step 3
                                    </h3>
                                    <h5 className="card-title mb-4">
                                        Choose when you want to receive email notifications
                                    </h5>
                                    <form>
                                        <div className="form-check mb-2">
                                            <input checked="" className="form-check-input" id="checkAccountChanges" type="checkbox" />
                                            <label className="form-check-label" for="checkAccountChanges">
                                                Changes made to your account
                                            </label>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input checked="" className="form-check-input" id="checkAccountGroups" type="checkbox" />
                                            <label className="form-check-label" for="checkAccountGroups">
                                                Changes are made to groups you're part of
                                            </label>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input checked="" className="form-check-input" id="checkProductUpdates" type="checkbox" />
                                            <label className="form-check-label" for="checkProductUpdates">
                                                Product updates for products you've purchased or starred
                                            </label>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input checked="" className="form-check-input" id="checkProductNew" type="checkbox" />
                                            <label className="form-check-label" for="checkProductNew">
                                                Information on new products and services
                                            </label>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" id="checkPromotional" type="checkbox" />
                                            <label className="form-check-label" for="checkPromotional">
                                                Marketing and promotional offers
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input checked="" className="form-check-input" disabled="" id="checkSecurity" type="checkbox" />
                                            <label className="form-check-label" for="checkSecurity">
                                                Security alerts
                                            </label>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="d-flex justify-content-between">
                                            <button className="btn btn-light" type="button">
                                                Previous
                                            </button>
                                            <button className="btn btn-primary" type="button">
                                                Next
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div aria-labelledby="wizard4-tab" className="tab-pane py-5 py-xl-10 fade" id="wizard4" role="tabpanel">
                            <div className="row justify-content-center">
                                <div className="col-xxl-6 col-xl-8">
                                    <h3 className="text-primary">
                                        Step 4
                                    </h3>
                                    <h5 className="card-title mb-4">
                                        Review the following information and submit
                                    </h5>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>
                                                Username:
                                            </em>
                                        </div>
                                        <div className="col">
                                            username
                                        </div>
                                    </div>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>
                                                Name:
                                            </em>
                                        </div>
                                        <div className="col">
                                            Valerie Luna
                                        </div>
                                    </div>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>
                                                Organization Name:
                                            </em>
                                        </div>
                                        <div className="col">
                                            Start Bootstrap
                                        </div>
                                    </div>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>
                                                Location:
                                            </em>
                                        </div>
                                        <div className="col">
                                            San Francisco, CA
                                        </div>
                                    </div>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>
                                                Email Address:
                                            </em>
                                        </div>
                                        <div className="col">
                                            <a className="__cf_email__" data-cfemail="f09e919d95b09588919d809c95de939f9d" href="/cdn-cgi/l/email-protection">
                                                [email protected]
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>
                                                Phone Number:
                                            </em>
                                        </div>
                                        <div className="col">
                                            555-123-4567
                                        </div>
                                    </div>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>
                                                Birthday:
                                            </em>
                                        </div>
                                        <div className="col">
                                            06/10/1988
                                        </div>
                                    </div>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>
                                                Credit Card Number:
                                            </em>
                                        </div>
                                        <div className="col">
                                            **** **** **** 1111
                                        </div>
                                    </div>
                                    <div className="row small text-muted">
                                        <div className="col-sm-3 text-truncate">
                                            <em>
                                                Credit Card Expiration:
                                            </em>
                                        </div>
                                        <div className="col">
                                            06/2024
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-light" type="button">
                                            Previous
                                        </button>
                                        <button className="btn btn-primary" type="button">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
