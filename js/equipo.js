// Función para mostrar solo los médicos con más de 5 años de experiencia
function filtrarMedicos() {
    // Obtener todas las tarjetas de médicos
    const medicos = document.querySelectorAll('.col');

    // Iterar sobre cada tarjeta de médico
    medicos.forEach(medico => {
        // Obtener los años de experiencia desde el contenido de la etiqueta <h6>
        const experienciaText = medico.querySelector('h6').textContent; // Texto dentro del <h6>
        const experiencia = parseInt(experienciaText.replace('Años de experiencia: ', '').trim()); // Extraer el número
        
        // Si la experiencia es 5 años o menos, ocultamos la tarjeta
        if (experiencia <= 5) {
            medico.style.display = 'none';
        } else {
            medico.style.display = 'block';
        }
    });
}

// Llamar a la función para filtrar los médicos cuando se cargue la página
document.addEventListener('DOMContentLoaded', filtrarMedicos);