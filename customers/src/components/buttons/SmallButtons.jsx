import { Link } from "react-router-dom"

export const SmallButtons = ({config_buttons}) => {

    return (
        <>
            {config_buttons.map((button, index) => (
                <Link key={`F9stCttL_${index}`} to={button.url} className={`btn ${button.class} btn-sm`} style={{cursor: "pointer"}}>
                    <span className={button.icon}></span>
                </Link>)
            )}
        </>
    )
}
