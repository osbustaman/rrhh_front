import { InputText } from './InputText';

export const Forms = ({ config_form }) => {

    const { id_form, number_row, name_button, def } = config_form;

    return (
        <>
            <form id={`${id_form}`}>
                <div className="row gx-3 mb-3">
                    <InputText config_input={config_form} />
                </div>

                <button className="btn btn-primary" type="button" onClick={def}>
                    {name_button}
                </button>
            </form>
        </>
    )
}
