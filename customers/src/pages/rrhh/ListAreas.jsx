import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../providers/AppProvider';
import { TableDinamyc } from '../../components/datatable/TableDinamyc';
import { SmallButtons } from "../../components/buttons/SmallButtons";
import { useFech } from '../../hooks/useFech';

export const ListAreas = () => {

    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);
    const [dataTable, setDataTable] = useState(false);

    const dict_bread_crumb = [
        { "bread": "empresa" },
        { "bread": "ver areas" }
    ];

    const dict_title = { "tittle": "Empresa: [Nombre Empresa]" };

    const buttons_menu = [
        { 
            "label" : "Acciones",
            "list_items": [
                {
                    "label": "Agregar Área",
                    "url": `/home/agregar-area`,
                }
            ]
        }
    ];

    const get_data_table = async () => {
        const { getDataTable } = useFech({ url: 'list-areas' });
        const { error, status } = await getDataTable();

        console.log(status)

        if (error) {

            $.alert({
                title: 'Alerta!',
                content: error,
            });
            setDataTable([]);
        }else{

            const data_companies = []

            status.map((item, index) => {
                data_companies.push({
                    id: item.ar_id,
                    nombre_area: item.ar_name,
                    empresa: item.company_name,
                    acciones: <SmallButtons key={index} config_buttons={[
                        {
                            "class": "btn btn-green btn-icon",
                            "icon": "fa fa-pencil",
                            "label": "Editar",
                            "url": `/home/editar-area/${item.ar_id}`,
                            "id": ``, 
                            "def": ``
                        },
                        {
                            "class": "btn btn-red btn-icon",
                            "icon": "fa fa-trash",
                            "label": "Eliminar",
                            "url": '#',
                            "id": ``,   
                            "def": () => delete_company(item.ar_id)
                        }
                    ]} />
                })
            });

            setDataTable(data_companies);   
        }
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
        const title_table = 'Listado de Áreas';
        return (
            <>
                <TableDinamyc data_in_table={data_table} config_table={config_table} title={title_table}/>
            </>
        )
    }else{
        console.log('...')
    }
}
