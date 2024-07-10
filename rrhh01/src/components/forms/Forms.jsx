
import { InputText } from './InputText';
import { InputTextLabelUp } from './InputTextLabelUp';

export const Forms = () => {

    const config_form = {
        id: 'demo-form2',
        data_parsley_validate: '',
        class_name: '',
        novalidate: '',
        columns: 6,
        inputs: [
            {
                label: 'Nombre cliente',
                required: true,
                type: 'text',
                id: 'first-name',
                name: 'first-name',
                number_row: 6
            }
        ]
    };

    <form id="demo-form" data-parsley-validate="" novalidate=""></form>
    console.log(config_form.inputs[0].number_row);

    return (
        <>
            <form id={config_form.id}>
                <div className="row">

                    <InputText config_input={config_form.inputs[0]}/>
                    
                </div>
                
                
                
            </form>
        </>
    )
}


