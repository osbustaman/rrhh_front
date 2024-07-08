export const InputTable = ({ search_input, input_button_group, buttons_list }) => {

    return (
        <>
            {search_input && (
            <div className="col-md-6 col-sm-6 form-group has-feedback">
                <input type="text" className="form-control has-feedback-left" id="inputSuccess2" placeholder="buscar..." />
                <span className="fa fa-search form-control-feedback left" aria-hidden="true"></span>
            </div>
            )}

            {input_button_group && (
            <div className="btn-group mb-2">
                {buttons_list.map((key, value) => (
                    <button key={`wy0FqIAM_${key}`} className="btn btn-secondary" type="button">key{key}</button>)
                )}
            
            </div>
            )}
        </>
    )
}