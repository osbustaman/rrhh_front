import { Forms } from "../../components/forms/Forms"

export const FormFactory = () => {

    /*
        com_rut (rut empresa)
        com_name_company (nombre empresa)
        com_name_counter (razon social)
        com_is_holding (es holding Si o No, defecto No)
        com_id_parent_company (empresa padre)

        com_representative_name (Nombre representante)
        com_rut_representative (rut representante)
        com_is_state (es estatal Si o No, defecto No)
        
        com_social_reason (Razón social)
        com_twist_company (Giro)
        com_address = (Dirección)
        com_department_office (Departamento/oficina)
        country (País)
        region (Región)
        commune (Comuna)

        com_phone_one (teléfono 1)
        com_mail_one (mail 1)
        com_phone_two (teléfono 2)
        com_mail_two (mail 2)


        
    */

    const config_form = {
        number_row: 6,
        id_form: 'form_customer',
        position_form: 'vertical',
        inputs: [
            {
                label: 'Rut de la compañia',
                placeholder: '',
                required: true,
                name: 'com_rut',
                type: 'text',
                value: '',
                setValue: ''
            },{
                label: 'Nombre de la compañia',
                placeholder: '',
                required: true,
                name: 'com_name_company',
                type: 'text',
                value: '',
                setValue: ''
            },{
                label: 'Razón social',
                placeholder: '',
                required: true,
                name: 'com_name_counter',
                type: 'text',
                value: '',
                setValue: ''
            },{
                label: 'Es Holding',
                required: true,
                name: 'com_is_holding',
                type: 'select',
                options: [{key: 'Y', value: 'Si', default: true}, {key: 'N', value: 'No'}]
            }
        ],
    }

    return (
        <>
            <div class="row">
                <div class="col-xl-4">
                    <div class="card mb-4 mb-xl-0">
                        <div class="card-header">
                            Profile Picture
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
                            Account Details
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
