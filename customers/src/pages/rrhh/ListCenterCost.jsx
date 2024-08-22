import React from 'react'
import { TableDinamyc } from '../../components/datatable/TableDinamyc';
import { SmallButtons } from "../../components/buttons/SmallButtons";
import { useParams } from 'react-router-dom';

export const ListCenterCost = () => {

    const { id_customer } = useParams();

    const data = [
        {
            cencost_id: 1,
            cencost_name: 'Desarrollo',
            acciones: <SmallButtons key={1} config_buttons={[
                {
                    "class": "btn btn-green btn-icon",
                    "icon": "fa fa-pencil",
                    "label": "Editar",
                    "url": `/home/editar-centro-costo/${id_customer}/1`,
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
            cencost_id: 2,
            cencost_name: 'ventas',
            acciones: <SmallButtons key={2} config_buttons={[
                {
                    "class": "btn btn-green btn-icon",
                    "icon": "fa fa-pencil",
                    "label": "Editar",
                    "url": `/home/editar-centro-costo/${id_customer}/2`,
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
        }
    ];

    if(data.length > 0){
        const data_table = data;
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
