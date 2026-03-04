# HotelCode — Plan del Proyecto

## Identidad del Proyecto

- **Nombre**: HotelCode
- **URL**: `hotelcode.stackbp.es`
- **Propósito**: Compartir experiencia real en operaciones hoteleras y mostrar cómo automatizar procesos de hotel mediante código e IA
- **Narrativa**: Mix personal + profesional — contenido técnico con historia personal como hilo conductor ("De hotelero a developer: automatizando operaciones reales con código e IA")

---

## Decisiones Técnicas

| Aspecto | Decisión | Motivo |
|---------|----------|--------|
| Framework | **Astro 5.x** (estable) | SEO, contenido estático, rendimiento |
| Modo de renderizado | **SSG** (Static Site Generation) | Todo el contenido es público y estático. Máximo rendimiento y SEO. Migrable a Hybrid si se necesita una ruta dinámica en el futuro |
| Styling | **Tailwind CSS v4.2** (Vite plugin) | `@astrojs/tailwind` está deprecated para v4. Se usa el Vite plugin nativo |
| Package manager | **pnpm** | Rápido, eficiente en disco |
| Node.js | **v22.16.0** | Compatible con Astro 5.x y futuro Astro 6 |
| Deploy | **Vercel** | Fácil configuración de subdominios |
| Idioma | **Español** | Enfoque SEO en mercado hispanohablante. Inglés se evaluará más adelante |
| Repo | **Público** en GitHub | Transparencia, SEO, credibilidad |
| Backend | **No** | Contenido estático, sin necesidad de servidor. Servicios externos (Buttondown, Mailchimp) para newsletter si se necesita |
| Auth/Login | **No** | No hay contenido privado ni dashboard. Se puede añadir con Hybrid + servicio auth (Clerk, Auth.js) si se necesita en el futuro |
| Responsive | **Obligatorio** | Tailwind mobile-first (`sm:`, `md:`, `lg:`) |
| Imágenes | **Cloudinary** | No dependen del dominio |
| SEO / Open Graph | **Configurado desde el inicio** | og:image, og:title, og:description para redes sociales y WhatsApp |
| RSS | **@astrojs/rss** | Distribución de contenido del blog |
| Sitemap | **@astrojs/sitemap** | Para Google Search Console |
| Analytics | **Ligero** (Plausible, Umami o Vercel Analytics) | No Google Analytics — penaliza rendimiento |
| Fuentes | **Poppins** via `@fontsource/poppins` (self-hosted, pesos 400/600/700) | Sin requests externos a Google Fonts |
| robots.txt | **Sí** | Controlar indexación |
| Página 404 | **src/pages/404.astro** | Soporte nativo de Astro |
| Dark mode | **Class-based** (`.dark` en `<html>`) | Toggle + localStorage + prefers-color-scheme. Paleta zinc con tinte azul frío + fondo violeta en Hero/Footer |

### Notas sobre Tailwind v4 + Astro
- Usar `@reference` cuando se use `@apply` dentro de `<style>` en componentes `.astro`
- No usar `@astrojs/tailwind` — usar el Vite plugin directamente en `astro.config.mjs`

---

## Estructura del Sitio (Fases)

### Fase 1 — MVP
- **Landing page**: Presentación del proyecto, quién soy, qué hago, por qué
- **Blog**: Artículos sobre automatización hotelera (Content Collections + MDX)
- **Caso de estudio**: Página dedicada a Four Points como proyecto de referencia

### Fase 2 — Contenido
- **Embeds de YouTube**: Tutoriales integrados en artículos
- **Categorías de contenido** (ver Roadmap de Contenido)
- **Página de canal/vídeos**: Listado de tutoriales organizados
- **Páginas de módulos**: Cada card de la sección Módulos enlaza a su propia página con vídeos explicativos. Estilo visual más arriesgado (colores vivos por módulo)

### Fase 3 — Expansión
- **Demo interactiva**: Enlace directo a Four Points como demo live
- **Newsletter / suscripción** (servicio externo, sin backend propio)

---

## Roadmap de Contenido

### Categorías principales

1. **Scheduling / Horarios**
   - Cómo gestionar turnos de recepción con código
   - De Excel a app: sistema de horarios con validación automática
   - Constraints y reglas (descansos, rotaciones, vacaciones)

2. **Recepción / Front Det**
   - Logbook digital: centralizar comunicación entre turnos
   - Check-in/check-out: flujos automatizados
   - Gestión de incidencias

3. **Comunicación entre departamentos**
   - De WhatsApp a app centralizada
   - Sistema de mensajería interna
   - Notificaciones y seguimiento de tareas

4. **Parking / Servicios auxiliares**
   - Gestión de parking del hotel
   - Analytics y estadísticas operativas

5. **Mantenimiento**
   - Workflow de incidencias: pending → in-progress → completed
   - Tracking y priorización

6. **IA aplicada a hoteles**
   - Cómo usar IA para generar horarios
   - IA para análisis de datos operativos
   - Asistentes IA para recepción

7. **De hotelero a developer**
   - Mi historia personal
   - Cómo aprender a programar siendo profesional hotelero
   - Herramientas y recursos
   - Developer por necesidad: cuando la tecnología no existe, la creas

---

## Arquitectura Técnica (Astro)

```
hotelcode/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   └── og-image.png
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── content/          # Markdown/MDX para blog posts
│   │   └── blog/         # Posts en español
│   ├── layouts/          # Layout base, blog layout
│   ├── pages/            # Páginas en español
│   └── styles/           # Estilos globales (Tailwind v4 via Vite plugin)
└── .env                  # SITE_URL, etc. (nunca hardcodear)
```

### Principios técnicos
- **NUNCA hardcodear URLs** — todo mediante `SITE_URL` en `.env`
- **Canonical URLs dinámicas** — generadas desde variable de entorno
- **Sitemap dinámico** — Astro lo genera automáticamente
- **Imágenes en Cloudinary** — no dependen del dominio
- **SSG puro** — todo se genera en build time, sin funciones serverless

---

## Próximos Pasos

1. [x] Inicializar proyecto Astro 5.x con pnpm
2. [x] Configurar Tailwind CSS v4.2 (Vite plugin)
3. [x] Configurar SEO base: Open Graph, sitemap, RSS, robots.txt, 404
4. [x] Instalar fuentes con @fontsource (Poppins 400/600/700)
5. [x] Dark mode (toggle + localStorage + prefers-color-scheme, paleta zinc con tinte frío)
6. [x] Crear landing page MVP (español, responsive, dark mode)
7. [x] Landing page visual overhaul: hover effects, mouse glow, btn-shine, color system indigo/violet
8. [x] Logo hexagonal SVG con HC + hover underline trace
9. [x] Favicon.svg actualizado con logo propio
10. [ ] Generar favicon pack completo en realfavicongenerator.net
11. [ ] Configurar analytics (elegir: Plausible / Umami / Vercel Analytics)
12. [ ] Configurar deploy en Vercel con subdominio `hotelcode.stackbp.es`
13. [ ] Crear páginas internas de módulos `src/pages/modulos/[slug].astro`
14. [ ] Primer artículo del blog
15. [ ] Crear canal de YouTube "HotelCode"
16. [ ] Primer vídeo: introducción al proyecto

---

## Notas

- El idioma del sitio es **español** — enfoque SEO en mercado hispanohablante. Inglés se evaluará más adelante
- Four Points es el proyecto técnico de referencia y caso de estudio principal
- Sin backend ni login — si se necesita funcionalidad dinámica, se evalúa migrar a modo Hybrid + servicios externos
