# 🎸 Proyecto Bajo - Landing Page

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.2.1-lightgrey.svg)](https://expressjs.com/)

Landing page accesible y optimizada sobre el hobby del bajo eléctrico. Proyecto desarrollado con tecnologías web modernas, enfocado en rendimiento, accesibilidad y experiencia de usuario.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [API Endpoints](#-api-endpoints)
- [Optimizaciones de Rendimiento](#-optimizaciones-de-rendimiento)
- [Accesibilidad](#-accesibilidad)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

## ✨ Características

- **🎨 Diseño Responsivo**: Adaptable a todos los dispositivos (móvil, tablet, desktop)
- **🌓 Modo Oscuro/Claro**: Tema personalizable con persistencia en localStorage
- **♿ Accesibilidad**: Cumple con estándares WCAG 2.1
- **⚡ Alto Rendimiento**: Imágenes optimizadas WebP, lazy loading, y preload estratégico
- **🖼️ Galería Dinámica**: Imágenes aleatorias cargadas desde el servidor
- **💬 Sistema de Comentarios**: Gestión de comentarios con sesiones de Express
- **🎯 Navegación Suave**: Smooth scroll y menú fijo con efectos de transparencia
- **📱 PWA Ready**: Optimizado para Progressive Web Apps

## 🛠️ Tecnologías

### Backend

- **Node.js** (v18+)
- **Express.js** (v5.2.1) - Framework web
- **express-session** (v1.19.0) - Gestión de sesiones
- **dotenv** (v17.2.3) - Variables de entorno

### Frontend

- **HTML5** semántico
- **CSS3** con variables personalizadas y media queries
- **JavaScript ES6+** (Módulos nativos)
- **WebP** para imágenes optimizadas

### Herramientas

- **Git** - Control de versiones
- **Lighthouse** - Auditorías de rendimiento y accesibilidad
- **ImageMagick** - Optimización de imágenes

## 📦 Requisitos Previos

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

## 🚀 Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/lfalonsoc/proyecto-bajo.git
cd proyecto-bajo
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

```bash
cp .env.example .env
# Editar .env con tus valores
```

4. **Iniciar el servidor**

```bash
npm start
```

5. **Abrir en el navegador**

```
http://localhost:3000
```

## ⚙️ Configuración

### Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
# Puerto del servidor
PORT=3000

# Secreto para las sesiones (cambiar en producción)
SECRET=tu_secreto_super_seguro_aqui
```

> ⚠️ **Importante**: Nunca subas el archivo `.env` al repositorio. Ya está incluido en `.gitignore`.

## 💻 Uso

### Desarrollo

```bash
npm start
```

El servidor se iniciará en `http://localhost:3000` (o el puerto configurado en `.env`).

### Scripts Disponibles

```bash
# Iniciar servidor
npm start

# Ejecutar tests (pendiente de implementar)
npm test
```

## 📁 Estructura del Proyecto

```
proyecto-bajo/
├── public/                      # Archivos estáticos
│   ├── css/
│   │   ├── style.css           # Estilos principales
│   │   └── style-min.css       # Estilos minificados
│   ├── img/
│   │   ├── bass.webp           # Imagen hero original (622KB)
│   │   ├── bass-optimized.webp # Imagen hero desktop (95KB)
│   │   ├── bass-mobile.webp    # Imagen hero móvil (23KB)
│   │   ├── logo_dark.webp      # Logo del sitio
│   │   └── galeria/            # Imágenes de la galería (12 imágenes)
│   ├── js/
│   │   ├── main.js             # Punto de entrada principal
│   │   ├── api.js              # Funciones de API
│   │   ├── ui.js               # Funciones de renderizado UI
│   │   ├── utils.js            # Utilidades y validaciones
│   │   └── *-min.js            # Versiones minificadas
│   └── index.html              # Página principal
├── server.js                    # Servidor Express
├── package.json                 # Dependencias y scripts
├── .env                         # Variables de entorno (no versionado)
├── .gitignore                   # Archivos ignorados por Git
└── README.md                    # Este archivo
```

## 🔌 API Endpoints

### GET `/api/parrafo`

Obtiene el texto descriptivo de la sección "Pasión".

**Respuesta:**

```json
{
  "parrafo": "El bajo es un instrumento musical fascinante..."
}
```

### GET `/api/imagenes`

Obtiene 3 imágenes aleatorias de la galería.

**Respuesta:**

```json
{
  "imagenes": [
    "/img/galeria/bajo_1.webp",
    "/img/galeria/bajo_5.webp",
    "/img/galeria/bajo_9.webp"
  ]
}
```

### POST `/api/guardarComentario`

Guarda un comentario en la sesión del usuario.

**Body:**

```json
{
  "usuario": "Fernando Alonso",
  "textoComentario": "¡Excelente contenido sobre el bajo!"
}
```

**Respuesta:**

```json
{
  "mensaje": "Comentario Guardado en la sesión",
  "comentarios": [
    {
      "usuario": "Fernando Alonso",
      "comentario": "¡Excelente contenido sobre el bajo!",
      "fecha": "2026-01-27T15:30:00.000Z"
    }
  ]
}
```

### GET `/api/cargarComentarios`

Obtiene todos los comentarios de la sesión actual.

**Respuesta:**

```json
{
  "comentarios": [
    {
      "usuario": "Fernando Alonso",
      "comentario": "¡Excelente contenido sobre el bajo!",
      "fecha": "2026-01-27T15:30:00.000Z"
    }
  ]
}
```

## ⚡ Optimizaciones de Rendimiento

### Imágenes Optimizadas

| Versión  | Resolución  | Tamaño | Reducción | Uso               |
| -------- | ----------- | ------ | --------- | ----------------- |
| Original | 5184x3456px | 622KB  | -         | No usado          |
| Desktop  | 1920x1280px | 95KB   | **85%** ↓ | Pantallas > 768px |
| Mobile   | 768x512px   | 23KB   | **96%** ↓ | Pantallas ≤ 768px |

### Técnicas Implementadas

1. **Responsive Images**: Media queries en CSS para cargar imagen apropiada según dispositivo
2. **Preload Estratégico**: `<link rel="preload">` para la imagen hero con media queries
3. **Lazy Loading**: Atributo `loading="lazy"` en imágenes secundarias
4. **WebP Format**: Formato de imagen moderno con mejor compresión
5. **CSS Optimizations**:
   - `will-change: transform` para optimizar animaciones
   - `content-visibility: auto` para mejorar renderizado inicial
6. **Minificación**: Archivos CSS y JS minificados para producción

### Core Web Vitals

- **LCP (Largest Contentful Paint)**: Optimizado con preload de imagen hero
- **FID (First Input Delay)**: JavaScript modular y no bloqueante
- **CLS (Cumulative Layout Shift)**: Dimensiones fijas para imágenes

## ♿ Accesibilidad

- ✅ Etiquetas semánticas HTML5 (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`)
- ✅ Atributos ARIA (`aria-label`, `aria-live`, `aria-pressed`)
- ✅ Contraste de colores WCAG AA
- ✅ Navegación por teclado completa
- ✅ Textos alternativos en todas las imágenes
- ✅ Formularios con labels asociados
- ✅ Smooth scroll accesible

## 🎨 Características de UI/UX

### Modo Oscuro/Claro

El tema se guarda automáticamente en `localStorage` y persiste entre sesiones.

### Menú Fijo Inteligente

- Transparente al inicio
- Se vuelve sólido al hacer scroll
- Smooth scroll a secciones
- Indicadores visuales de hover

### Galería Interactiva

- Carga 3 imágenes aleatorias al inicio
- Botón para actualizar la galería
- Efectos hover con transformaciones CSS
- Grid responsivo (3 columnas desktop, 1 columna móvil)

### Sistema de Comentarios

- Validación de formularios en cliente
- Almacenamiento en sesión del servidor
- Renderizado dinámico
- Timestamps automáticos

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Fernando Alonso**

- GitHub: [@lfalonsoc](https://github.com/lfalonsoc)
- Proyecto: [proyecto-bajo](https://github.com/lfalonsoc/proyecto-bajo)

## 🙏 Agradecimientos

- Imágenes de bajo de la galería
- Comunidad de desarrolladores web
- Recursos de accesibilidad WCAG

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub
