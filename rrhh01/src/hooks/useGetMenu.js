// Desc: Hooks para obtener el menu
import { Link } from "react-router-dom";

export const useGetMenu = ({ type_client, profile_user }) => {

    const getMenu = (profile_user) => {

        console.log("profile_user: ", profile_user);

        if(type_client === 'admin') {
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
                            "url": "/home/dashboard"
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
                            "url": "/home/list-customers"
                        },{
                            "id":"list-customer",
                            "text": "Otros",
                            "url": "#"
                        },
                    ]
                }
            ]
        } else if(type_client === 'client') {
            
        }


    }

    return getMenu()
}
