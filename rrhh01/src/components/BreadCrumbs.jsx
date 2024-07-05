import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const BreadcrumbExample = ({ dict_bread_crumb }) => {
    return (
        <Breadcrumb>
                { 
                    dict_bread_crumb.map( (bread_crumb, index) => (
                        <Breadcrumb.Item key={index}>{bread_crumb.bread}</Breadcrumb.Item>
                    ))
                }
        </Breadcrumb>
    );
}