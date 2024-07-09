
import { Link } from 'react-router-dom';

export const MenuTitle = ({ list_buttons }) => {

    const link_to = (_url_) => {
        console.log(_url_)
    }

    return (
        <>
            <ul className="nav navbar-right panel_toolbox">

                {list_buttons.map((button, index) => (
                    <li key={index}>
                        <a onClick={link_to(button.action)} className="btn btn-app">
                            <i className={button.icon}></i> {button.label}
                        </a>
                    </li>
                ))}

            </ul>
        </>
    )
}
