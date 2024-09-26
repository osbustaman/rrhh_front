import { useLocation } from 'react-router-dom';

const useMenuMiddleware = () => {
    const location = useLocation();
    const path = location.pathname;

    const pathMappings = {

        '/home/profile': { item: 'user', subItem: 'data_user' },

        '/home/lista-empresas': { item: 'ver_empresas', subItem: 'lista_empresas' },
        '/home/editar-empresa': { item: 'ver_empresas', subItem: 'lista_empresas' },
        '/home/agregar-sucursal': { item: 'ver_empresas', subItem: 'lista_empresas' },
        '/home/editar-sucursal': { item: 'ver_empresas', subItem: 'lista_empresas' },
        '/home/agregar-centro-costo': { item: 'ver_empresas', subItem: 'lista_empresas' },
        '/home/editar-centro-costo': { item: 'ver_empresas', subItem: 'lista_empresas' },
        '/home/agregar-entidades-asociadas': { item: 'ver_empresas', subItem: 'lista_empresas' },
        '/home/editar-entidades-asociadas': { item: 'ver_empresas', subItem: 'lista_empresas' },

        '/home/agregar-empresa': { item: 'ver_empresas', subItem: 'agregar_empresa' },

        '/home/lista-areas': { item: 'ver_empresas', subItem: 'areas' },
        '/home/agregar-area': { item: 'ver_empresas', subItem: 'areas' },
        '/home/editar-area': { item: 'ver_empresas', subItem: 'areas' },
        '/home/agregar-departamento': { item: 'ver_empresas', subItem: 'areas' },
        '/home/editar-departamento': { item: 'ver_empresas', subItem: 'areas' },
        '/home/editar-cargo': { item: 'ver_empresas', subItem: 'areas' },


        '/home/listado-colaboradores': { item: 'employees', subItem: 'list_employees' },
        '/home/agregar-colaborador': { item: 'employees', subItem: 'agregar_colaborador' },
        // Agrega el resto de las condiciones aquí...
    };

    const { item = '', subItem = '' } = Object.keys(pathMappings).find(key => path.includes(key)) 
        ? pathMappings[Object.keys(pathMappings).find(key => path.includes(key))] 
        : {};

    localStorage.setItem('item', item);
    localStorage.setItem('sub-item', subItem);

    // Guarda los valores en el estado global o contexto
    return null;  // Este hook no retorna nada ya que solo ejecuta efectos
};

export default useMenuMiddleware;