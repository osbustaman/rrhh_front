import DataTable from "react-data-table-component"
import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../providers/AppProvider';
import { TableDinamyc } from '../../components/datatable/TableDinamyc';
import { SmallButtons } from "../../components/buttons/SmallButtons";
import { useListCustomers } from '../../hooks/useListCustomers';
import { InputTable } from '../../components/datatable/InputTable';

export const ListCustomer = () => {

    const host_url = import.meta.env.VITE_API_URL;

    const [data, setData] = useState([]);
    const [pending, setPending] = useState(true);
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
            "action": "/home/add-customer",
            "action_params": "",
            "url": "",
            }
    ];

    const url = `${host_url}/listado-clientes`;

    const showData = async () => {
        const response = await fetch(url)
        const { customers } = await response.json()
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

        const timeout = setTimeout(() => {
            setPending(false);
            }, 2000);
            return () => clearTimeout(timeout);
    }, [])

    // ******** DATA TABLE CONFIGURATION ********
    let headers_list = [];
    let columns = [];
    if(data.length > 0){
        
        headers_list = Object.keys(data[0]);
        headers_list.map((key, value) => {
            const transformString = (str) => {
                return str
                    .split('_')
                    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
                    .join(' ');
            }
    
            columns.push({
                name: transformString(key),
                selector: row => row[key],
                sortable: true
            });
        });
        
        const paginationComponentOptions = {
            rowsPerPageText: 'Filas por página',
            rangeSeparatorText: 'de',
            selectAllRowsItem: true,
            selectAllRowsItemText: 'Todos',
        };

        const inputSearch = <InputTable key="1cE5l5BV1Rx7JI1" search_input={true} input_button_group={false} buttons_list={[]}/>;

        return (
            <>
                <DataTable
                    columns={columns}
                    data={data.map(item => ({ ...item, key: item.id }))} 
                    actions={[inputSearch]}
                    progressPending={pending} 
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight="600px"
                    noHeader
                    noDataComponent="No hay datos"
                    paginationComponentOptions={paginationComponentOptions} 
                />
            </>
        )
    }else{
        console.log('...')
    }
}
