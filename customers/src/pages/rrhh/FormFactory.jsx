import React, { useEffect, useState, useContext } from 'react';
import { Forms } from "../../components/forms/Forms"
import { useFormValidate } from '../../hooks/useFormValidate';
import { useFech } from '../../hooks/useFech';

export const FormFactory = () => {

    const { validate } = useFormValidate();

    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [communes, setCommunes] = useState([]);
    const [comSocialReason, setComSocialReason] = useState([]);
    
    const data_country = async () => {

        const { getDataTable } = useFech({ url: 'list-countries' });
        const { error, status } = await getDataTable();

        if (error) {
            $.alert('Error al cargar los datos de los paises');
        }

        let list_data = [];
        status.map((value) => {
            list_data.push({
                value: value.cou_id,
                label: value.cou_name
            });
        });
        setCountries(list_data);    
    }

    const data_region = async () => {

        const { getDataTable } = useFech({ url: 'list-region' });
        const { error, status } = await getDataTable();

        if (error) {
            $.alert('Error al cargar los datos de las regiones');
        }

        let list_data = [];
        status.map((value) => {
            list_data.push({
                value: value.re_id,
                label: value.re_name
            });
        });

        setRegions(list_data);   
    }

    const data_communes = async () => {

        const { getDataTable } = useFech({ url: 'list-commune' });
        const { error, status } = await getDataTable();

        if (error) {
            $.alert('Error al cargar los datos de las comunas');
        }

        let list_data = [];
        status.map((value) => {
            list_data.push({
                value: value.com_id,
                label: value.com_name
            });
        });

        setCommunes(list_data);   
    }

    const data_social_reason = async () => {

        const { getDataTable } = useFech({ url: 'list-reason-social' });
        const { error, status } = await getDataTable();

        if (error) {
            $.alert('Error al cargar los datos de la razón social');
        }

        let list_reason_social = [];
        status.map((reason_social) => {
            list_reason_social.push({
                value: reason_social.id,
                label: reason_social.name
            });
        });

        setComSocialReason(list_reason_social);   
    }

    const send_form_user = async (form) => {

        const { error, status } = validate(form);

        if (error) {
            $.confirm({
                title: 'Tienes errores en los siguientes campos!',
                content: status,
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
            console.log('enviar');
            console.log(status);

            const { postDataApi } = useFech({ url: 'create-company' });
            const response = await postDataApi(status);

        }
        

    


    };

    const clean_form_user = (id_form) => {
        setTimeout(() => {
            const form = document.getElementById(id_form);
            const formData = new FormData(form);

            formData.forEach((value, key) => {
                const input = document.getElementsByName(key);
                //input[0].value = '';
                input[0].classList.remove('is-invalid');
            });
        }, 3000);
    };

    useEffect(() => {
        data_country();
        data_region();
        data_communes();
        data_social_reason();
        
    }, []);

    const config_form = {
        number_row: 6,
        id_form: 'form_company',
        position_form: 'vertical',
        def: (event) => { send_form_user('form_company'); },
        name_button: 'Guardar',
        inputs: [
            {
                label: 'Rut de la compañia',
                placeholder: '',
                required: true,
                name: 'com_rut',
                type: 'rut',
                value: ''
            },{
                label: 'Nombre de la compañia',
                placeholder: '',
                required: true,
                name: 'com_name_company',
                type: 'text',
                value: ''
            },{
                label: 'Razón social',
                placeholder: '',
                required: true,
                name: 'com_name_counter',
                type: 'text',
                value: ''
            },{
                label: 'Es Holding',
                required: true,
                name: 'com_is_holding',
                type: 'select',
                text_default: '',
                options: [{key: 'Y', value: 'Si'}, {key: 'N', value: 'No', default: true}]
            },{
                label: 'Compañia principal?',
                required: true,
                name: 'com_id_parent_company',
                type: 'select',
                text_default: '',
                options: [{key: 'Y', value: 'Si', default: true}, {key: 'N', value: 'No'}]
            },{
                label: 'Nombre del representante',
                placeholder: '',
                required: true,
                name: 'com_representative_name',
                type: 'text',
                value: ''
            },{
                label: 'Rut del representante',
                placeholder: '',
                required: true,
                name: 'com_rut_representative',
                type: 'rut',
                value: ''
            },{
                label: 'Es estatal?',
                required: true,
                name: 'com_is_state',
                type: 'select',
                text_default: '',
                options: [{key: 'Y', value: 'Si'}, {key: 'N', value: 'No', default: true}]
            },{
                label: 'Razón social',
                required: true,
                name: 'com_social_reason',
                type: 'select_autocomplete',
                options: comSocialReason,
                text_default: '-- Seleccione --',
                value: ''
            },{
                label: 'Giro de la compañia',
                placeholder: '',
                required: true,
                name: 'com_twist_company',
                type: 'text',
                value: ''
            },{
                label: 'Dirección',
                placeholder: '',
                required: true,
                name: 'com_address',
                type: 'text',
                value: ''
            },{
                label: 'Comunas',
                required: true,
                name: 'commune',
                type: 'select_autocomplete',
                options: communes,
                text_default: '-- Seleccione --',
                value: ''
            },{
                label: 'Regiones',
                required: true,
                name: 'regions',
                type: 'select_autocomplete',
                options: regions,
                text_default: '-- Seleccione --',
                value: ''
            },{
                label: 'País',
                required: true,
                name: 'countries',
                type: 'select_autocomplete',
                options: countries,
                text_default: '-- Seleccione --',
                value: ''
            },{
                label: 'Teléfono 1',
                placeholder: '',
                required: true,
                name: 'com_phone_one',
                type: 'text',
                value: ''
            },{
                label: 'Teléfono 2',
                placeholder: '',
                required: true,
                name: 'com_phone_two',
                type: 'text',
                value: ''
            },{
                label: 'Correo 1',
                placeholder: '',
                required: true,
                name: 'com_mail_one',
                type: 'email',
                value: ''
            },{
                label: 'Correo 2',
                placeholder: '',
                required: true,
                name: 'com_mail_two',
                type: 'email',
                value: ''
            }
        ],
    }

    return (
        <>
            <div class="row">
                <div class="col-xl-4">
                    <div class="card mb-4 mb-xl-0">
                        <div class="card-header">
                            Logo empresa
                        </div>
                        <div class="card-body text-center">

                            <img alt="" class="img-account-profile rounded-circle mb-2"
                                src="assets/img/illustrations/profiles/profile-1.png" />

                            <div class="small font-italic text-muted mb-4">
                                JPG or PNG no larger than 5 MB
                            </div>

                            <button class="btn btn-primary" type="button">
                                Upload new image
                            </button>
                        </div>
                    </div>
                </div>

                <div class="col-xl-8">
                    <div class="card mb-4">
                        <div class="card-header">
                            Datos de la empresa
                        </div>
                        <div class="card-body">
                            <Forms config_form={config_form}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
