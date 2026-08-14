# 🐾 Aplicación Veterinaria

Aplicación web para una clínica veterinaria, desarrollada con **React + Vite**.

El proyecto se encuentra actualmente en una primera etapa de desarrollo y está enfocado en ofrecer información sobre la veterinaria, sus servicios y productos disponibles. La aplicación está preparada para seguir creciendo y agregar nuevas funcionalidades en futuras versiones.

## 🚀 Tecnologías utilizadas

- **React** — desarrollo de la interfaz de usuario.
- **Vite** — entorno de desarrollo y herramienta de build.
- **React Router DOM** — navegación y manejo de rutas.
- **Styled Components** — creación y gestión de estilos mediante CSS-in-JS.
- **React Hook Form** — gestión y validación de formularios.
- **Zustand** — manejo del estado global de la aplicación.
- **Swiper** — creación de sliders, carruseles y contenido interactivo.

## 📋 Funcionalidades actuales

La aplicación cuenta actualmente con las siguientes secciones:

- 🏠 **Inicio** — presentación general de la veterinaria.
- 🩺 **Servicios** — información sobre los diferentes servicios ofrecidos.
- 🛒 **Tienda** — visualización de productos disponibles.
- 📞 **Contacto** — información y medios de contacto.
- ❓ **Ayuda** — sección destinada a resolver dudas frecuentes y brindar información útil.

> Actualmente la aplicación funciona principalmente como **frontend**. La tienda permite visualizar productos, pero todavía no cuenta con un sistema de compra o procesamiento de pedidos.

## 📁 Estructura del proyecto

La estructura puede variar a medida que el proyecto continúe creciendo, pero actualmente se organiza siguiendo una estructura basada en componentes y páginas:

```text
src/
├── assets/
├── components/
├── pages/
├── routes/
├── store/
├── styles/
├── App.jsx
└── main.jsx
```

### Principales carpetas

- `assets/` — imágenes y otros recursos estáticos.
- `components/` — componentes reutilizables de la interfaz.
- `pages/` — páginas principales de la aplicación.
- `routes/` — configuración de las rutas utilizando React Router DOM.
- `store/` — estados globales administrados mediante Zustand.
- `styles/` — estilos y configuraciones relacionadas con Styled Components.
- `App.jsx` — componente principal de la aplicación.
- `main.jsx` — punto de entrada de React.

## ⚙️ Instalación

Para ejecutar el proyecto localmente, primero hay que clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresar a la carpeta del proyecto:

```bash
cd <NOMBRE_DEL_PROYECTO>
```

Instalar las dependencias:

```bash
npm install
```

## ▶️ Ejecutar el proyecto

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Una vez iniciado, Vite mostrará en la terminal la dirección local donde se encuentra disponible la aplicación.

## 🧩 Arquitectura

El proyecto utiliza una arquitectura basada en componentes de React, buscando mantener separadas las responsabilidades de cada parte de la aplicación.

El manejo de navegación se realiza mediante **React Router DOM**, mientras que **Zustand** permite centralizar aquellos estados que necesitan ser compartidos entre diferentes componentes.

Los formularios son gestionados mediante **React Hook Form**, facilitando su control y validación.

Para los estilos se utiliza **Styled Components**, permitiendo definir los estilos directamente asociados a los componentes de React.

## 🔮 Próximas funcionalidades

El proyecto está pensado para continuar creciendo. Algunas funcionalidades que podrían incorporarse en futuras etapas son:

- 🛍️ Carrito de compras.
- 💳 Sistema de compra y pagos.
- 👤 Registro e inicio de sesión de usuarios.
- 📦 Gestión de pedidos.
- 📅 Sistema de reserva de turnos.
- 🐶 Historial de mascotas.
- 🔐 Integración con backend.
- 🗄️ Base de datos.
- 👨‍⚕️ Panel de administración.
- 📱 Mejoras y optimizaciones para dispositivos móviles.

## 📌 Estado del proyecto

**En desarrollo 🚧**

Actualmente el proyecto se encuentra en una primera etapa, enfocada principalmente en la interfaz y experiencia de usuario. La arquitectura está preparada para incorporar nuevas funcionalidades y una futura integración con un backend.

## 👨‍💻 Desarrollo

Proyecto desarrollado con **React + Vite**, utilizando un conjunto de herramientas orientadas a crear una aplicación moderna, modular y escalable.
