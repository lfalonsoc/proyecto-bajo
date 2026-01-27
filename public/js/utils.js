export function validarFormulario(usuario, textoComentario) {
    // Definición de variables
    let mensaje = "";
    
    if (usuario.value === "") {
        mensaje += `Por favor ${usuario.placeholder}.\n`;
        usuario.focus();
    }

    if (textoComentario.value === "") {
        mensaje += `Por favor ${textoComentario.placeholder}.\n`;
        textoComentario.focus();
    }

    // Mostrar el mensaje al usuario si se presentó error o se registro bien
    if (mensaje !== "") {
        alert(mensaje);
        return false;
    }

    return true;
}