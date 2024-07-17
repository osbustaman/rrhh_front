export const listCustomers = async () => {

    const host_url = import.meta.env.VITE_API_URL;

    const url = `${host_url}/listado-clientes`;
        
    var myHeaders = new Headers();
    myHeaders.append("token", localStorage.getItem('token'));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const response = await fetch(url, requestOptions);
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


























