# EvenTOP

## Descripción del Proyecto

**EvenTOP** es una innovadora plataforma web que conecta a los usuarios con los eventos más emocionantes en España. Nuestra misión es simplificar la experiencia de encontrar y adquirir entradas online, destacando eventos únicos en música, arte, deportes y mucho más. 

### Funcionalidades principales:
- **Búsqueda avanzada**: Encuentra eventos por ciudad o categoría.
- **Integración con Ticketmaster API**: Asegura datos actualizados de eventos.
- **Mapas interactivos con Leaflet**: Localiza los lugares con facilidad.
- **Sistema de autenticación con Firebase**: Seguridad y personalización para los usuarios.
- **Diseño moderno y accesible**: Creado con Figma y herramientas de diseño colaborativo.

Plataforma desarrollada con un enfoque colaborativo, utilizando **Miro**, **Canva**, y **ChatGPT** para la planificación y optimización.

---

## Planning

### Convenciones
- **Control de versiones**: Utilizamos GitHub para mantener el orden en el código y permitir el trabajo en equipo.
- **Planificación**: Diseñamos un roadmap detallado en Miro para asegurar una entrega estructurada.

---

## Creación del Repositorio y Organización
- Repositorio en GitHub: [Enlace al repositorio](https://github.com/EvenTOP/codeop)
- División en ramas:
  - `main`: Código listo para producción.
  - `feature/*`: Funcionalidades específicas.
  - `bugfix/*`: Soluciones a errores identificados.

---

## Scaffolding
Estructura inicial del proyecto creada con **Vite** y componentes de Vue:
```bash
vue create eventop
```

### Instalación de dependencias principales:
```bash
npm install vue vue-router pinia leaflet firebase axios
```

---

## Benchmarking
Analizamos plataformas líderes como Eventbrite, MeetUp y Time Out para identificar características clave y optimizar la experiencia del usuario en EvenTOP.

---

## User Person
Eventbrite

El Buyer Persona de Eventbrite abarca personas de 18 a 55 años, activas, sociables y con intereses diversos como música, gastronomía y negocios. Estas personas buscan experiencias variadas y usan plataformas digitales para descubrir y adquirir entradas, generalmente de nivel socioeconómico medio-alto. Eventbrite se presenta como una plataforma moderna y accesible, enfocada en la facilidad de uso y la diversidad de eventos. El usuario típico explora categorías, busca eventos específicos, filtra por ubicación y fecha, revisa detalles y compra entradas digitalmente. Posteriormente, asisten al evento y reciben recomendaciones personalizadas, garantizando una experiencia completa y adaptada a sus intereses.

---

## Diseño
- **Wireframes y prototipos**: Diseñados en Figma con un enfoque en la simplicidad y accesibilidad.
- **Estilo visual**: Diseñado con TailwindCSS para una experiencia moderna y responsiva.

---

## Integración de APIs
- **Ticketmaster API**: Información sobre eventos en tiempo real.
- **Leaflet**: Mapas dinámicos para localizar los eventos.
- **Firebase**: Autenticación y base de datos en tiempo real.

---

## Funcionalidades
<!-- - **Sistema de autenticación**: Registro y login de usuarios. --> agregar la busqueda por ciudad
- **Gestión de favoritos**: Permite guardar eventos preferidos.
- **Filtros dinámicos**: Por ubicación, fecha y categoría.

---

## Frontend
- **Framework**: Construido con Vue.js para un desarrollo modular.
- **Estado global**: Implementado con Pinia para la gestión eficiente de datos.
- **UI Responsiva**: Utilizando TailwindCSS.

---

## Deployment
Plataforma desplegada en Firebase Hosting:
[https://eventop-codeop.web.app/](https://eventop-codeop.web.app/)

---

## Indicaciones para Utilizar el Proyecto

### Requisitos Previos
1. Asegúrate de tener instalados:
   - **Node.js** (versión 22.12.0 o superior).
   - **npm** (gestor de paquetes de Node.js).

2. Clona el repositorio:
```bash
git clone https://github.com/EvenTOP/codeop.git
```

3. Accede al directorio del proyecto:
```bash
cd eventop
```

### Instalación
1. Instala las dependencias necesarias:
```bash
npm install
```

2. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto.
   - Añade las claves necesarias, como la API key de Ticketmaster:
```env
VITE_API_KEY=tu_clave_de_ticketmaster
```

### Ejecución
1. Inicia el servidor de desarrollo:
```bash
npm run dev
```
2. Abre tu navegador y ve a `http://localhost:3000` para interactuar con la aplicación.

### Build para Producción
1. Genera los archivos optimizados:
```bash
npm run build
```
2. Previsualiza el build localmente:
```bash
npm run preview
```

### Despliegue
El proyecto está configurado para ser desplegado en Firebase Hosting. Para desplegar, asegúrate de tener Firebase CLI configurado y ejecuta:
```bash
firebase deploy
```

---

## README
Este archivo proporciona toda la información esencial sobre el proyecto y sirve como referencia para desarrolladores y colaboradores.

---

## Presentación (Demo)
- **Video**: Disponible en la carpeta `/public/video-demo.mp4`.
- **PDF del Proyecto**: Disponible en la carpeta `/public/project-documentation.pdf`.
- **Presentación**: [Enlace a la presentación](./public/presentation.html).

---

## Tecnologías Utilizadas

![Vue.js](https://img.shields.io/badge/Vue.js-35495E?logo=vue.js&logoColor=4FC08D)
![Vite](https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=FFD62E)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=fff)
![Leaflet](https://img.shields.io/badge/Leaflet-199900?logo=leaflet&logoColor=fff)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=fff)
![Mapbox](https://img.shields.io/badge/Mapbox-000000?logo=mapbox&logoColor=fff)
![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff)

---

## Participantes del Proyecto

| Nombre | Rol | GitHub | LinkedIn |
|--------|-----|--------|----------|
| Zora  | La Ananlítica | [GitHub](https://github.com/ZoraidaMorenoCadenas) | [LinkedIn](https://www.linkedin.com/in/zoraida-moreno/) |
| Yali  | La Veloz | [GitHub](https://github.com/yali1986) | [LinkedIn](https://www.linkedin.com/in/yalinag%C3%B3mez-frontend-developer/) |
| Ale   | El Paciente | [GitHub](https://github.com/AlejandroMurr) | [LinkedIn](https://www.linkedin.com/in/alejandro-murr-4287a0202/) |
| Mava  | La Persistente | [GitHub](https://github.com/mavafiza) | [LinkedIn](https://www.linkedin.com/in/mavafigalloz/) |

---

## Agradecimientos
Agradecemos especialmente a:
- **Anna Sfairopoulou** y **Felix Rodríguez**, por su guía y apoyo durante este proyecto.

---

# License
Este proyecto está bajo la licencia MIT. ¡Disfrútalo y contribuye! 🎉
