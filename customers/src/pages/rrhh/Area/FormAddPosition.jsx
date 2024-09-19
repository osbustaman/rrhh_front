import React, { useEffect, useState, useContext } from 'react';
import { useFormValidate } from '../../../hooks/useFormValidate';
import { Forms } from "../../../components/forms/Forms"
import { useFech } from '../../../hooks/useFech';
import { useParams, useNavigate } from 'react-router-dom';

export const FormAddPosition = () => {
    const { id_area, id_department } = useParams();
    const { validate } = useFormValidate();
    const navigate = useNavigate();
    const [formKey, setFormKey] = useState(Date.now());

    const send_form = async (form) => {
        const { error, form_data } = validate(form);
        if (error) {
            $.confirm({
                title: 'Tienes errores en los siguientes campos!',
                content: form_data,
                buttons: {
                    aceptar: function () {
                        const form_data = document.getElementById(form);
                        const formData = new FormData(form_data);
                        formData.forEach((value, key) => {
                            const input = document.getElementsByName(key);
                            input[0].classList.remove('is-invalid');
                        });
                    }
                }
            });
            return false;
        }else{
            const { postDataApi } = useFech({ url: `add-position/create/` });
            const { error, status } = await postDataApi(form_data);
            if (error) {
                $.alert(status.message);
            }else{
                const { message } = status;
                $.confirm({
                    title: 'Cargo creado correctamente!',
                    content: 'Click en continuar o en nuevo para agregar una nuevo cargo.',
                    buttons: {
                        continuar: function () {
                            navigate(`/home/editar-departamento/${id_area}/${id_department}/`);
                        },
                        nuevo: function () {
                            setFormKey(Date.now());
                        }
                    }
                });
                return false;
            }
        }
    };

    const config_form = {
        number_row: 12,
        id_form: 'form_cargo',
        position_form: 'vertical',
        def: (event) => { send_form('form_cargo'); },
        name_button: 'Guardar',
        inputs: [
            {
                label: 'Nombre  del cargo',
                placeholder: '',
                required: true,
                name: 'pos_name_position',
                type: 'text',
                value: '',
            },{
                label: 'Descripción del cargo',
                placeholder: '',
                required: true,
                name: 'post_description',
                type: 'textarea',
                value: '',
            },{
                label: '',
                required: true,
                name: 'departament',
                type: 'hidden',
                value: id_department
            }
        ],
    }

    useEffect(() => {
    }, []);

    return (
        <>
            <Forms key={formKey} config_form={config_form} />
        </>
    )
}