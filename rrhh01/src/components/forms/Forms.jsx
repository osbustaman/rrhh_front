import { InputText } from './InputText';

export const Forms = ({ config_form }) => {

    const { id_form } = config_form;

    return (
        <>
            <form className={`row`} id={`${id_form}`}>
                <InputText config_input={config_form} />
            </form>
        </>
    )
}
