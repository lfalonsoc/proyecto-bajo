import "dotenv/config";
import express from "express";
import session from "express-session";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta public
app.use(express.static(join(__dirname, 'public')));

// Configuración de sesión
app.use(session({
    secret: process.env.SECRET || "secrect-provisional",
    resave: false,
    saveUninitialized: true
}));

// Middleware para interpretar JSON
app.use(express.json());

// Array con la ruta de imagenes
const galeria = [
    "/img/galeria/bajo_1.webp",
    "/img/galeria/bajo_2.webp",
    "/img/galeria/bajo_3.webp",
    "/img/galeria/bajo_4.webp",
    "/img/galeria/bajo_5.webp",
    "/img/galeria/bajo_6.webp",
    "/img/galeria/bajo_7.webp",
    "/img/galeria/bajo_8.webp",
    "/img/galeria/bajo_9.webp",
    "/img/galeria/bajo_10.webp",
    "/img/galeria/bajo_11.webp",
    "/img/galeria/bajo_12.webp",
];

// Ruta información del segmento pasión
app.get("/api/parrafo", (req, res) => {
    res.json({parrafo: "El bajo es un instrumento musical fascinante que muchos eligen como hobby por su capacidad de dar ritmo, profundidad y carácter a la música. Tocar el bajo no solo es una forma creativa de expresarse, sino también una actividad relajante y estimulante que mejora la coordinación, el oído musical y el sentido del ritmo. Como pasatiempo, permite disfrutar de distintos estilos musicales, tocar en solitario o compartir experiencias con otras personas en bandas y ensambles. Aprender bajo es una excelente manera de conectar con la música, divertirse y desarrollar habilidades artísticas de forma constante y entretenida."},);
});

// Ruta imagenes galería
app.get("/api/imagenes", (req, res) => {
    const seleccionados = new Set();
    
    // Generar 3 índices únicos
    while (seleccionados.size < 3) {
        seleccionados.add(Math.floor(Math.random() * galeria.length));
    }

    // 2. Limpiar y llenar el array de imágenes (o renderizar directamente)
    const imagenes = Array.from(seleccionados).map(index => galeria[index]);

    res.json({imagenes: imagenes});
});

// Ruta guardar comentario
app.post("/api/guardarComentario", (req, res) => {
    // Guardar en la sesión
    const { usuario, textoComentario } = req.body;
    // Inicializar comentarios en sesión si no existen
    if (!req.session.comentarios) {
        req.session.comentarios = [];
    }

    // Guardar comentario como objeto
    req.session.comentarios.push({
        usuario,
        comentario: textoComentario,
        fecha: new Date(),
    });

    res.json({
        mensaje: "Comentario Guardado en la sesión",
        comentarios: req.session.comentarios,
    });
});

// Ruta para obtener comentarios
app.get("/api/cargarComentarios", (req, res) => {
    const comentarios = req.session.comentarios || [];
    res.json({ comentarios });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});