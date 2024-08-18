import React from 'react'
import { TableDinamyc } from '../../components/datatable/TableDinamyc';
import { SmallButtons } from "../../components/buttons/SmallButtons";

export const ListBranchOffice = () => {

    //Subsidiary

    /*  
        sub_id
        sub_name
        sub_address
        commune
        region
        country
        sub_matrixhouse (es casa matris?)
     */


    const data = [
        {
            sub_id: 1,
            sub_name: 'Casa matriz',
            sub_address: 'Pasaje Coiron 16944',
            commune: 'Maipú',
            region: 'Metropolitana',
            country: 'Chile',
            sub_matrixhouse: 'Si',
            acciones: <SmallButtons key={1} config_buttons={[
                {
                    "class": "btn btn-green btn-icon",
                    "icon": "fa fa-pencil",
                    "label": "Editar",
                    "url": `#`,
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
            sub_id: 2,
            sub_name: 'Sucursal Quinta Normal',
            sub_address: 'Lourdes 1012',
            commune: 'Quinta Normal',
            region: 'Metropolitana',
            country: 'Chile',
            sub_matrixhouse: 'No',
            acciones: <SmallButtons key={2} config_buttons={[
                {
                    "class": "btn btn-green btn-icon",
                    "icon": "fa fa-pencil",
                    "label": "Editar",
                    "url": `#`,
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
        const title_table = 'Listado de Sucursales';
        return (
            <>
                <TableDinamyc data_in_table={data_table} config_table={config_table} title={title_table}/>
            </>
        )
    }else{
        console.log('...')
    }
}
