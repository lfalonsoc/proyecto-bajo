# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir al proyecto **Proyecto Bajo**! Esta guía te ayudará a participar de manera efectiva.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo Puedo Contribuir?](#cómo-puedo-contribuir)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Estándares de Código](#estándares-de-código)
- [Commits](#commits)
- [Pull Requests](#pull-requests)

## 📜 Código de Conducta

Este proyecto se adhiere a un código de conducta. Al participar, se espera que mantengas un ambiente respetuoso y colaborativo.

## 🚀 ¿Cómo Puedo Contribuir?

### Reportar Bugs

Si encuentras un bug, por favor crea un issue con:

- **Título descriptivo**
- **Pasos para reproducir** el problema
- **Comportamiento esperado** vs **comportamiento actual**
- **Capturas de pantalla** (si aplica)
- **Entorno** (navegador, versión de Node.js, SO)

### Sugerir Mejoras

Para sugerir nuevas características:

1. Verifica que no exista un issue similar
2. Crea un nuevo issue con el tag `enhancement`
3. Describe claramente la funcionalidad propuesta
4. Explica por qué sería útil para el proyecto

### Contribuir con Código

1. **Fork** el repositorio
2. **Clona** tu fork localmente
3. **Crea una rama** para tu feature/fix
4. **Desarrolla** siguiendo los estándares del proyecto
5. **Prueba** tus cambios
6. **Commit** con mensajes descriptivos
7. **Push** a tu fork
8. **Abre un Pull Request**

## 🔧 Proceso de Desarrollo

### Configuración Inicial

```bash
# Clonar tu fork
git clone https://github.com/TU_USUARIO/proyecto-bajo.git
cd proyecto-bajo

# Agregar el repositorio original como upstream
git remote add upstream https://github.com/lfalonsoc/proyecto-bajo.git

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
```

### Crear una Rama

```bash
# Actualizar tu main
git checkout main
git pull upstream main

# Crear rama para tu feature
git checkout -b feature/nombre-descriptivo
# o para un fix
git checkout -b fix/nombre-del-bug
```

### Tipos de Ramas

- `feature/` - Nuevas funcionalidades
- `fix/` - Corrección de bugs
- `docs/` - Cambios en documentación
- `refactor/` - Refactorización de código
- `style/` - Cambios de formato (CSS, espacios, etc.)
- `test/` - Agregar o modificar tests
- `perf/` - Mejoras de rendimiento

## 📝 Estándares de Código

### JavaScript

- Usar **ES6+** y módulos nativos
- **Nombres descriptivos** para variables y funciones
- **Comentarios** para lógica compleja
- **Evitar código duplicado**
- **Validar inputs** del usuario

### CSS

- Usar **variables CSS** para colores y valores reutilizables
- **Mobile-first** approach
- **BEM** o nomenclatura consistente para clases
- **Comentarios** para secciones principales

### HTML

- **Semántico** (usar tags apropiados)
- **Accesible** (ARIA labels, alt text)
- **Validado** (sin errores de sintaxis)

### Accesibilidad

- Contraste de colores WCAG AA mínimo
- Navegación por teclado funcional
- Textos alternativos en imágenes
- Labels en formularios
- ARIA attributes cuando sea necesario

### Rendimiento

- Optimizar imágenes (WebP, tamaños apropiados)
- Minificar CSS/JS para producción
- Lazy loading para imágenes fuera del viewport
- Evitar JavaScript bloqueante

## 💬 Commits

### Formato de Mensajes

Usar el formato **Conventional Commits**:

```
<tipo>: <descripción corta>

[cuerpo opcional]

[footer opcional]
```

### Tipos de Commit

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Formato, espacios, punto y coma
- `refactor`: Refactorización de código
- `perf`: Mejora de rendimiento
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

### Ejemplos

```bash
feat: agregar filtro de búsqueda en galería

fix: corregir scroll suave en Safari

docs: actualizar README con instrucciones de deploy

perf: optimizar carga de imágenes con lazy loading
```

## 🔀 Pull Requests

### Antes de Crear un PR

- [ ] El código sigue los estándares del proyecto
- [ ] Has probado los cambios localmente
- [ ] Has actualizado la documentación si es necesario
- [ ] No hay conflictos con la rama `main`
- [ ] Los commits tienen mensajes descriptivos

### Plantilla de PR

```markdown
## Descripción

[Descripción clara de los cambios]

## Tipo de Cambio

- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Breaking change
- [ ] Documentación

## ¿Cómo se ha probado?

[Describe las pruebas realizadas]

## Checklist

- [ ] Mi código sigue los estándares del proyecto
- [ ] He realizado una auto-revisión
- [ ] He comentado código complejo
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan nuevos warnings
- [ ] He probado en diferentes navegadores
```

### Proceso de Revisión

1. Un mantenedor revisará tu PR
2. Pueden solicitar cambios o aclaraciones
3. Realiza los cambios solicitados
4. Una vez aprobado, se hará merge a `main`

## 🧪 Testing

Actualmente el proyecto no tiene tests automatizados. Si deseas contribuir con tests, ¡será muy apreciado!

### Testing Manual

Antes de enviar un PR, prueba:

- [ ] Navegación en diferentes dispositivos (móvil, tablet, desktop)
- [ ] Modo oscuro/claro funciona correctamente
- [ ] Formulario de comentarios valida correctamente
- [ ] Galería carga imágenes aleatorias
- [ ] Smooth scroll funciona
- [ ] Accesibilidad con lector de pantalla
- [ ] Rendimiento con Lighthouse (>90 en todas las métricas)

## 📞 Contacto

Si tienes preguntas, puedes:

- Abrir un issue con la etiqueta `question`
- Contactar al mantenedor: [@lfalonsoc](https://github.com/lfalonsoc)

## 🙏 Agradecimientos

¡Gracias por contribuir al proyecto! Cada contribución, por pequeña que sea, es valiosa.

---

**Happy Coding! 🎸**
