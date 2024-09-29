import React, { useEffect, useState, useContext } from 'react';
import { InputUploadImage } from '../../../components/upload/InputUploadImage';
import { Forms } from '../../../components/forms/Forms';
import { useFormValidate } from '../../../hooks/useFormValidate';
import { useFech } from '../../../hooks/useFech';
import { useParams, useNavigate } from 'react-router-dom';

export const FormAddUser = () => {

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
            const { postDataApi } = useFech({ url: 'create-employee/' });
            const { error, status } = await postDataApi(form_data);
            if (error) {
                $.alert(status.error);
            }else{
                const { message } = status;
                console.log(status)
                $.confirm({
                    title: 'usuario creado con exito',
                    content: form_data,
                    buttons: {
                        continuar: function () {
                            navigate(`/home/editar-colaborador/${status.id}`);
                        }
                    }
                });
                return false;
            }
        }
    };

    const config_form = {
        number_row: 6,
        id_form: 'form_user',
        position_form: 'vertical',
        def: (event) => { send_form('form_user'); },
        name_button: 'Guardar',
        inputs: [
            {
                label: 'Rut',
                placeholder: '',
                required: true,
                name: 'rut',
                type: 'rut',
                value: ''
            },{
                label: 'email',
                placeholder: '',
                required: true,
                name: 'email',
                type: 'text',
                value: ''
            },{
                label: 'Nombres',
                placeholder: '',
                required: true,
                name: 'first_name',
                type: 'text',
                value: ''
            },{
                label: 'Apellidos',
                placeholder: '',
                required: true,
                name: 'last_name',
                type: 'text',
                value: ''
            }
        ],
    }

    return (
        <>
            <div className="row">
                <InputUploadImage title={'Foto colaborador'} />
                <div className="col-xl-8">
                    <div className="card mb-4">
                        <div className="card-header">
                            Datos usuario
                        </div>
                        <div className="card-body">
                            <Forms key={formKey} config_form={config_form} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
