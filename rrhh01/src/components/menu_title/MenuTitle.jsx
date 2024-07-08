
import { Link } from 'react-router-dom';

export const MenuTitle = ({ list_buttons }) => {
    return (
        <>
            <ul className="nav navbar-right panel_toolbox">

                {list_buttons.map((button, index) => (
                    <li key={index}>
                        <Link to={button.path} className="btn btn-app">
                            <i className={button.icon}></i> {button.label}
                        </Link>
                    </li>
                ))}

            </ul>
        </>
    )
}
