import { useGetMenu } from '../hooks/useGetMenu'
import '../static/style.css'

export const MenuAdmin = () => {

    const list_menu = () => {
        const type_client = 'admin';
        const user_id = 1;
        const getGetMenu = useGetMenu({ type_client, user_id });
        return getGetMenu
    }

    const handleToggle = (item) => {
        const item_menu = `item_${item}`;
        const ul_menu = `ul_${item}`;

        const itemHome = document.getElementById(item_menu);
        itemHome.classList.toggle('active');
        const ulHome = document.getElementById(ul_menu);
        ulHome.classList.toggle('is_show');
        ulHome.style.display = ulHome.style.display === 'block' ? 'none' : 'block';
        ulHome.style.transition = 'height 10s ease-in-out';

        // Close other open items
        const openItems = document.querySelectorAll('.active');
        openItems.forEach((openItem) => {
            if (openItem.id !== item_menu) {
                openItem.classList.remove('active');
                const openUl = document.getElementById(`ul_${openItem.id.replace('item_', '')}`);
                openUl.classList.remove('is_show');
                openUl.style.display = 'none';
            }
        });
    }

    return (
        <>
            <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                <div className="menu_section">
                    <h3>General</h3>
                    <ul className="nav side-menu">

                        {list_menu().map((item) => (
                            <li key={`5W9Cyweb_${item.id}`} id={item.id}>
                                <a onClick={() => handleToggle(item.on_clic)}>
                                    <i className={item.icon}></i> {item.text} <span className="fa fa-chevron-down"></span>
                                </a>
                                <ul className="nav child_menu" id={item.id_ul}>
                                    {item.items.map((key, index) => (
                                        <li key={`V4Vgjykv_${index}_${key.id}`}><a href={key.href}>{key.text}</a></li>
                                    ))}
                                </ul>
                            </li>
                        ))}

                    </ul>
                </div>
                <div className="menu_section">
                    <h3>Live On</h3>
                    <ul className="nav side-menu">

                        <li>
                            <a>
                                <i className="fa fa-sitemap"></i> Multilevel Menu <span className="fa fa-chevron-down"></span>
                            </a>
                            <ul className="nav child_menu">
                                <li><a href="#">Level One</a></li>
                                <li>
                                    <a>Level One<span className="fa fa-chevron-down"></span></a>
                                    <ul className="nav child_menu">
                                        <li className="sub_menu"><a href="level2#">Level Two</a></li>
                                        <li><a href="#">Level Two</a></li>
                                        <li><a href="#">Level Two</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Level One</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}
