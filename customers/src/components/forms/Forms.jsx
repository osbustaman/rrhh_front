import { InputText } from './InputText';

export const Forms = ({ config_form }) => {

    const { id_form, number_row } = config_form;

    console.log('Forms', config_form);

    return (
        <>
            <form id={`${id_form}`}>
                <div class="row gx-3 mb-3">
                    <InputText config_input={config_form} />
                </div>

                <button class="btn btn-primary" type="button">
                    Save changes
                </button>
            </form>
        </>
    )
}
