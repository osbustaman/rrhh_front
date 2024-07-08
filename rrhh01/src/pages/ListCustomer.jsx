import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { TableDinamyc } from '../components/TableDinamyc';

export const ListCustomer = () => {
    const { handleBreadcrumbUpdate } = useOutletContext();
    const { handleTitle } = useOutletContext();

    const dict_bread_crumb = [
        { "bread": "clientes" },
        { "bread": "lista clientes" }
    ];

    const dict_title = { "tittle": "Lista de clientes" };

    useEffect(() => {
        handleBreadcrumbUpdate(dict_bread_crumb);
        handleTitle(dict_title);
        // El arreglo vacío asegura que el efecto se ejecute solo una vez
    }, []);

    const config_table = {
        input_search: true,
        input_button_group: false,
        buttons_list: [
            { 
                "class_": "Left" ,
                "type_": "/customer",
                "name_button": "Nuevo cliente",
                "icon": "fa fa-plus"
            }
        ],
        "columns": [
            {
                name: 'Title',
                selector: row => row.title,
            },
            {
                name: 'Year',
                selector: row => row.year,
            },
        ],
        "data" : [
            {
                id: 1,
                title: 'Beetlejuice',
                year: '1988',
            },
            {
                id: 2,
                title: 'Ghostbusters',
                year: '1984',
            },{
                id: 3,
                title: 'Beetlejuice',
                year: '1988',
            },
            {
                id: 4,
                title: 'Ghostbusters',
                year: '1984',
            },{
                id: 5,
                title: 'Beetlejuice',
                year: '1988',
            },
            {
                id: 6,
                title: 'Ghostbusters',
                year: '1984',
            },{
                id: 7,
                title: 'Beetlejuice',
                year: '1988',
            },
            {
                id: 8,
                title: 'Ghostbusters',
                year: '1984',
            },{
                id: 9,
                title: 'Beetlejuice',
                year: '1988',
            },
            {
                id: 10,
                title: 'Ghostbusters',
                year: '1984',
            },{
                id: 11,
                title: 'Beetlejuice',
                year: '1988',
            },
            {
                id: 12,
                title: 'Ghostbusters',
                year: '1984',
            },{
                id: 13,
                title: 'Beetlejuice',
                year: '1988',
            },
            {
                id: 14,
                title: 'Ghostbusters',
                year: '1984',
            },{
                id: 15,
                title: 'Beetlejuice',
                year: '1988',
            },
            {
                id: 16,
                title: 'Ghostbusters',
                year: '1984',
            },{
                id: 17,
                title: 'Beetlejuice',
                year: '1988',
            },
            {
                id: 18,
                title: 'Ghostbusters',
                year: '1984',
            },{
                id: 19,
                title: 'Beetlejuice',
                year: '1988',
            },
            {
                id: 20,
                title: 'Ghostbusters',
                year: '1984',
            },{
                id: 21,
                title: 'Beetlejuice',
                year: '1988',
            },
            {
                id: 22,
                title: 'Ghostbusters',
                year: '1984',
            },{
                id: 23,
                title: 'Beetlejuice',
                year: '1988',
            },
            {
                id: 24,
                title: 'Ghostbusters',
                year: '1984',
            },{
                id: 25,
                title: 'Beetlejuice',
                year: '1988',
            },
            {
                id: 26,
                title: 'Ghostbusters',
                year: '1984',
            },{
                id: 27,
                title: 'Beetlejuice',
                year: '1988',
            },
            {
                id: 28,
                title: 'Ghostbusters',
                year: '1984',
            },{
                id: 29,
                title: 'Beetlejuice',
                year: '1988',
            },{
                id: 30,
                title: 'Beetlejuice',
                year: '1988',
            }
        ]

    };

    return (
        <>
            <TableDinamyc config_table={ config_table } />
        </>
    );
};
