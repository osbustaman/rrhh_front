import React, { useEffect, useState, useContext } from 'react';
import { Forms } from "../../components/forms/Forms"
import { useFormValidate } from '../../hooks/useFormValidate';


export const EditFormFactory = () => {

    const { validate } = useFormValidate();

    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [communes, setCommunes] = useState([]);
    const [comSocialReason, setComSocialReason] = useState([]);

    const [rut, setRut] = useState("");
    const [nameCompany, setNameCompany] = useState("");
    const [nameCounter, setNameCounter] = useState("");
    const [representativeName, setRepresentativeName] = useState("");
    const [rutRepresentative, setRutRepresentative] = useState("");
    const [socialReason, setSocialReason] = useState("");
    const [twistCompany, setTwistCompany] = useState("");
    const [address, setAddress] = useState("");
    const [cusCountry, setCusCountry] = useState("");
    const [cusRegion, setCusRegion] = useState("");
    const [cusCommune, setCusCommune] = useState("");

    const [phoneOne, setPhoneOne] = useState("");
    const [phoneTwo, setPhoneTwo] = useState("");
    const [mailOne, setMailOne] = useState("");
    const [mailTwo, setMailTwo] = useState("");

    const data_country = async () => {
        setCountries([]);   
    }

    const data_region = async () => {
        setRegions([]);   
    }

    const data_communes = async () => {
        setCommunes([]);   
    }

    const data_social_reason = async () => {
        setComSocialReason([]);   
    }

    const send_form_user = (form) => {

        const { error, status } = validate(form);

        if (!error) {
            $.confirm({
                title: 'Usuario creado exitósamente!',
                content: 'Para continuar, haga clic en el botón aceptar.',
                buttons: {
                    aceptar: function () {
                        alert('se debe hacer código para redireccionar al editar')
                    }
                }
            });
            return false;
        }else{

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
        }
    };

    const clean_form_user = (id_form) => {
        setTimeout(() => {
            const form = document.getElementById(id_form);
            const formData = new FormData(form);

            formData.forEach((value, key) => {
                const input = document.getElementsByName(key);
                input[0].value = '';
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
                value: rut,
                setValue: setRut
            },{
                label: 'Nombre de la compañia',
                placeholder: '',
                required: true,
                name: 'com_name_company',
                type: 'text',
                value: nameCompany,
                setValue: setNameCompany
            },{
                label: 'Razón social',
                placeholder: '',
                required: true,
                name: 'com_name_counter',
                type: 'text',
                value: nameCounter,
                setValue: setNameCounter
            },{
                label: 'Es Holding',
                required: true,
                name: 'com_is_holding',
                type: 'select',
                text_default: '',
                options: [{key: 'Y', value: 'Si', default: true}, {key: 'N', value: 'No'}]
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
                value: representativeName,
                setValue: setRepresentativeName
            },{
                label: 'Rut del representante',
                placeholder: '',
                required: true,
                name: 'com_rut_representative',
                type: 'rut',
                value: rutRepresentative,
                setValue: setRutRepresentative
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
                value: socialReason,
                setValue: setSocialReason
            },{
                label: 'Giro de la compañia',
                placeholder: '',
                required: true,
                name: 'com_twist_company',
                type: 'text',
                value: twistCompany,
                setValue: setTwistCompany
            },{
                label: 'Dirección',
                placeholder: '',
                required: true,
                name: 'com_address',
                type: 'text',
                value: address,
                setValue: setAddress
            },{
                label: 'Comunas',
                required: true,
                name: 'commune',
                type: 'select_autocomplete',
                options: communes,
                text_default: '-- Seleccione --',
                value: cusCommune,
                setValue: setCusCommune
            },{
                label: 'Regiones',
                required: true,
                name: 'regions',
                type: 'select_autocomplete',
                options: regions,
                text_default: '-- Seleccione --',
                value: cusRegion,
                setValue: setCusRegion
            },{
                label: 'País',
                required: true,
                name: 'countries',
                type: 'select_autocomplete',
                options: countries,
                text_default: '-- Seleccione --',
                value: cusCountry,
                setValue: setCusCountry
            },{
                label: 'Teléfono 1',
                placeholder: '',
                required: true,
                name: 'com_phone_one',
                type: 'text',
                value: phoneOne,
                setValue: setPhoneOne
            },{
                label: 'Teléfono 2',
                placeholder: '',
                required: true,
                name: 'com_phone_two',
                type: 'text',
                value: phoneTwo,
                setValue: setPhoneTwo
            },{
                label: 'Correo 1',
                placeholder: '',
                required: true,
                name: 'com_mail_one',
                type: 'mail',
                value: mailOne,
                setValue: setMailOne
            },{
                label: 'Correo 2',
                placeholder: '',
                required: true,
                name: 'com_mail_two',
                type: 'mail',
                value: mailTwo,
                setValue: setMailTwo
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
