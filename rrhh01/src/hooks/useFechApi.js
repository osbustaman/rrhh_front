import { listCustomers } from '../js/listCustomers';

export const useFechApi = () => {
    
    const host_url = import.meta.env.VITE_API_URL;

    const getDataApi = async (url) => {

        const route_url = `${host_url}/${url}`;

        var myHeaders = new Headers();
        myHeaders.append("token", localStorage.getItem('token'));
    
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
    
        try {
            const response = await fetch(route_url, requestOptions);
            const { status, ok } = response;
    
            if (status === 200 && ok) {
                const data = await response.json();
                return data;
            }else{
                return {
                    error: true,
                    status: ok
                };
            }
            
        } catch (error) {
            
        }
    }

    return {
        getDataApi
    }
}