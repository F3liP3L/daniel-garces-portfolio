# Landing Page Profesional - Daniel Garcés

Proyecto Angular (standalone) para una landing page corporativa de consultoría jurídica.

## Requisitos

- Node.js 22+
- npm 11+

## Ejecutar en local

```bash
npm install
npm start
```

La aplicación estará disponible en `http://localhost:4200/`.

## Build de producción

```bash
npm run build
```

## Despliegue en GitHub Pages

1. Compilar con base href del repositorio:

   ```bash
   npm run build:github-pages
   ```

2. Publicar el contenido de `dist/dg-landing/browser` en la rama/configuración de GitHub Pages.
3. Verificar que GitHub Pages esté apuntando al artefacto publicado.

## Pruebas

```bash
npm test -- --watch=false
```
