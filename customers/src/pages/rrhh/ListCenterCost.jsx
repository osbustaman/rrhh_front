import React, { useEffect, useState, useContext } from 'react';
import { TableDinamyc } from '../../components/datatable/TableDinamyc';
import { SmallButtons } from "../../components/buttons/SmallButtons";
import { useFech } from '../../hooks/useFech';
import { useParams } from 'react-router-dom';

export const ListCenterCost = () => {

    const { id_customer } = useParams();

    const [dataTable, setDataTable] = useState([]);


    const delete_center_cost = async (id) => {

        // Definir la función asíncrona fuera de la confirmación
        const confirmDelete = async () => {
            const { deleteData } = useFech({ url: `delete-center-cost/${id}/` });
            const { error, status } = await deleteData();

            if (status) {
                get_data_table(); // Actualizar la tabla después de eliminar
            } else if (error) {
                $.alert('Error al eliminar el centro de costo');
            }
        };

        $.confirm({
            title: 'Confirmación!',
            content: 'Esta seguro de eliminar el centro de costo?',
            buttons: {
                confirmar: function () {
                    confirmDelete(); // Llamar a la función asíncrona
                    get_data_table();
                },
                cancelar: function () {
                }
            }
        });
    }


    const get_data_table = async () => {
        const { getDataTable } = useFech({ url: `list-center-cost/${id_customer}/` });
        const { error, status } = await getDataTable();

        const data_response = []

        status.map((item, index) => {
            data_response.push({
                id: item.cencost_id,
                nombre_centro_costo: item.cencost_name,
                acciones: <SmallButtons key={index} config_buttons={[
                    {
                        "class": "btn btn-green btn-icon",
                        "icon": "fa fa-pencil",
                        "label": "Editar",
                        "url": `/home/editar-centro-costo/${id_customer}/${item.cencost_id}/`,
                        "id": ``,
                        "def": ``
                    },
                    {
                        "class": "btn btn-red btn-icon",
                        "icon": "fa fa-trash",
                        "label": "Eliminar",
                        "url": '#',
                        "id": ``,
                        "def": () => delete_center_cost(item.cencost_id)
                    }
                ]} />
            })
        });
        setDataTable(data_response);
    }

    useEffect(() => {
        get_data_table();
    }, []);

    if(dataTable.length > 0){
        const data_table = dataTable;
        const config_table = {
            loading: true,
            search_input: true,
        };
        const title_table = 'Listado de Centros de Costos';
        return (
            <>
                <TableDinamyc data_in_table={data_table} config_table={config_table} title={title_table}/>
            </>
        )
    }else{
        console.log('...')
    }
}
