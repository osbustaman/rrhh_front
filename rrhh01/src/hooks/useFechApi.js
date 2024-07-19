import { listCustomers } from '../js/listCustomers';

export const useFechApi = () => {
    
    const getDataApi = async (url) => {
        
        const response = await fetch(url)
        const { customers } = await response.json()
        return customers
    }

    return {
        getDataApi
    }
}