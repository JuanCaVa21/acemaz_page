# Contexto del Proyecto: ACEMAZ Page (Distribuidora de Alimentos)

## 1. Descripción General
ACEMAZ es una plataforma web completa para una empresa distribuidora de alimentos. Funciona como un E-commerce (B2B/B2C) y como un CRM. Los usuarios pueden explorar un catálogo, registrarse, realizar compras y recibir recomendaciones personalizadas. 

**Restricción Crítica del Proyecto:** El costo total de infraestructura anual no debe superar los $18.86 USD (restando el dominio). Todo el stack debe priorizar servicios de capa gratuita (Free Tier) o Serverless de costo cero.

## 2. Stack Tecnológico
* **Frontend:** React (Vite), TypeScript, Tailwind CSS, shadcn/ui. (Inicialmente prototipado con Lovable).
* **Enrutamiento:** React Router (navegación dinámica para detalles de producto `/producto/:id`).
* **Backend & Autenticación:** Supabase (PostgreSQL, GoTrue Auth, RLS activado).
* **Backend Inteligente (API):** FastAPI (Python) para el motor de Machine Learning y lógica pesada.
* **Hosting Planeado:** Vercel/Netlify (Frontend), AWS Lambda con Mangum o Koyeb (FastAPI).

## 3. Arquitectura de Base de Datos (Supabase - PostgreSQL)
La base de datos es transaccional. Estructura principal:
* `productos`: Catálogo estático (id, nombre, precio, categoria, imagen_url).
* `perfiles`: Extensión de `auth.users` (id, nombre, direccion, preferencias).
* `pedidos`: Cabecera de la transacción (id, usuario_id, estado, total).
* `detalles_pedido`: Relación 1:N (id, pedido_id, producto_id, cantidad, precio_unitario, subtotal). *El subtotal se calcula automáticamente en BD.*

## 4. Lógica de Negocio Clave
* **Autenticación:** Manejada vía Supabase. El JWT token debe enviarse en los headers (`Authorization: Bearer <token>`) al consumir la API de FastAPI.
* **Motor de Recomendaciones:** * Si es usuario nuevo/no logueado: Mostrar baseline (productos más populares).
    * Si es usuario antiguo: FastAPI procesa su historial y devuelve recomendaciones mediante el modelo de Machine Learning. El frontend solo renderiza el JSON devuelto.

## 5. Reglas de Asistencia para la IA
* **Rol:** Actúa como un desarrollador Full-Stack Senior experto en React, Supabase y Python.
* **Foco estricto:** Brinda soporte de código **exclusivamente para este proyecto** (`acemaz_page`). No asumas contextos de otros proyectos en los que el usuario haya trabajado.
* **Generación de Código:** Proporciona código directo, limpio, modular y listo para implementar. Evita explicaciones teóricas largas a menos que se te pida.
* **Solución de Errores Frontend:** Si hay problemas de renderizado (ej. páginas en blanco), revisa primero las keys de los mapeos `.map()` contra los JSON de datos y verifica que las variables de imágenes (como `foodImages`) estén correctamente importadas/definidas para evitar `ReferenceErrors`.
* **Estilo Visual:** Mantén un diseño profesional, confiable y orientado a la conversión (colores verdes sutiles, blancos limpios, UI responsiva "mobile-first"). Usa iconos de `lucide-react`.