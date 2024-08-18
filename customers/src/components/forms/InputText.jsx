import { actionMap } from '../../js/validations';
import Select from 'react-select';
import './style_inputs.css';

export const InputText = ({ config_input }) => {

    const { position_form, number_row } = config_input;

    const renderInput = (key) => {

        // Función para manejar eventos de manera genérica
        const handleEvent = (key, e) => {
            if (e.target.value.trim() === '') {
                return;
            }

            if (key.evento && actionMap[key.evento.action]) {
                // Ejecuta la acción correspondiente
                const isValid = actionMap[key.evento.action](e.target.value);

                $.alert({
                    title: 'Error!',
                    content: isValid ? key.evento.message.success : key.evento.message.error,
                });
                return;
            }
        };

        // Prepara el objeto de propiedades del evento de manera condicional
        const eventProps = key.evento ? { [key.evento.name]: (e) => handleEvent(key, e) } : {};
        const name_input = key.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "_")

        switch (key.type) {
            case "select":

                console.log('option', key.options);

                return (
                    <select
                        id={key.id}
                        className="form-control"
                        name={name_input}
                        required={!!key.required}
                        value={key.value}
                        onChange={(e) => handleEvent(key, e)}
                    >
                        {key.text_default && <option>{key.text_default}</option>}
                        {key.options.map((option) => (
                            <option key={option.key} value={option.key} selected={option.default && 'selected'}>
                                {option.value}
                            </option>
                        ))}
                    </select>
                );
            case "select_autocomplete":
                const handleChange = (selectedOption) => {
                    if(key.value){
                        key.setValue(selectedOption ? selectedOption.value : '');
                    }
                };

                return (
                    <Select
                        id={key.id}
                        name={name_input}
                        options={key.options}
                        placeholder={key.text_default}
                        required={!!key.required}
                        value={key.options.find(option => option.value === key.value)}
                        onChange={handleChange}
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.value}
                    />
                );
                
            case "checkbox":
                return (
                    <input
                        type="checkbox"
                        id={key.id}
                        className="form-check-input"
                        name={name_input}
                        required={!!key.required}
                        value={key.value}
                        checked={key.value}
                        onChange={event => key.setValue && key.setValue(event.target.value)}
                        {...eventProps}
                    />
                );

            case "date":
                return (
                    <input
                        type="date"
                        id={key.id}
                        className="form-control"
                        name={name_input}
                        required={!!key.required}
                        value={key.value}
                        onChange={event => key.setValue && key.setValue(event.target.value)}
                        {...eventProps}
                    />
                );
                case "email":
                    return (
                        <input
                            type="email"
                            id={key.id}
                            className="form-control"
                            name={name_input}
                            required={!!key.required}
                            value={key.value}
                            onChange={event => key.setValue && key.setValue(event.target.value)}
                            {...eventProps}
                        />
                    );

                    case "rut":
                        return (
                            <input
                                type="text"
                                tag-rut="true"
                                id={key.id}
                                className={`form-control ${key.type}`}
                                name={name_input}
                                required={!!key.required}
                                value={key.value}
                                onChange={event => key.setValue && key.setValue(event.target.value)}
                                {...eventProps}
                            />
                        );
            case "text":
            default:
                return (
                    <input
                        type="text"
                        id={key.id}
                        className="form-control"
                        name={name_input}
                        required={!!key.required}
                        value={key.value}
                        onChange={event => key.setValue && key.setValue(event.target.value)}
                        {...eventProps}
                    />
                );
        }
    };

    return (
        <>
            {config_input.inputs.map((key, index) => (
                <div
                    key={key.name.toLowerCase().replace(/ /g, "_") + index}
                    className={`${position_form === 'vertical' ? '' : 'item form-group mb-2'} mb-2 col-md-${number_row}`}
                >
                    <label className='small mb-1' htmlFor={key.name.toLowerCase().replace(/ /g, "_")} id={`label_${key.name.toLowerCase().replace(/ /g, "_")}`}>{`${key.label}`} :</label>
                    {renderInput(key)}
                </div>
            ))}
        </>
    );
};