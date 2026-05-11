# Inicialización Frontend

## 1. Inicialización del proyecto frontend

Se utilizó Vite para crear el frontend del proyecto con React y TypeScript.

Comando ejecutado:

```bash
npm create vite@latest .
```

### Tecnologías seleccionadas

```txt
React
TypeScript
```

---

## 2. Instalación de dependencias iniciales

Se instalaron las dependencias del proyecto frontend.

Comando ejecutado:

```bash
npm install
```

---

## 3. Ejecución del frontend

Se ejecutó el proyecto en modo desarrollo.

Comando:

```bash
npm run dev
```

---

## 4. Instalación de dependencias adicionales

Se instalaron librerías necesarias para la conexión con el backend y manejo de rutas.

Dependencias instaladas:

- axios
- react-router-dom

Comando:

```bash
npm install axios react-router-dom
```

---

# Limpieza inicial del proyecto

Se eliminaron archivos y recursos innecesarios generados automáticamente por Vite para comenzar con una estructura limpia y profesional.

---

## Archivos eliminados

```txt
src/assets/
src/App.css
src/index.css
README.md
ETC...
```

---

## Archivos conservados

```txt
package.json
package-lock.json
vite.config.ts
tsconfig.json
tsconfig.app.json
tsconfig.node.json
index.html
src/App.tsx
src/main.tsx
```

---

# Estructura inicial frontend

Se organizó la carpeta `src` utilizando una arquitectura escalable y modular.

### Estructura creada

```txt
src/
│
├── api/
├── components/
├── context/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── styles/
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

---

# Descripción de carpetas

| Carpeta | Descripción |
|---|---|
| api | Conexión y peticiones al backend |
| components | Componentes reutilizables |
| context | Manejo de estados globales |
| hooks | Custom hooks React |
| layouts | Estructuras generales de páginas |
| pages | Vistas y pantallas principales |
| routes | Configuración de rutas React Router |
| styles | Estilos globales y personalizados |

---

# Desarrollo Frontend — Autenticación y Layout

## 5. Configuración de Material UI

Se instaló Material UI para la construcción de interfaces modernas y reutilizables.

### Dependencias instaladas

- @mui/material
- @emotion/react
- @emotion/styled

### Comando ejecutado

```bash
npm install @mui/material @emotion/react @emotion/styled
```

---

## 6. Implementación de tema global

Se implementó el sistema de temas de Material UI para centralizar colores, tipografía y estilos globales del proyecto.

### Archivo creado

```txt
src/theme/theme.ts
```

### Funcionalidades implementadas

- Paleta de colores global
- Configuración de colores primarios
- Configuración de colores secundarios
- Colores de fondo
- Colores de texto
- Configuración tipográfica global

---

## 7. Integración ThemeProvider

Se configuró `ThemeProvider` en la aplicación para permitir acceso global al tema de Material UI.

### Archivo modificado

```txt
src/main.tsx
```

### Funcionalidades implementadas

- Integración de tema global
- Uso de CssBaseline
- Acceso global a palette
- Centralización visual de estilos

---

## 8. Desarrollo pantalla Login

Se desarrolló la pantalla de autenticación para el inicio de sesión de usuarios.

### Archivo creado/modificado

```txt
src/pages/Login.tsx
```

### Funcionalidades implementadas

- Inicio de sesión
- Manejo de estados React
- Consumo de API mediante Axios
- Validación de formulario
- Almacenamiento de token JWT
- Redirección al dashboard
- Integración Material UI
- Diseño visual profesional
- Uso de tema global

---

## 9. Desarrollo pantalla Register

Se desarrolló la pantalla de registro de usuarios.

### Archivo creado/modificado

```txt
src/pages/Register.tsx
```

### Funcionalidades implementadas

- Registro de usuarios
- Manejo de formulario React
- Consumo endpoint register
- Validación inicial
- Redirección al login
- Integración visual Material UI
- Uso de tema global
- Navegación entre pantallas

---

## 10. Configuración Axios

Se configuró Axios para centralizar la conexión con el backend.

### Archivo creado

```txt
src/api/axios.ts
```

### Funcionalidades implementadas

- Conexión centralizada con backend
- Configuración baseURL
- Preparación para JWT
- Reutilización global de peticiones HTTP

---

## 11. Implementación React Router

Se implementó React Router para manejar la navegación SPA del frontend.

### Archivo creado

```txt
src/routes/AppRoutes.tsx
```

### Funcionalidades implementadas

- Navegación SPA
- Rutas públicas
- Rutas privadas iniciales
- Integración de páginas principales

### Rutas actuales

```txt
/
/register
/dashboard
```

---

## 12. Desarrollo layout reutilizable

Se implementó una estructura reutilizable para las vistas privadas del sistema.

### Archivos creados

```txt
src/layouts/DashboardLayout.tsx
src/components/Header.tsx
src/components/SidebarMenu.tsx
```

---

# 13. Implementación Header

El componente `Header` se creó como una estructura reutilizable para la parte superior del sistema, dejando preparada la integración futura de información del usuario autenticado.

### Funcionalidades implementadas

- Barra superior reutilizable
- Diseño reutilizable
- Integración visual con el layout principal

---

## 14. Implementación SidebarMenu

El componente `SidebarMenu` se creó para manejar módulos, submódulos y opciones del sistema.

### Funcionalidades implementadas

- Menú lateral dinámico
- Módulos del sistema
- Submódulos
- Opciones de navegación
- Navegación reutilizable
- Preparación para roles y permisos

---

## 15. Implementación DashboardLayout

El layout `DashboardLayout` se creó para reutilizar la estructura privada del sistema.

### Estructura implementada

```txt
Header
SidebarMenu
MainContent
```

### Funcionalidades implementadas

- Header reutilizable
- Sidebar reutilizable
- Contenedor dinámico de páginas
- Separación visual de contenido
- Escalabilidad de vistas privadas

---

# Estado actual del frontend

El proyecto frontend cuenta actualmente con:

- Arquitectura modular escalable
- Integración con backend Node.js
- Sistema inicial de autenticación JWT
- Navegación SPA
- Layout reutilizable
- Componentes reutilizables
- Sistema global de temas con Material UI
- Separación clara de responsabilidades

---

---

# Próximas mejoras planificadas

Las siguientes funcionalidades quedaron planificadas para próximos commits:

- Protección completa de rutas privadas
- Persistencia de sesión autenticada
- Context API para autenticación global
- Mostrar información del usuario autenticado en Header
- Implementación de roles y permisos
- Mejoras visuales responsivas
- Manejo global de errores HTTP
- Interceptores Axios para JWT
- Logout automático por expiración de token
- Optimización de estructura modular