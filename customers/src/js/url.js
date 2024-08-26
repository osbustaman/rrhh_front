export const url_customer = () => {

    // Obtener el hostname completo (subdominio + dominio)
    const fullHostname = window.location.hostname; // Ejemplo: "alexis.localhost.cl"

    // Separar las partes del hostname
    const hostnameParts = fullHostname.split('.');

    // Obtener el subdominio
    const subdomain = hostnameParts.length >= 2 ? hostnameParts[0] : null;

    const host_url = `${import.meta.env.VITE_TYPE_HTTP}//${subdomain}.${import.meta.env.VITE_API_HOST}`;

    return host_url;
}