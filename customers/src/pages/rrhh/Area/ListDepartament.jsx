import React, { useEffect, useState, useContext } from 'react';
import { TableDinamyc } from '../../../components/datatable/TableDinamyc';
import { SmallButtons } from "../../../components/buttons/SmallButtons";
import { useFech } from '../../../hooks/useFech';
import { useParams } from 'react-router-dom';

export const ListDepartament = () => {

    const { id_area } = useParams();

    const [dataTable, setDataTable] = useState([]);


    const get_data_table = async () => {
        const { getDataTable } = useFech({ url: `list-departament/${id_area}/` });
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

    console.log('dataTable', dataTable);

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