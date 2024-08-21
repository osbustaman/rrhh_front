import React from 'react';
import { Link } from "react-router-dom"

export const ListSmallButtons = ({ buttons = [] }) => {

    return (
        <div className="d-flex">
            {buttons.map((key, index) => (
                <div key={index} className="me-2">
                    <Link 
                        className={key.list_items ? "btn btn-primary dropdown-toggle"  : "btn btn-primary" } 
                        id={`dropdownFadeIn-${index}`} 
                        type="button"
                        data-bs-toggle={key.list_items ? "dropdown" : undefined} 
                        aria-haspopup={key.list_items ? "true" : undefined} 
                        aria-expanded={key.list_items ? "false" : undefined}
                        to={key.url ? key.url : '#'}
                    >
                        {key.label} <i className={key.list_items ? ''  : `${key.icon}` }  style={{ marginLeft: '10px' }}></i>
                    </Link>
                    {key.list_items && (
                        <div className="dropdown-menu animated--fade-in" aria-labelledby={`dropdownFadeIn-${index}`}>
                            {key.list_items.map((item, index) => (
                                <Link key={index} className="dropdown-item" to={item.url}> <small>{item.label}</small></Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
