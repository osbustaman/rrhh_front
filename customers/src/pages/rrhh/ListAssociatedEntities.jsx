import React, { useEffect, useState, useContext } from 'react';
import { TableDinamyc } from '../../components/datatable/TableDinamyc';
import { SmallButtons } from "../../components/buttons/SmallButtons";
import { useFech } from '../../hooks/useFech';
import { useParams } from 'react-router-dom';

export const ListAssociatedEntities = () => {

    const { id_customer } = useParams();

    const [dataCompany, setDataCompany] = useState([]);

    const { getDataList } = useFech({ url: `get-associated-entities/${id_customer}/` });

    const get_data_company = async () => {
        const { error, status } = await getDataList();
        setDataCompany(status);
    };

    const {
        mutual_security,
        boxes_compensation,
        com_id
    } = dataCompany;
    

    useEffect(() => {
        get_data_company();
    }, [id_customer]); // Mantén id_customer como dependencia

    const data = [
        {
            id: 1,
            mutual: mutual_security || 'No disponible',
            caja_compensacion: boxes_compensation  || 'No disponible',
            acciones: <SmallButtons key={1} config_buttons={[
                {
                    "class": "btn btn-green btn-icon",
                    "icon": "fa fa-pencil",
                    "label": "Editar",
                    "url": `/home/editar-entidades-asociadas/${id_customer}`,
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
