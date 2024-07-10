import { actionMap } from '../../js/ validations';
import Select from 'react-select'


export const InputText = ({ config_input }) => {

    const {position_form, number_row} = config_input;

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


        switch (key.type) {
            case "select":
                return (
                    <select id={key.id} className="form-control" name={key.label.toLowerCase().replace(/ /g, "_")} required={!!key.required}>
                        <option>{key.text_default}</option>
                        {key.options.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                );
            case "select_autocomplete":

                const handleChange = (selectedOption) => {
                    //console.log(`Input Name: ${key.label.toLowerCase().replace(/ /g, "_")}, Selected ID: ${selectedOption.value}`);
                };

                return (
                    <Select
                        id={key.id} 
                        name={key.label.toLowerCase().replace(/ /g, "_")}
                        options={key.options}
                        placeholder={key.text_default}
                        onChange={handleChange}
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.value} />
                );

            case "checkbox":
                return (
                    <input 
                        type="checkbox" 
                        id={key.id} 
                        className="form-check-input" 
                        name={key.label.toLowerCase().replace(/ /g, "_")} required={!!key.required} 
                        // Usa el evento configurado en el JSON, como onBlur, onChange, etc.
                        {...eventProps}
                        />
                );
            case "date":
                    return (
                        <input 
                            type="date" 
                            id={key.id} 
                            className="form-control" 
                            name={key.label.toLowerCase().replace(/ /g, "_")} required={!!key.required}
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
                        name={key.label.toLowerCase().replace(/ /g, "_")} 
                        required={!!key.required} 
                        {...eventProps}
                        />
                );
        }
    };

    return (
        <>
            {config_input.inputs.map((key) => (
                <div className={`${position_form === 'vertical' ? '' : 'item form-group mb-2'} mb-2 col-md-${number_row}`}>
                    <label htmlFor={key.label.toLowerCase().replace(/ /g, "_")}>{`${key.label}`} :</label>
                    {renderInput(key)}
                </div>
            ))}
        </>
    )
}
