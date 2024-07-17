import { listCustomers } from '../js/listCustomers';

export const useListCustomers = () => {

    const getFechListCustomers = async () => {
        const customers_response = await listCustomers();
        const { customers } = customers_response;
        return customers
    }

    return {
        getFechListCustomers
    }
}