export const Config = () => {
    return (
        <>
                                <li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
                        <a aria-expanded="false" aria-haspopup="true" className="btn btn-icon btn-transparent-dark dropdown-toggle"
                            data-bs-toggle="dropdown" href="#" id="navbarDropdownUserImage" role="button">
                            <img className="img-fluid" src="assets/img/illustrations/profiles/profile-1.png" />
                        </a>
                        <div aria-labelledby="navbarDropdownUserImage"
                            className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up">
                            <h6 className="dropdown-header d-flex align-items-center">
                                <img className="dropdown-user-img" src="assets/img/illustrations/profiles/profile-1.png" />
                                <div className="dropdown-user-details">
                                    <div className="dropdown-user-details-name">
                                        Valerie Luna
                                    </div>
                                    <div className="dropdown-user-details-email">
                                        <a className="__cf_email__" data-cfemail="1b6d776e757a5b7a747735787476"
                                            href="/cdn-cgi/l/email-protection">
                                            [email protected]
                                        </a>
                                    </div>
                                </div>
                            </h6>
                            <div className="dropdown-divider">
                            </div>
                            <a className="dropdown-item" href="#!">
                                <div className="dropdown-item-icon">
                                    <i data-feather="settings">
                                    </i>
                                </div>
                                Account
                            </a>
                            <a className="dropdown-item" href="#!">
                                <div className="dropdown-item-icon">
                                    <i data-feather="log-out">
                                    </i>
                                </div>
                                Logout
                            </a>
                        </div>
                    </li>
        </>
    )
}
