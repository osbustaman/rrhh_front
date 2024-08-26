import { method_get } from "../js/fech";

export const useDataUser = (id_user) => {

    const getDataUser = async () => {
        const response = await method_get(`data-user-customer/${id_user}`);
        return response
    }

    return {
        getDataUser
    }
}
