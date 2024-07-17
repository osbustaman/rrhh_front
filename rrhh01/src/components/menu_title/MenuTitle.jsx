import { Link } from "react-router-dom";

export const MenuTitle = ({ list_buttons }) => {

    const renderInput = (button) => {

        switch (button.action_params) {
            case "modal":
                return (
                    <>
                        <a href={button.action} className="btn btn-app" data-toggle='modal' data-target='.bs-example-modal-lg'> 
                            <i className={button.icon}></i> {button.label}
                        </a>
                        {button.extra}
                    </>
                );
            
            default:
                return (
                    <Link to={button.action} className="btn btn-app"><i className={button.icon}></i> {button.label}</Link>
                );
            }
    }

    return (
        <>
            <ul className="nav navbar-right panel_toolbox">

                {list_buttons.map((button, index) => (
                    <li key={`v4JiIbQl_${index}`}>
                        {renderInput(button)}
                    </li>
                ))}

            </ul>
        </>
    )
}
