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

    const delete_company = async (id) => {

        // Definir la función asíncrona fuera de la confirmación
        const confirmDelete = async () => {
            const { deleteData } = useFech({ url: `delete-company/${id}/` });
            const { error, status } = await deleteData();

            if (status) {
                get_data_table(); // Actualizar la tabla después de eliminar
            } else if (error) {
                $.alert('Error al eliminar la compañía');
            }
        };


        $.confirm({
            title: 'Confirmación!',
            content: 'Esta seguro de eliminar la empresa?',
            buttons: {
                confirmar: function () {
                    confirmDelete(); // Llamar a la función asíncrona
                    get_data_table();
                },
                cancelar: function () {
                    $.alert('Canceled!');
                }
            }
        });
    }

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
                        "id": ``, 
                        "def": ``
                    },
                    {
                        "class": "btn btn-red btn-icon",
                        "icon": "fa fa-trash",
                        "label": "Eliminar",
                        "url": '#',
                        "id": ``,   
                        "def": () => delete_company(item.com_id)
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
