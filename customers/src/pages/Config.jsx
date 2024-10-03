import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFech } from '../hooks/useFech';

export const Config = ({data}) => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        $.confirm({
            title: 'Confirmación!',
            content: '¿Está seguro de cerrar la sesión?',
            buttons: {
                confirmar: async function () {
                    const { postDataApi } = useFech({ url: `logout` });
                    const { error, status } = await postDataApi({});
                    if (!error) {
                        console.error('Error al cerrar sesión:', error);
                    } else {
                        localStorage.clear();
                        navigate(`/`);
                    }
                },
                cancelar: function () {
                }
            }
        });
    };

    return (
        <>
            <li className="nav-item dropdown no-caret dropdown-user me-3 me-lg-4">
                <a aria-expanded="false" aria-haspopup="true" className="btn btn-icon btn-transparent-dark dropdown-toggle"
                    data-bs-toggle="dropdown" href="#" id="navbarDropdownUserImage" role="button">
                    <img className="img-fluid" src="https://lokilabs.s3.amazonaws.com/219983.png" />
                </a>
                <div aria-labelledby="navbarDropdownUserImage"
                    className="dropdown-menu dropdown-menu-end border-0 shadow animated--fade-in-up">
                    <h6 className="dropdown-header d-flex align-items-center">
                        <img className="dropdown-user-img" src="https://lokilabs.s3.amazonaws.com/219983.png" />
                        <div className="dropdown-user-details">
                            <div className="dropdown-user-details-name">
                                {data.full_name}
                            </div>
                            <div className="dropdown-user-details-email">
                                {data.email}
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
                        Listado empresas
                    </a>


                    <Link className='dropdown-item' onClick={handleLogout}> 
                        <div className="dropdown-item-icon">
                            <i data-feather="log-out">
                            </i>
                        </div>
                        Cerrar sesión
                    </Link>

                </div>
            </li>
        </>
    )
}
