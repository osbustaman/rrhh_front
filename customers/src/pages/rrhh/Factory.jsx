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

    const get_data_table = async () => {
        const { getDataTable } = useFech({ url: 'list-companies' });
        const { error, status } = await getDataTable();

        const data_companies = []

        status.map((item, index) => {
            data_companies.push({
                id: item.com_id,
                nombre_empresa: item.com_name_company,
                rut_empresa: item.com_rut,
                empresa_ingresada: item.created.split('T')[0],
                acciones: <SmallButtons key={index} config_buttons={[
                    {
                        "class": "btn btn-green btn-icon",
                        "icon": "fa fa-pencil",
                        "label": "Editar",
                        "url": `/home/editar-empresa/${item.com_id}`,
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
            })
        });

        setDataTable(data_companies);
    }

    useEffect(() => {
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(buttons_menu);
        get_data_table();
    }, []);

    const data = dataTable

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
