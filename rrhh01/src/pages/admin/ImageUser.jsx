import React, { useState, useEffect } from 'react';

export const ImageUser = ({ route, name, icon }) => {
    const [image, setImage] = useState();

    useEffect(() => {
        // Construye la ruta dinámica de la imagen
        const imagePath = `${route}${name}`;
        // Importa la imagen de manera dinámica
        import(/* @vite-ignore */ imagePath)
            .then(image => {
                setImage(image.default);
            })
            .catch(err => {
                console.error('Error al cargar la imagen:', err);
                // Establece una imagen predeterminada o maneja el error como prefieras
            });
    }, [route, name]); // Dependencias del efecto


    return (
        <>
            {image ? <img src={image} alt={name} className={icon ? 'img-circle profile_img': ''} /> : '...'}
        </>
    );
};