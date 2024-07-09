export const MenuTitle = ({ list_buttons }) => {

    return (
        <>
            <ul className="nav navbar-right panel_toolbox">

                {list_buttons.map((button, index) => (
                    <li key={`v4JiIbQl_${index}`}>
                        <a href={button.action} className="btn btn-app">
                            <i className={button.icon}></i> {button.label}
                        </a>
                    </li>
                ))}

            </ul>
        </>
    )
}
