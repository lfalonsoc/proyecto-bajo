// Importar funciones de otros módulos
import { cargarParrafo, cargarImagenes, guardarComentario } from './api.js';
import { renderParrafo, renderGaleria, renderComentarios } from './ui.js';
import { validarFormulario } from './utils.js';

async function iniciarApp () {
    // Declaración de variables de los elementos del DOM
    const body = document.body;
    const modoGuardado = localStorage.getItem("modo");
    const parrafo = document.getElementById("parrafo");
    const imagenes = document.getElementById("imagenes");
    const btnActualizarGaleria = document.getElementById("btnActualizarGaleria");
    const formulario = document.getElementById("formulario");
    const usuario = document.getElementById("usuario");
    const textoComentario = document.getElementById("textoComentario");
    const btnComentario = document.getElementById("btnComentario");
    const listaComentarios = document.getElementById('listaComentarios');


    // Cambiar fondo de claro a obscuro y viceversa
    if (modoGuardado === "oscuro") body.classList.add("oscuro");

    document.getElementById("modo").addEventListener("click", () => {
        body.classList.toggle("oscuro");
        const modo = body.classList.contains("oscuro") ? "oscuro" : "claro";
        localStorage.setItem("modo", modo);
    });


    // JavaScript para cambiar el menú al hacer scroll
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('mainNav');
        const headerHeight = document.querySelector('.header-container').offsetHeight;
        
        if (window.scrollY > 50) {
            nav.classList.remove('transparent');
        } else {
            nav.classList.add('transparent');
        }
        
        // Opcional: cambiar estilo al pasar el header
        if (window.scrollY > headerHeight - 100) {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        }
    });

    // Smooth scroll para enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const navHeight = document.getElementById('mainNav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    /* Validar información del formulario */
    // Función listener para detectar el evento click del botón menú
    btnComentario.addEventListener('click', async (e) => {
        e.preventDefault();
        
        const resultado = validarFormulario(usuario, textoComentario);

        if (resultado) {
            try {
                const respuesta = await guardarComentario(usuario.value, textoComentario.value);

                // Limpiar los campos del formulario
                formulario.reset();

                // Mostrar los comentarios
                renderComentarios(respuesta.comentarios);

                alert("¡Comentario guardado con éxito!");
                console.log("Respuesta del servidor: ", respuesta.mensaje);
            } catch (error) {
                alert(`No se pudo guardar el comentario. Error: ${error.message}`)
            }
        }


    });


    /* Llamados a funciondes de api.js */
    // Traer el texto de section pasion
    const textoParrafo = await cargarParrafo();
    renderParrafo(textoParrafo);

    // Traer imagenes Galería
    const imagenesGaleria = await cargarImagenes();
    renderGaleria(imagenesGaleria.imagenes);


    // Identificar actualizar galería al dar click en botón
    btnActualizarGaleria.addEventListener('click', async function() {
        const imagenesGaleria = await cargarImagenes();
        renderGaleria(imagenesGaleria.imagenes);
    });
}

iniciarApp();