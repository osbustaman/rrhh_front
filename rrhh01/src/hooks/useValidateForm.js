import { method_post } from '../js/request_fech'

/**
 * Custom hook for form validation.
 *
 * @returns {Object} An object containing the `validateForm` function.
 */
export const useValidateForm = () => {

    const validateForm = async (id_form, url) => {
        const form = document.getElementById(id_form);
        if (form) {
            const formData = new FormData(form);

            let message_error = '';
            const list_message_error = [];
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;

                const input = document.getElementsByName(key);
                const required = input[0].required ? true : false;

                if (required && value === '') {
                    input[0].classList.add('is-invalid');
                    const label_input = document.getElementById(`label_${key}`);

                    list_message_error.push({
                        message: `El campo ${label_input.innerHTML.replace(/ :/g, "")} es obligatorio.`
                    });
                }
            });

            if (list_message_error.length > 0) {
                list_message_error.map((message) => {
                    message_error += '<li>' + message.message + '</li>';
                });

                return {
                    error: true,
                    status: `<ul>${message_error}</ul>`
                }
            }
            
            const { error, status } = await method_post(url, formObject);

                if (error) {

                    let listHtml = ''; // Variable para almacenar los elementos de la lista HTML
                    for (const key in status) {
                        if (status.hasOwnProperty(key)) {
                            const messages = status[key];
                            messages.forEach((message, index) => {
                                listHtml += `<li>${key}: ${message}</li>`; // Agrega cada mensaje como un elemento de lista
                            });
                        }
                    }

                    return {
                        error: error,
                        status: `<ul>${listHtml}</ul>`
                    }
                }else{
                    return {
                        error: error,
                        status: status
                    }
                }
        }
    }

    return {
        validateForm
    }
}
