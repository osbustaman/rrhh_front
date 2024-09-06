import React, { useEffect, useState, useContext } from 'react';
import { TableDinamyc } from '../../components/datatable/TableDinamyc';
import { SmallButtons } from "../../components/buttons/SmallButtons";
import { useFech } from '../../hooks/useFech';
import { useParams } from 'react-router-dom';


export const ListBranchOffice = () => {

    const { id_customer } = useParams();

    const [dataTable, setDataTable] = useState([]);

    const get_data_table = async () => {
        const { getDataTable } = useFech({ url: `list-branch-office/${id_customer}/` });
        const { error, status } = await getDataTable();

        const data_companies = []

        status.map((item, index) => {
            data_companies.push({
                id: item.sub_id,
                nombre_sucursal: item.sub_name,
                direccion: item.sub_address,
                comuna: item.commune_name,
                region: item.region_name,
                casa_matris: item.sub_matrixhouse ? 'Si' : 'No',
                acciones: <SmallButtons key={index} config_buttons={[
                    {
                        "class": "btn btn-green btn-icon",
                        "icon": "fa fa-pencil",
                        "label": "Editar",
                        "url": `/home/editar-sucursal/${id_customer}/${item.sub_id}/`,
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
        get_data_table();
    }, []);

    if(dataTable.length > 0){
        const data_table = dataTable;
        const config_table = {
            loading: true,
            search_input: true,
        };
        const title_table = 'Listado de Sucursales';
        return (
            <>
                <TableDinamyc data_in_table={data_table} config_table={config_table} title={title_table} />
            </>
        )
    }else{
        console.log('...')
    }
}
