import DataTable from "react-data-table-component"
import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../providers/AppProvider';
import { TableDinamyc } from '../../components/datatable/TableDinamyc';
import { SmallButtons } from "../../components/buttons/SmallButtons";
import { useFechApi } from '../../hooks/useFechApi';

export const ListCustomer = () => {

    const host_url = import.meta.env.VITE_API_URL;

    const { getDataApi } = useFechApi();
    const [data, setData] = useState([]);
    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);

    const dict_bread_crumb = [
        { "bread": "clientes" },
        { "bread": "lista clientes" }
    ];

    const dict_title = { "tittle": "Lista de clientes" };

    const list_buttons = [
        {
            "icon": "fa fa-plus-circle",
            "label": "Agregar cliente",
            "action": false,
            "def": "",
            "action_params": "",
            "url": "/home/add-customer",
            }
    ];
    
    const url = `${host_url}/listado-clientes`;
    
    const showData = async () => {
        const customers = await getDataApi(url);
        const list_data = []

        customers.map((customer, index) => {
            list_data.push({
                id: customer.cus_id,
                nombre: customer.cus_name,
                rut: customer.cus_rut ? customer.cus_rut : 'No tiene',
                base_datos: customer.cus_db ? customer.cus_db : 'No tiene',
                fecha_creacion: customer.cus_created_at ? customer.cus_created_at : 'No tiene',
                cliente_activo: customer.cus_active ? 'Activo' : 'Inactivo',
                acciones: <SmallButtons key={index + 1} config_buttons={[
                    {
                        "class": "btn btn-info",
                        "icon": "fa fa-pencil",
                        "label": "Editar",
                        "url": `/home/edit-customer/${customer.cus_id}`,
                        "id": `edit-${customer.cus_id}`
                    },
                    {
                        "class": "btn btn-danger",
                        "icon": "fa fa-trash",
                        "label": "Eliminar",
                        "url": `/home/edit-customer/${customer.cus_id}`,
                        "id": `delete-${customer.cus_id}`
                    }
                ]} />
            })
        })

        setData(list_data)
    }

    useEffect(() => {
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(list_buttons);
        showData()
    }, [])


    if(data.length > 0){
        const data_table = data;
        const config_table = {
            loading: true,
            search_input: true,
        };
        return (
            <>
                <TableDinamyc data_in_table={data_table} config_table={config_table} />
            </>
        )
    }else{
        console.log('...')
    }
}
