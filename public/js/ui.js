export function renderParrafo(data) {
    parrafo.textContent = data.parrafo;
}

export function renderGaleria(data) {
    imagenes.textContent = "Cargando...";
    imagenes.textContent = "";
    data.forEach((imagen, index) => {
        // Crear card para mostrar imagen
        const card = document.createElement('article');
        const img = document.createElement('img');
    
        card.className = 'cardImg';
        img.src = imagen;
        img.alt = `Imagen Bajo ${index}`;
        img.loading = "lazy";
        img.width = 250;
        card.appendChild(img);

        imagenes.appendChild(card);
    });
}

export function renderComentarios(data) {
    listaComentarios.textContent = "";

    data.forEach(comentario => {
        // Crear elementos para mostrar los comentarios
        const comentarioItem = document.createElement('div');
        const comentarioHeader = document.createElement('div');
        const comentarioUsuario = document.createElement('span');
        const comentarioFecha = document.createElement('span');
        const comentarioTexto = document.createElement('div');

        const fechaFormateada = new Date(comentario.fecha).toLocaleString();

        // Agregar clases
        comentarioItem.className = 'comentario-item';
        comentarioHeader.className = 'comentario-header';
        comentarioUsuario.className = 'comentario-usuario';
        comentarioFecha.className = 'comentario-fecha';
        comentarioTexto.className = 'comentario-texto';

        // Asignar contenido
        comentarioUsuario.textContent = comentario.usuario;
        comentarioFecha.textContent = fechaFormateada;
        comentarioTexto.textContent = comentario.comentario;

        // Construir estructura HTML
        comentarioHeader.appendChild(comentarioUsuario);
        comentarioHeader.appendChild(comentarioFecha);

        comentarioItem.appendChild(comentarioHeader);
        comentarioItem.appendChild(comentarioTexto);

        // Agregar a contenedor principal
        listaComentarios.appendChild(comentarioItem);
    });
}