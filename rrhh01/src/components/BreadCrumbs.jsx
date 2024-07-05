
export const BreadCrumbs = ({ breadcrumbs }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {breadcrumbs.map((crumb, index) => (
                    <li key={index} className="breadcrumb-item">{crumb.bread}</li>
                ))}
            </ol>
        </nav>
    );
}