import React, { useEffect, useState, useContext, useCallback, useMemo } from 'react';
import { AppContext } from '../../../providers/AppProvider';

const dict_bread_crumb = [
    { "bread": "empresa" },
    { "bread": "ver colaboradores" }
];

const dict_title = { "tittle": "<i class='fa-solid fa-users'></i> Listados de colaboradores" };

const buttons_menu = [];

export const ListUsers = () => {

    const { updateBreadcrumbs, updateTitulo, updateButtons } = useContext(AppContext);


    useEffect(() => {
        updateBreadcrumbs(dict_bread_crumb);
        updateTitulo(dict_title.tittle);
        updateButtons(buttons_menu);
    }, [updateBreadcrumbs, updateTitulo, updateButtons]);

    return (
        <>
        </>
    );
}
