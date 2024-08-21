import { useLocation } from 'react-router-dom';

const useMenuMiddleware = () => {
    const location = useLocation();

    const path = location.pathname;
    let item = '';
    let subItem = '';

    if (path.includes('/home/lista-empresas')) {
        item = 'ver_empresas';
        subItem = 'lista_empresas';

    } else if (path.includes('/home/editar-empresa')) {
        item = 'ver_empresas';
        subItem = 'lista_empresas';
    
    } else if (path.includes('/home/agregar-sucursal')) {
        item = 'ver_empresas';
        subItem = 'lista_empresas';

    } else if (path.includes('/home/editar-sucursal')) {
        item = 'ver_empresas';
        subItem = 'lista_empresas';

    } else if (path.includes('/home/agregar-empresa')) {
        item = 'ver_empresas';
        subItem = 'agregar_empresa';
    }
    // Agrega el resto de las condiciones aquí...

    localStorage.setItem('item', item);
    localStorage.setItem('sub-item', subItem);

    // Guarda los valores en el estado global o contexto
    return null;  // Este hook no retorna nada ya que solo ejecuta efectos
};

export default useMenuMiddleware;
