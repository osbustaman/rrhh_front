// Desc: Hooks para obtener el menu
import { Link } from "react-router-dom";

export const useGetMenu = ({ type_client, user_id }) => {

    const getMenu = () => {

        if(type_client === 'admin') {
            console.log('admin', user_id)
        } else if(type_client === 'client') {
            console.log('client', user_id)
        }

        return [
            {
                "id": "item_home",
                "on_clic": "home",
                "icon": "fa fa-home",
                "text": "Home",
                "id_ul": "ul_home",
                "items": [
                    {
                        "id":"dashboard",
                        "text": "Dashboard",
                        "href": "#"
                    }
                ]
            },{
                "id": "item_admin",
                "on_clic":"admin",
                "icon": "fa fa-archive",
                "text": "Elements",
                "id_ul": "ul_admin",
                "items": [
                    {
                        "id":"list-customer",
                        "text": "Lista clientes",
                        "href": "/admin-panel/list-customer"
                    },
                ]
            }
        ]
    }

    return getMenu()
}
