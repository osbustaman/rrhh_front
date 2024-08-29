import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../providers/AppProvider';
import { TableDinamyc } from '../../components/datatable/TableDinamyc';
import { SmallButtons } from "../../components/buttons/SmallButtons";
import { useFech } from '../../hooks/useFech';

export const Factory = () => {

    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);
    const [dataTable, setDataTable] = useState(false);

    const dict_bread_crumb = [
        { "bread": "empresa" },
        { "bread": "ver empresas" }
    ];

    const dict_title = { "tittle": "Empresa: [Nombre Empresa]" };

    const buttons_menu = [];

    let data_table = [];

    const get_data_table = async () => {
        const { getDataTable } = useFech({ url: 'list-companies' });
        const { error, status } = await getDataTable();

        console.log(status);

        //setDataTable(response);
    }

    useEffect(() => {
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(buttons_menu);
        get_data_table();
    }, []);

    const data = [
        {
            id: 1,
            name: 'Jhon',
            name_header: 'Nombre',
            last_name: 'Doe',
            age: 25,
            email: 'mail@mail.cl',
            acciones: <SmallButtons key={1} config_buttons={[
                {
                    "class": "btn btn-green btn-icon",
                    "icon": "fa fa-pencil",
                    "label": "Editar",
                    "url": `/home/editar-empresa/1`,
                    "id": ``
                },
                {
                    "class": "btn btn-red btn-icon",
                    "icon": "fa fa-trash",
                    "label": "Eliminar",
                    "url": '#',
                    "id": ``
                }
            ]} />
        },{
            id: 2,
            name: 'Jane',
            last_name: 'Doe',
            age: 22,
            email: '',
            acciones: <SmallButtons key={2} config_buttons={[
                {
                    "class": "btn btn-green btn-icon",
                    "icon": "fa fa-pencil",
                    "label": "Editar",
                    "url": '/home/editar-empresa/2',
                    "id": ``
                },
                {
                    "class": "btn btn-red btn-icon",
                    "icon": "fa fa-trash",
                    "label": "Eliminar",
                    "url": `#`,
                    "id": ``
                }
            ]} />
        }
    ];

    if(data.length > 0){
        const data_table = data;
        const config_table = {
            loading: true,
            search_input: true,
        };
        const title_table = 'Listado de Empresas';
        return (
            <>
                <TableDinamyc data_in_table={data_table} config_table={config_table} title={title_table}/>
            </>
        )
    }else{
        console.log('...')
    }
}
