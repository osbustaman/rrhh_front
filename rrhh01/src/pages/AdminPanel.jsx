import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

import { MenuAdmin } from "../components/MenuAdmin";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { Title } from "../components/Title";

import '../static/style.css'

export const PanelControl = () => {

  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [title, setTitle] = useState([]);

  const handleBreadcrumbUpdate = (newBreadcrumbs) => {
    setBreadcrumbs(newBreadcrumbs);
  };

  const handleTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <>
    <div className="container body">
      <div className="main_container">
        <div className="col-md-3 left_col menu_fixed">
          <div className="left_col scroll-view">
            
            
            <div className="navbar nav_title nav_title_2">
              <a href="#" className="site_title"><i className="fa fa-paw"></i> <span>Gentelella Alela!</span></a>
            </div>

            <div className="clearfix"></div>


            <div className="profile clearfix">
              <div className="profile_pic">
                <img src="images/img.jpg" alt="..." className="img-circle profile_img"></img>
              </div>
              <div className="profile_info">
                <span>Welcome,</span>
                <h2>John Doe</h2>
              </div>
            </div>


            <br />

            { <MenuAdmin />}

            <div className="sidebar-footer hidden-small">
              <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
              </a>
              <a data-toggle="tooltip" data-placement="top" title="Logout" href="#">
                <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
              </a>
            </div>

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
                    <img src="images/img.jpg" alt=""></img>John Doe
                  </a>
                  <div className="dropdown-menu dropdown-usermenu pull-right" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#"> Profile</a>
                    <a className="dropdown-item" href="#">
                      <span className="badge bg-red pull-right">50%</span>
                      <span>Settings</span>
                    </a>
                    <a className="dropdown-item" href="#">Help</a>
                    <a className="dropdown-item" href="#"><i className="fa fa-sign-out pull-right"></i> Log Out</a>
                  </div>
                </li>

                <li role="presentation" className="nav-item dropdown open">
                  <a href="#" className="dropdown-toggle info-number" id="navbarDropdown1" data-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-envelope-o"></i>
                    <span className="badge bg-green">6</span>
                  </a>
                  <ul className="dropdown-menu list-unstyled msg_list" role="menu" aria-labelledby="navbarDropdown1">
                    <li className="nav-item">
                      <a className="dropdown-item">
                        <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span className="time">3 mins ago</span>
                        </span>
                        <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item">
                        <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span className="time">3 mins ago</span>
                        </span>
                        <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item">
                        <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span className="time">3 mins ago</span>
                        </span>
                        <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item">
                        <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span className="time">3 mins ago</span>
                        </span>
                        <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <div className="text-center">
                        <a className="dropdown-item">
                          <strong>See All Alerts</strong>
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="right_col right_col_2" role="main">


        <div className="">
                <div className="page-title">
                    <div className="title_left">
                      <BreadCrumbs breadcrumbs={breadcrumbs} />
                    </div>

                    {/* <div className="title_right">
                        <div className="col-md-5 col-sm-5   form-group pull-right top_search">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search for..."></input>
                                <span className="input-group-btn">
                                    <button className="btn btn-secondary" type="button">Go!</button>
                                </span>
                            </div>
                        </div>
                    </div> */}

                    <div className="clearfix"></div>


                    <div className="row">
                        <div className="col-md-12">
                            <div className="x_panel">
                                <div className="x_title">
                                  <Title title={title} />
                                    {/* <ul className="nav navbar-right panel_toolbox">
                                        <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Settings 1</a>
                                                <a className="dropdown-item" href="#">Settings 2</a>
                                            </div>
                                        </li>
                                        <li><a className="close-link"><i className="fa fa-close"></i></a>
                                        </li>
                                    </ul> */}
                                    <div className="clearfix"></div>
                                </div>
                                <div className="x_content">
                                  <Outlet context={{ handleBreadcrumbUpdate, handleTitle }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
          
        </div>

        <footer>
          <div className="pull-right">
            Gentelella - Bootstrap Admin Template by <a href="#">Colorlib</a>
          </div>
          <div className="clearfix"></div>
        </footer>

      </div>
      </div>
    </>
  );

  
}
