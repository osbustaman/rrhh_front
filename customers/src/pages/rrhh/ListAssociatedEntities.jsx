import React from 'react'
import { TableDinamyc } from '../../components/datatable/TableDinamyc';
import { SmallButtons } from "../../components/buttons/SmallButtons";
import { useParams } from 'react-router-dom';

export const ListAssociatedEntities = () => {

    const { id_customer } = useParams();

    const data = [
        {
            id: 1,
            nombre_entidad: 'ACHS',
            acciones: <SmallButtons key={1} config_buttons={[
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
            nombre_entidad: 'Caja los Andes',
            acciones: <SmallButtons key={2} config_buttons={[
                {
                    "class": "btn btn-red btn-icon",
                    "icon": "fa fa-trash",
                    "label": "Eliminar",
                    "url": '#',
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
        const title_table = 'Listado de entidades asociadas';
        return (
            <>
                <TableDinamyc data_in_table={data_table} config_table={config_table} title={title_table}/>
            </>
        )
    }else{
        console.log('...')
    }
}
