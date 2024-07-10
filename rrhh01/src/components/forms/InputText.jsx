
export const InputText = ({ config_input }) => {

    const { label, number_row, required, type, id, name } = config_input;

    return (
        <>
            <div className={`item form-group mb-2 col-md-${number_row}`}>
                <div>
                    <label for={id}>{`${label}`} :</label>
                </div>
                
                <input type={type} id={id} class="form-control" name={name} required={!!required}></input>
            </div>
        </>
    )
}
