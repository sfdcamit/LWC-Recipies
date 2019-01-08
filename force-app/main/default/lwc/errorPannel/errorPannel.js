import { LightningElement, api, track } from 'lwc';

export default class ErrorPannel extends LightningElement {
    /** Generic / user-friendly message */
    @api friendlyMessage = 'Error retrieving data';

    @track viewDetails = false;

    _errors;

    @api
    get errors() {
        return this._errors;
    }
    /** Single error object or array of error objects */
    set errors(value) {
        if (!Array.isArray(value)) {
            value = [value];
        }
        this._errors = value
            .filter(
                error =>
                    error &&
                    error.details &&
                    error.details.body &&
                    error.details.body.message,
            )
            .map(error => ({ message: error.details.body.message }));
    }

    handleCheckboxChange(event) {
        this.viewDetails = event.target.checked;
    }
}