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

    const { input_search, input_button_group, buttons_list, columns, data } = config_table;

    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const inputSearch = <InputTable search_input={input_search} input_button_group={input_button_group} buttons_list={buttons_list}/>;
    
    return (
		<DataTable 
            columns={columns} 
            data={rows} 
            progressPending={pending} 
            actions={[inputSearch]}
            pagination
            //selectableRows
            dense />
	);
}
