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


            <div class="card">
                <div class="card-header border-bottom">

                    <div class="nav nav-pills nav-justified flex-column flex-xl-row nav-wizard" id="cardTab" role="tablist">

                        <a aria-controls="wizard1" aria-selected="true" class="nav-item nav-link active" data-bs-toggle="tab" href="#wizard1" id="wizard1-tab" role="tab">
                            <div class="wizard-step-icon">
                                1
                            </div>
                            <div class="wizard-step-text">
                                <div class="wizard-step-text-name">
                                    Datos Personales
                                </div>
                                <div class="wizard-step-text-details">
                                </div>
                            </div>
                        </a>

                        <a aria-controls="wizard2" aria-selected="true" class="nav-item nav-link" data-bs-toggle="tab" href="#wizard2" id="wizard2-tab" role="tab">
                            <div class="wizard-step-icon">
                                2
                            </div>
                            <div class="wizard-step-text">
                                <div class="wizard-step-text-name">
                                    Previsión
                                </div>
                                <div class="wizard-step-text-details">
                                </div>
                            </div>
                        </a>

                        <a aria-controls="wizard3" aria-selected="true" class="nav-item nav-link" data-bs-toggle="tab" href="#wizard3" id="wizard3-tab" role="tab">
                            <div class="wizard-step-icon">
                                3
                            </div>
                            <div class="wizard-step-text">
                                <div class="wizard-step-text-name">
                                    Datos para remuneración
                                </div>
                                <div class="wizard-step-text-details">
                                </div>
                            </div>
                        </a>

                        <a aria-controls="wizard4" aria-selected="true" class="nav-item nav-link" data-bs-toggle="tab" href="#wizard4" id="wizard4-tab" role="tab">
                            <div class="wizard-step-icon">
                                4
                            </div>
                            <div class="wizard-step-text">
                                <div class="wizard-step-text-name">
                                    Grupo Familiar
                                </div>
                                <div class="wizard-step-text-details">
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="card-body">
                    <div class="tab-content" id="cardTabContent">

                        <div aria-labelledby="wizard1-tab" class="tab-pane py-5 py-xl-10 fade show active" id="wizard1" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-xxl-6 col-xl-8">
                                    <h3 class="text-primary">
                                        Step 1
                                    </h3>
                                    <h5 class="card-title mb-4">
                                        Enter your account information
                                    </h5>
                                    <form>
                                        <div class="mb-3">
                                            <label class="small mb-1" for="inputUsername">
                                                Username (how your name will appear to other users on the site)
                                            </label>
                                            <input class="form-control" id="inputUsername" placeholder="Enter your username" type="text" value="username" />
                                        </div>
                                        <div class="row gx-3">
                                            <div class="mb-3 col-md-6">
                                                <label class="small mb-1" for="inputFirstName">
                                                    First name
                                                </label>
                                                <input class="form-control" id="inputFirstName" placeholder="Enter your first name" type="text" value="Valerie" />
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label class="small mb-1" for="inputLastName">
                                                    Last name
                                                </label>
                                                <input class="form-control" id="inputLastName" placeholder="Enter your last name" type="text" value="Luna" />
                                            </div>
                                        </div>
                                        <div class="row gx-3">
                                            <div class="mb-3 col-md-6">
                                                <label class="small mb-1" for="inputOrgName">
                                                    Organization name
                                                </label>
                                                <input class="form-control" id="inputOrgName" placeholder="Enter your organization name" type="text" value="Start Bootstrap" />
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label class="small mb-1" for="inputLocation">
                                                    Location
                                                </label>
                                                <input class="form-control" id="inputLocation" type="text" value="San Francisco, CA" />
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label class="small mb-1" for="inputEmailAddress">
                                                Email address
                                            </label>
                                            <input class="form-control" id="inputEmailAddress" placeholder="Enter your email address" type="email" value="name@example.com" />
                                        </div>
                                        <div class="row gx-3">
                                            <div class="col-md-6 mb-md-0">
                                                <label class="small mb-1" for="inputPhone">
                                                    Phone number
                                                </label>
                                                <input class="form-control" id="inputPhone" placeholder="Enter your phone number" type="tel" value="555-123-4567" />
                                            </div>
                                            <div class="col-md-6 mb-0">
                                                <label class="small mb-1" for="inputBirthday">
                                                    Birthday
                                                </label>
                                                <input class="form-control" id="inputBirthday" name="birthday" placeholder="Enter your birthday" type="text" value="06/10/1988" />
                                            </div>
                                        </div>
                                        <hr class="my-4" />
                                        <div class="d-flex justify-content-between">
                                            <button class="btn btn-light disabled" disabled="" type="button">
                                                Previous
                                            </button>
                                            <button class="btn btn-primary" type="button">
                                                Next
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div aria-labelledby="wizard2-tab" class="tab-pane py-5 py-xl-10 fade" id="wizard2" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-xxl-6 col-xl-8">
                                    <h3 class="text-primary">
                                        Step 2
                                    </h3>
                                    <h5 class="card-title mb-4">
                                        Enter your billing details
                                    </h5>
                                    <form>
                                        <div class="row gx-3">
                                            <div class="mb-3 col-md-6">
                                                <label class="small mb-1" for="inputBillingName">
                                                    Name on card
                                                </label>
                                                <input class="form-control" id="inputBillingName" type="text" value="Valerie Luna" />
                                            </div>
                                            <div class="mb-3 col-md-6">
                                                <label class="small mb-1" for="inputBillingCCNumber">
                                                    Card number
                                                </label>
                                                <input class="form-control" id="inputBillingCCNumber" type="text" value="4444 3333 2222 1111" />
                                            </div>
                                        </div>
                                        <div class="row gx-3">
                                            <div class="col-md-4 mb-4 mb-md-0">
                                                <label class="small mb-1" for="inputOrgName">
                                                    Card expiry month
                                                </label>
                                                <input class="form-control" id="inputOrgName" type="text" value="06" />
                                            </div>
                                            <div class="col-md-4 mb-4 mb-md-0">
                                                <label class="small mb-1" for="inputLocation">
                                                    Card expiry year
                                                </label>
                                                <input class="form-control" id="inputLocation" type="text" value="2024" />
                                            </div>
                                            <div class="col-md-4 mb-0">
                                                <label class="small mb-1" for="inputLocation">
                                                    CVV Number
                                                </label>
                                                <input class="form-control" id="inputLocation" type="password" value="111" />
                                            </div>
                                        </div>
                                        <hr class="my-4" />
                                        <div class="d-flex justify-content-between">
                                            <button class="btn btn-light" type="button">
                                                Previous
                                            </button>
                                            <button class="btn btn-primary" type="button">
                                                Next
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div aria-labelledby="wizard3-tab" class="tab-pane py-5 py-xl-10 fade" id="wizard3" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-xxl-6 col-xl-8">
                                    <h3 class="text-primary">
                                        Step 3
                                    </h3>
                                    <h5 class="card-title mb-4">
                                        Choose when you want to receive email notifications
                                    </h5>
                                    <form>
                                        <div class="form-check mb-2">
                                            <input checked="" class="form-check-input" id="checkAccountChanges" type="checkbox" />
                                            <label class="form-check-label" for="checkAccountChanges">
                                                Changes made to your account
                                            </label>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input checked="" class="form-check-input" id="checkAccountGroups" type="checkbox" />
                                            <label class="form-check-label" for="checkAccountGroups">
                                                Changes are made to groups you're part of
                                            </label>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input checked="" class="form-check-input" id="checkProductUpdates" type="checkbox" />
                                            <label class="form-check-label" for="checkProductUpdates">
                                                Product updates for products you've purchased or starred
                                            </label>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input checked="" class="form-check-input" id="checkProductNew" type="checkbox" />
                                            <label class="form-check-label" for="checkProductNew">
                                                Information on new products and services
                                            </label>
                                        </div>
                                        <div class="form-check mb-2">
                                            <input class="form-check-input" id="checkPromotional" type="checkbox" />
                                            <label class="form-check-label" for="checkPromotional">
                                                Marketing and promotional offers
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input checked="" class="form-check-input" disabled="" id="checkSecurity" type="checkbox" />
                                            <label class="form-check-label" for="checkSecurity">
                                                Security alerts
                                            </label>
                                        </div>
                                        <hr class="my-4" />
                                        <div class="d-flex justify-content-between">
                                            <button class="btn btn-light" type="button">
                                                Previous
                                            </button>
                                            <button class="btn btn-primary" type="button">
                                                Next
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div aria-labelledby="wizard4-tab" class="tab-pane py-5 py-xl-10 fade" id="wizard4" role="tabpanel">
                            <div class="row justify-content-center">
                                <div class="col-xxl-6 col-xl-8">
                                    <h3 class="text-primary">
                                        Step 4
                                    </h3>
                                    <h5 class="card-title mb-4">
                                        Review the following information and submit
                                    </h5>
                                    <div class="row small text-muted">
                                        <div class="col-sm-3 text-truncate">
                                            <em>
                                                Username:
                                            </em>
                                        </div>
                                        <div class="col">
                                            username
                                        </div>
                                    </div>
                                    <div class="row small text-muted">
                                        <div class="col-sm-3 text-truncate">
                                            <em>
                                                Name:
                                            </em>
                                        </div>
                                        <div class="col">
                                            Valerie Luna
                                        </div>
                                    </div>
                                    <div class="row small text-muted">
                                        <div class="col-sm-3 text-truncate">
                                            <em>
                                                Organization Name:
                                            </em>
                                        </div>
                                        <div class="col">
                                            Start Bootstrap
                                        </div>
                                    </div>
                                    <div class="row small text-muted">
                                        <div class="col-sm-3 text-truncate">
                                            <em>
                                                Location:
                                            </em>
                                        </div>
                                        <div class="col">
                                            San Francisco, CA
                                        </div>
                                    </div>
                                    <div class="row small text-muted">
                                        <div class="col-sm-3 text-truncate">
                                            <em>
                                                Email Address:
                                            </em>
                                        </div>
                                        <div class="col">
                                            <a class="__cf_email__" data-cfemail="f09e919d95b09588919d809c95de939f9d" href="/cdn-cgi/l/email-protection">
                                                [email protected]
                                            </a>
                                        </div>
                                    </div>
                                    <div class="row small text-muted">
                                        <div class="col-sm-3 text-truncate">
                                            <em>
                                                Phone Number:
                                            </em>
                                        </div>
                                        <div class="col">
                                            555-123-4567
                                        </div>
                                    </div>
                                    <div class="row small text-muted">
                                        <div class="col-sm-3 text-truncate">
                                            <em>
                                                Birthday:
                                            </em>
                                        </div>
                                        <div class="col">
                                            06/10/1988
                                        </div>
                                    </div>
                                    <div class="row small text-muted">
                                        <div class="col-sm-3 text-truncate">
                                            <em>
                                                Credit Card Number:
                                            </em>
                                        </div>
                                        <div class="col">
                                            **** **** **** 1111
                                        </div>
                                    </div>
                                    <div class="row small text-muted">
                                        <div class="col-sm-3 text-truncate">
                                            <em>
                                                Credit Card Expiration:
                                            </em>
                                        </div>
                                        <div class="col">
                                            06/2024
                                        </div>
                                    </div>
                                    <hr class="my-4" />
                                    <div class="d-flex justify-content-between">
                                        <button class="btn btn-light" type="button">
                                            Previous
                                        </button>
                                        <button class="btn btn-primary" type="button">
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
