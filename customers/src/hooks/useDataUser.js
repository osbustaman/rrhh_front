import { method_get } from "../js/fech";

export const useDataUser = (id_user) => {

    const getDataUser = async () => {
        const response = await method_get(`data-user-customer/${id_user}`);
        const { user_company } = response.status;
        
        localStorage.setItem('uc_type_user', user_company.uc_type_user == null ? 1 : user_company.uc_type_user);
        localStorage.setItem('company', user_company.company);

        return response
    }

    return {
        getDataUser
    }
}
