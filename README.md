# 🚀 API server - Banco de datos - Documentación

API construida con **Fastify**, **Drizzle ORM**, **PostgreSQL**, utilizando contenedores Docker y documentación interactiva con **Swagger UI** y **Scalar**.

---

## 📦 Tecnologías y Conceptos

### 🧱 Bases de Datos

- **PostgreSQL** – Base relacional, utilizada para lecturas
- **Redis** – Cache y datos temporales
- **ScyllaDB / Cassandra** – Alta performance para datos sobrecargados

---

### 🐳 Docker

Utilizado para aislar y ejecutar servicios en contenedores.

Docker (Maquina virtual CPU/Memoria rapida: rueda un sistema operacional dentro de otro sistema operacional, funciona mas o menos de la misma forma). Reaprovecha todo el sistema de la maquina que lo hospeda. Ex: postgres:17 - redis:10 - Scylladb: 12

# Referencias: Docker Hub


```bash
docker compose up -d       # Inicia los contenedores en segundo plano
docker-compose stop        # Detiene los contenedores
docker ps                  # Lista contenedores activos
```

---

### 🧭 Swagger UI - Swagger UI -  Scalar

API cuenta con documentación interactiva para explorar endpoints, probar rutas y visualizar esquemas de datos.

---

## 🧬 Comandos Drizzle ORM

Drizzle ORM permite manejar el esquema de la base de datos de forma declarativa y versionada. Aquí están los comandos principales:

### 🔧 `npx drizzle-kit generate`

Genera los archivos de migración automáticamente a partir del esquema definido en tu proyecto.

> 📌 Úsalo cuando hayas hecho cambios en tus modelos o tablas.

---

### 🚀 `npx drizzle-kit migrate`

Aplica las migraciones generadas a la base de datos.

> 📌 Úsalo después de `generate` para sincronizar tu base de datos con el nuevo esquema.

---

### 🧪 `npx drizzle-kit studio`

Abre una interfaz visual para explorar el esquema de tu base de datos y verificar las migraciones.

> 📌 Útil para revisar la estructura actual y validar que todo esté correcto.

---

### 📝 Flujo recomendado

1. Modifica tu esquema (por ejemplo, agrega una nueva tabla o columna)
2. Ejecuta `npx drizzle-kit generate`
3. Ejecuta `npx drizzle-kit migrate`
4. (Opcional) Ejecuta `npx drizzle-kit studio` para visualizar los cambios

---

### Instalación:

```bash
npm i @fastify/swagger @fastify/swagger-ui
npm i drizzle-orm pg   
npm i drizzle-kit -D

npm i zod fastify-type-provider-zod
npm i @fastify/swagger 

npm i @fastify/swagger-ui
http://localhost:3333/docs

npm i @scalar/fastify-api-reference
http://localhost:3333/docs/
````




