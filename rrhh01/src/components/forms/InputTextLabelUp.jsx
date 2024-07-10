
export const InputTextLabelUp = () => {
    return (
        <>
            <div className="item form-group">
                <label className="col-form-label col-md-3 col-sm-3 label-align" for="first-name">First Name <span className="required">*</span>
                </label>
                <div className="col-md-6 col-sm-6 ">
                    <input type="text" id="first-name" required="required" className="form-control" />
                </div>
            </div>
        </>
    )
}
