# 📖 Manual de Usuario - Proyecto Bajo

Bienvenido al manual de funcionamiento de la aplicación web **Proyecto Bajo**. Este documento le guiará en el uso de todas las funcionalidades del sistema.

## 🌟 Introducción

Proyecto Bajo es una plataforma interactiva dedicada a los amantes del bajo eléctrico. La aplicación permite explorar imágenes inspiradoras, leer sobre la pasión por este instrumento y compartir experiencias con otros usuarios a través de comentarios.

## 🚀 Acceso al Sistema

Para acceder a la aplicación, abra su navegador web favorito (Chrome, Firefox, Safari, Edge) e ingrese la siguiente dirección:

```
http://localhost:3000
```

> **Nota**: Asegúrese de que el servidor esté encendido. Si es un administrador, consulte el [README.md](./README.md) para instrucciones de despliegue.

## 🧭 Navegación

El sitio cuenta con una barra de navegación fija en la parte superior que le permite acceder rápidamente a las secciones principales:

- **Inicio**: Portada con imagen de alto impacto visual.
- **Pasión**: Información inspiradora sobre el bajo.
- **Galería**: Colección de imágenes.
- **Comentarios**: Área para compartir opiniones.

La barra de navegación es transparente al inicio y se vuelve sólida al descender por la página para facilitar la lectura.

## 💡 Funcionalidades Principales

### 1. Modo Oscuro / Claro 🌓

Puede personalizar su experiencia visual utilizando el botón **"Cambiar tema"** ubicado en la esquina superior derecha.

- **Modo Claro**: Ideal para ambientes iluminados. Fondo blanco con textos oscuros.
- **Modo Oscuro**: Reduce la fatiga visual en ambientes con poca luz. Fondo oscuro con textos claros.
- **Persistencia**: Su preferencia se guarda automáticamente. La próxima vez que visite el sitio, recordará su elección.

### 2. Galería Dinámica 🖼️

La sección de galería muestra una selección de 3 imágenes aleatorias relacionadas con el bajo.

- **Visualización**: Las imágenes se adaptan a su dispositivo (móvil o escritorio).
- **Actualizar**: Si desea ver nuevas imágenes, haga clic en el botón **"ACTUALIZAR GALERÍA"**. El sistema cargará una nueva combinación de imágenes sin recargar toda la página.
- **Zoom**: Al pasar el cursor sobre una imagen, esta se ampliará ligeramente para apreciar mejor los detalles.

### 3. Sistema de Comentarios 💬

Comparta sus pensamientos con la comunidad en la sección de Comentarios.

#### Publicar un Comentario

1. Ubique el formulario en el lado izquierdo (en escritorio) o parte superior (en móvil) de la sección Comentarios.
2. Ingrese su **Nombre y Apellidos** (Campo obligatorio).
3. Escriba su **Comentario** (Campo obligatorio, máximo 600 caracteres).
4. Haga clic en el botón **"COMPARTIR"**.

> **Validación**: V Si intenta enviar el formulario vacío, el sistema le alertará para que complete los campos requeridos.

#### Leer Comentarios

Los comentarios recientes aparecen en la lista a la derecha (o debajo) del formulario. Cada comentario muestra:

- Nombre del autor.
- Fecha y hora de publicación.
- Texto del mensaje.

> **Nota de Privacidad**: Los comentarios se guardan se guardan temporalmente en la sesión del servidor.

## 📱 Uso en Dispositivos Móviles

La aplicación es **totalmente responsiva**:

- El menú se adapta a pantallas táctiles.
- Las columnas de la galería se ajustan a una sola fila para facilitar el deslizamiento vertical.
- Los botones tienen áreas de contacto ampliadas para facilitar el uso con los dedos.
- Se sirven imágenes más ligeras automáticamente para ahorrar sus datos móviles.

## ❓ Solución de Problemas

**P: Las imágenes no cargan.**
R: Verifique su conexión a internet. Si el problema persiste, intente recargar la página (F5).

**P: Mi comentario desapareció.**
R: Los comentarios se guardan en la memoria del servidor. Si el servidor se reinicia, los comentarios pueden restablecerse.

**P: El sitio se ve lento.**
R: El sitio está optimizado para cargar rápido. Asegúrese de no tener muchas pestañas abiertas o problemas de red.

---

**Soporte Técnico**
Si encuentra algún error técnico, por favor contacte al administrador del sistema o reporte el problema en nuestro repositorio de GitHub.
