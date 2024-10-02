import React, { useEffect, useState, useContext } from 'react';
import { InputUploadImage } from '../../../components/upload/InputUploadImage';
import { Forms } from '../../../components/forms/Forms';
import { useFormValidate } from '../../../hooks/useFormValidate';
import { useParams } from 'react-router-dom';
import { useFech } from '../../../hooks/useFech';
import { AppContexCompany } from '../../../providers/AppProvider';

export const FormEditUser = () => {

    const { id_user } = useParams();

    const { validate } = useFormValidate();
    const { getDataTable } = useFech({ url: `get-employee/${id_user}/` });
    const [configForm, setConfigForm] = useState(null);
    const [dataUser, setDataUser] = useState([]);
    const [fullName, setFullName ] = useState(false);

    const { updateTitle } = useContext(AppContexCompany);
    
    const get_data_response = async () => {
        const { status } = await getDataTable();
        setDataUser(status);
    };

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

            const { updateDataApi } = useFech({ url: `update-employee/${id_user}/` });
            const { error, status } = await updateDataApi(form_data);

            if (error) {
                $.alert(status.message);
            }else{
                const { com_id, message } = status;
                $.alert("Usuario actualizado con éxito");
                return false;
            }
        }
    };

    useEffect(() => {
        get_data_response();
    }, [id_user]);

    useEffect(() => {
        if (Object.keys(dataUser).length > 0) {
            const {
                username,
                email,
                first_name,
                last_name
            } = dataUser;
            
            updateTitle(`${first_name} ${last_name}`);
            
            const config_form = {
                number_row: 6,
                id_form: 'form_data_user',
                position_form: 'vertical',
                def: (event) => { send_form('form_data_user'); },
                name_button: 'Editar',
                inputs: [
                    {
                        label: 'Rut',
                        placeholder: '',
                        required: true,
                        name: 'rut',
                        type: 'rut',
                        value: username
                    },{
                        label: 'email',
                        placeholder: '',
                        required: true,
                        name: 'email',
                        type: 'text',
                        value: email
                    },{
                        label: 'Nombres',
                        placeholder: '',
                        required: true,
                        name: 'first_name',
                        type: 'text',
                        value: first_name
                    },{
                        label: 'Apellidos',
                        placeholder: '',
                        required: true,
                        name: 'last_name',
                        type: 'text',
                        value: last_name
                    }, {
                        label: '',
                        required: true,
                        name: 'username',
                        type: 'hidden',
                        value: username
                    }
                ],
            }
            
            setConfigForm(config_form);
        }
    }, [dataUser]);

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
                            {configForm && <Forms config_form={configForm} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
