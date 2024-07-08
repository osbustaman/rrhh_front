export const AddCustomer = () => {
    const { handleBreadcrumbUpdate } = useOutletContext();
    const { handleTitle } = useOutletContext();
    const { handleBtn } = useOutletContext();
    
    const dict_bread_crumb = [
        { "bread": "clientes" },
        { "bread": "nuevo cliente" }
    ];
    
    const dict_title = { "tittle": "Agregar nuevo cliente" };
    
    handleBreadcrumbUpdate(dict_bread_crumb);
    handleTitle(dict_title);
    handleBtn([]);
    
    return (
        <div><h3>Fixed Sidebar <small> Just add className <strong>menu_fixed</strong></small></h3></div>
    )
}