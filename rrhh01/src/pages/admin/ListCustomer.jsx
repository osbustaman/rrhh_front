import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../providers/AppProvider';
import { TableDinamyc } from '../../components/datatable/TableDinamyc';
import { SmallButtons } from "../../components/buttons/SmallButtons";
import { useListCustomers } from '../../hooks/useListCustomers';

export const ListCustomer = () => {
    const { getFechListCustomers } = useListCustomers();
    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);

    const [customersData, setCustomersData] = useState([]);

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

    const response_table = async () => {
        const response = await getFechListCustomers();
        let list_customers = [];
        if (response) {

            response.map((customer, index) => {
                
                list_customers.push({
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
                });
            });

            setCustomersData(list_customers);
        } else {
            $.alert({
                title: 'Error!',
                content: 'No se pudo obtener el listado de clientes!',
            });
            return;
        }

    };

    useEffect(() => {
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(list_buttons);
        response_table();
    }, []);

    const data_config_table = {
        selectable_rows: false,
        fixed_header_scroll_height: '300px',
        input_search: true,
        input_button_group: false,
        buttons_list: [],
        data: customersData
    };

    return (
        <>
            <TableDinamyc config_table={ data_config_table } />
        </>
    );
};
