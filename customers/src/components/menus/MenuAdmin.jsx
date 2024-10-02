import './style_menu.css';
import { MenuRRHH } from './MenuRRHH';
import { MenuJefatura } from './MenuJefatura';
import { MenuCollaborators } from './MenuCollaborators';

export const MenuAdmin = () => {
    return (
        <>
            <MenuRRHH />
            <MenuJefatura />
            <MenuCollaborators />
        </>
    );
}
