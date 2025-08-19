# 📚 SchooL API - TESTing Back-End

School API es un proyecto backend educativo construido con TypeScript, Drizzle ORM, Vitest y PostgreSQL. Incluye pruebas automatizadas, paginación eficiente, mocking, factories y cobertura de código.

<img width="1606" height="842" alt="Testing" src="https://github.com/user-attachments/assets/263b0e08-9b0b-45c8-a145-0f2092416e93" />


------------------------------------------------------------

## 🚀 Instalación de Herramientas
```
npm install
npm i vitest -D
npm i supertest -D
npm i @types/supertest -D
npm i dotenv-cli -D
npm i -D @vitest/coverage-v8
```
------------------------------------------------------------

# 🧪 Postico 2

Postico 2 es una aplicación nativa para macOS diseñada específicamente para trabajar con bases de datos PostgreSQL y compatibles como Amazon Redshift, CockroachDB y Greenplum.

Ideal para desarrolladores, analistas, investigadores y estudiantes que buscan una interfaz gráfica intuitiva para gestionar sus bases de datos.

### Características principales

- **Consultar y editar datos** directamente en las tablas
- **Ejecutar queries SQL** con un editor moderno y soporte para múltiples archivos
- **Modificar estructuras de tablas** con un editor visual (columnas, índices, constraints)
- **Editar funciones y procedimientos almacenados**
- **Organizar conexiones** a múltiples servidores, con sincronización vía iCloud o Dropbox
------------------------------------------------------------

## 🧪 Pruebas automatizadas

Ejecutar todas las pruebas:
```
npm run test
```
Ejecutar pruebas específicas:
```
npm run test src/routes/get-courses.test.ts
```
Ver cobertura de código:

open coverage/index.html

------------------------------------------------------------

## 🧬 Tipos de pruebas

- Unitarias: verifican funciones aisladas
- Integración: prueban la interacción entre módulos
- E2E (End to End): simulan el comportamiento real de la app en producción

E2E = prueba de punta a punta, incluyendo todas las capas. Son más pesadas pero más representativas.

------------------------------------------------------------

## 🧪 Mocking y Pattern Factories

- Mocking: simula comportamientos reales sin depender de servicios externos
- Factories: generan datos ficticios para pruebas

Biblioteca recomendada:
```
npm i @faker-js/faker -D
```
------------------------------------------------------------

## 🌐 Paginación

Offset-based pagination:

SELECT * FROM courses LIMIT 10 OFFSET 20;

Cursor-based pagination:

SELECT * FROM courses WHERE id > 'last_id' LIMIT 10;

------------------------------------------------------------

## 🧪 Comparación de herramientas de testing

Herramienta   | Velocidad   | Ideal para
--------------|-------------|-------------------------------
Jest          | Más lenta   | Proyectos grandes con mocks complejos
Vitest        | Más rápida  | Desarrollo moderno con TypeScript

------------------------------------------------------------

## 📦 Scripts útiles
```
"scripts": {
  "dev": "tsx watch --env-file .env src/server.ts",
  "db:seed": "tsx --env-file .env src/database/seed.ts",
  "db:generate": "drizzle-kit generate",
  "db:migrate": "drizzle-kit migrate",
  "db:studio": "drizzle-kit studio",
  "pretest": "dotenv -e .env.test drizzle-kit migrate",
  "test": "dotenv -e .env.test vitest run"
}
```
------------------------------------------------------------

## 🛠️ Variables de entorno

Usamos dotenv-cli para cargar variables:
```
npm i dotenv-cli -D
```
Ejemplo de uso:

dotenv -e .env.test drizzle-kit migrate

------------------------------------------------------------

## 📚 Recursos recomendados

- Supertest en npm: https://www.npmjs.com/package/supertest
- Vitest: https://vitest.dev
- Drizzle ORM: https://orm.drizzle.team
- Faker.js: https://www.npmjs.com/package/@faker-js/faker

------------------------------------------------------------

## 🧠 Contribuciones

Puedes abrir issues, enviar pull requests o sugerencias.

------------------------------------------------------------

## 📚 Licencia

Este proyecto es FreeSource
