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

# Objetivo de la estructura

La estructura frontend fue diseñada para:

- Mantener organización del código
- Facilitar escalabilidad
- Separar responsabilidades
- Mejorar mantenimiento del proyecto
- Preparar integración con JWT y backend
- Permitir crecimiento modular del sistema