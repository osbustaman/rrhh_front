import { useState, useEffect, useMemo } from "react";
import DataTable from 'react-data-table-component';
import { InputTable } from './InputTable';

export const TableDinamyc = ({ config_table }) => {

    const [pending, setPending] = useState(true);
    const [rows, setRows] = useState([]);
    useEffect(() => {
        const timeout = setTimeout(() => {
        setRows(data);
        setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    const { selectable_rows, fixed_header_scroll_height, input_search, input_button_group, buttons_list, data } = config_table;

    const headers_list = Object.keys(data[0]);

    const columns = [];

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
            sortable: true,
            //grow: 2,
        });
    });

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const inputSearch = <InputTable key="1cE5l5BV1Rx7JI1" search_input={input_search} input_button_group={input_button_group} buttons_list={buttons_list}/>;

    return (
        <DataTable 
            columns={columns} 
            data={rows.map(item => ({ ...item, key: item.id }))} 
            progressPending={pending} 
            actions={[inputSearch]}
            fixedHeader
            fixedHeaderScrollHeight={fixed_header_scroll_height}
            pagination
            paginationComponentOptions={paginationComponentOptions} 
            selectableRows={selectable_rows}
            dense />
    );
}
