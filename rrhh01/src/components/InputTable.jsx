export const InputTable = ({ input_search, input_button_group, buttons_list }) => {
    
    console.log(buttons_list);

    return (
        <>
            {input_search && (
            <div className="col-md-6 col-sm-6 form-group has-feedback">
                <input type="text" className="form-control has-feedback-left" id="inputSuccess2" placeholder="buscar..." />
                <span className="fa fa-search form-control-feedback left" aria-hidden="true"></span>
            </div>
            )}

            {input_button_group && (
            <div className="btn-group mb-2">
                {buttons_list.map((key, value) => (
                    <button className="btn btn-secondary" type="button">Left</button>)
                )}
            
            </div>
            )}
        </>
    )
}