import { Link } from "react-router-dom"

export const SmallButtons = ({config_buttons}) => {

    return (
        <>
            {config_buttons.map((key, value) => (
                <Link key={`F9stCttL_${key.id}`} to={key.url} className={`btn ${key.class} btn-sm`} style={{cursor: "pointer"}}>
                    <span className={key.icon}></span>
                </Link>)
            )}
        </>
    )
}
