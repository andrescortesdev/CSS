# AprendeCSS — Aprende haciendo

Desarrollado por **Robinson Andres Cortes**.

Sitio de documentación y práctica de CSS en español, preparado para **GitHub Pages**.

**Solo HTML, CSS y JavaScript del navegador. No requiere Node.js, npm, dependencias, un backend ni compilación.**

## Publicar en GitHub Pages

1. Sube los archivos de esta carpeta a la raíz de tu repositorio de GitHub. `index.html` debe quedar directamente en la raíz, junto a `styles.css` y los archivos `.js`, incluido `catalogs.js`.
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment → Source**, elige **Deploy from a branch**.
4. Elige tu rama, por ejemplo **main**, y la carpeta **/ (root)**. Pulsa **Save**.
5. Espera a que GitHub complete la publicación y abre la dirección que aparece en Pages, normalmente `https://TU-USUARIO.github.io/TU-REPOSITORIO/`.

El archivo `.nojekyll` evita el procesamiento de Jekyll. Las rutas de los archivos son relativas y la navegación usa fragmentos (`#/learn/selectores`), por lo que funciona tanto en un dominio raíz como dentro de la carpeta de un repositorio. No necesitas GitHub Actions ni un paso de build.

Para actualizarlo, modifica los archivos y súbelos a la misma rama. GitHub Pages vuelve a publicarlos.

## Cómo usarlo

- Empieza en **Aprender**. Hay **60 lecciones en 8 módulos**, desde la primera regla hasta proyectos que reúnen varias técnicas.
- La lección **Etiqueta, clase e ID** explica cómo seleccionar etiquetas, reutilizar clases e identificar un elemento único. Sus tres tarjetas cargan ejemplos separados para comparar sus efectos.
- Edita **styles.css** o **index.html** en el laboratorio y pulsa **Ejecutar**. También puedes usar **Ctrl + Enter**. Ambos lenguajes se aplican juntos; escribir no ejecuta los cambios automáticamente.
- Alterna entre el ancho disponible y la vista compacta de **250px** para probar responsive.
- Usa las explicaciones paso a paso, resuelve el reto y abre la pista cuando lo necesites. Marca las lecciones completadas para guardar tu progreso.
- Abre **Referencia CSS** para buscar y filtrar **672 propiedades, 144 selectores, 19 reglas @ y 107 funciones**. Cada ficha explica para qué sirve, qué preparar antes de probar, cómo leer el ejemplo y qué errores evitar. Las propiedades incluyen una tabla de valores con botones para probarlos; las funciones explican sus argumentos. Hay retos con código de apoyo, lecciones y propiedades relacionadas, un diccionario básico y sintaxis completa opcional.
- Abre **Playground** para experimentar libremente. Puedes descargar tu ejemplo como un HTML autónomo con sus estilos incluidos.
- Usa **Ctrl + K** para buscar lecciones y entradas. El control de luna cambia el tema del sitio.

## Archivos

| Archivo | Contenido |
| --- | --- |
| `index.html` | Documento principal y estructura accesible |
| `styles.css` | Diseño adaptable y temas claro/oscuro |
| `app.js` | Navegación, editores, búsqueda, progreso y exportación |
| `lessons.js` | Ruta progresiva, ejemplos, retos y soluciones |
| `reference.js` | Preparación de ejemplos y contextos de la referencia |
| `learning.js` | Guías para principiantes, significado de valores, condiciones de uso, errores y ejercicios de referencia |
| `descriptions.js` | Explicaciones en español de propiedades habituales |
| `catalogs.js` | Catálogos incluidos como JavaScript clásico para funcionar también con doble clic |
| `properties.json`, `selectors.json`, `at-rules.json`, `functions.json` | Copias de los datos originales de referencia; el sitio no los descarga al abrirse |
| `MDN-LICENSE.txt` | Licencia CC0 de los metadatos de MDN |
| `.nojekyll` | Publicación estática directa en GitHub Pages |

## Notas de funcionamiento

Puedes **abrir `index.html` con doble clic** o publicarlo en GitHub Pages. Conserva los archivos `.js` y `styles.css` en la misma carpeta que el HTML. La aplicación utiliza scripts clásicos y el catálogo incluido en `catalogs.js`: no utiliza módulos JavaScript ni `fetch()` para arrancar, así que no necesita un servidor local.

Si ya tenías el sitio abierto, cierra esa pestaña y abre de nuevo el `index.html` actualizado. En GitHub Pages puedes hacer una recarga completa con **Ctrl + F5** tras subir los cambios.

Los borradores y el progreso se guardan en el almacenamiento local de ese navegador, sin cuenta ni sincronización. Al borrar los datos del sitio se pierde ese estado. El contenido principal no depende de servicios externos; las fuentes de Google son opcionales y tienen fuentes de reserva.

La vista previa usa un iframe aislado con sandbox y una política CSP: ejecuta HTML y CSS, permite SVG incrustado e imágenes de datos, y bloquea JavaScript, envíos de formularios y recursos externos. El HTML descargado contiene el CSS base del laboratorio y el CSS del usuario.

CSS sigue evolucionando. El catálogo es una copia de **MDN Data consultada el 26 de octubre de 2026**, incluye entradas experimentales, extensiones y propiedades obsoletas, y no garantiza compatibilidad universal. Algunas características necesitan impresión, una API, Shadow DOM, una fuente especial u otro contexto indicado en su entrada; no todas pueden producir un efecto visible en un iframe básico. Los ejemplos de referencia preparan contextos habituales y ofrecen valores para explorar; para condiciones exactas consulta el enlace de MDN.

## Verificación realizada

Se comprobaron la integridad de las 60 lecciones, la generación de ejemplos de referencia, la sintaxis del CSS con un analizador y los controles principales mediante pruebas de DOM en memoria: edición y ejecución explícita, aplicación conjunta de HTML/CSS, restauración, progreso, persistencia de borradores, búsqueda, filtros, rutas, soluciones, tema y ancho compacto.

La corrección de apertura directa se verificó ejecutando los scripts clásicos, en el mismo orden que `index.html`, con una ubicación `file://`, con y sin acceso a almacenamiento local, y con una ubicación HTTPS bajo un subdirectorio de GitHub Pages. En los tres escenarios se comprobó el arranque, las 60 rutas y los 942 registros del catálogo, sin solicitudes `fetch()`. También se comprobó que la falta de portapapeles no rompe la aplicación y que hay contenido inicial si falla un archivo JavaScript. Estas son pruebas de lógica y DOM en memoria, no una comprobación visual de un navegador real.

La comprobación visual en navegador quedó pendiente porque la política del navegador de la sesión bloqueó el acceso a la vista local. Los tests de DOM no comprueban el renderizado real ni la compatibilidad de cada función CSS.

Fuentes del catálogo: [MDN Data](https://github.com/mdn/data), [referencia CSS de MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) y [índice CSS del W3C](https://www.w3.org/Style/CSS/all-properties.en.html). Las instrucciones de publicación siguen la [documentación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
