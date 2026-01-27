// Traer el texto de pasión que se encuentra almacenado en el servidor
export async function cargarParrafo() {
    try {
        const res = await fetch("/api/parrafo");

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.log("Error al cargar el párrafo: ", error);
        throw error;
    }
}

// Traer 3 imagenes aleatorias para mostrar en la galería
export async function cargarImagenes() {
    try {
        const res = await fetch("/api/imagenes");

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.log("Error al cargar las imagenes: ", error);
        throw error;
    }
}

export async function guardarComentario(usuario, textoComentario) {
    try {
        const res = await fetch("/api/guardarComentario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                usuario,
                textoComentario
            })
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.log("Error al guardar el comentario: ", error);
        throw error;
    }
}

export async function cargarComentarios() {
    try {
        const res = await fetch("/api/cargarComentarios");

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.log("Error al cargar los comentarios: ", error);
        throw error;
    }
}