# 📚 School API

Proyecto backend educativo construido con TypeScript, Drizzle ORM, Vitest y PostgreSQL. Incluye pruebas automatizadas, paginación, mocking, y cobertura de código.

---

## 🚀 Instalación

```bash
npm install
🧪 Pruebas automatizadas
Instalación de herramientas:

bash
npm i vitest -D
npm i supertest -D
npm i @types/supertest -D
npm i dotenv-cli -D
npm i -D @vitest/coverage-v8
Ejecutar pruebas unitarias, de integración y E2E:
bash
npm run test
También puedes ejecutar pruebas específicas:

bash
npm run test src/routes/get-courses.test.ts
Cobertura de código
bash
open coverage/index.html
🧬 Tipos de pruebas
Unitarias: testean funciones aisladas

Integración: testean la interacción entre módulos

E2E (End to End): simulan el comportamiento real de la app en producción

E2E = prueba de punta a punta, incluyendo todas las capas. Son más pesadas pero más representativas.

🧪 Mocking y Pattern Factories
Mocking: simula comportamientos reales sin depender de servicios externos

Factories: generan datos ficticios para pruebas

Biblioteca recomendada:

bash
npm i @faker-js/faker -D
🌐 Paginación
Offset-based pagination
Pagina usando LIMIT y OFFSET. Es simple pero puede volverse lenta en grandes volúmenes de datos.

sql
SELECT * FROM courses LIMIT 10 OFFSET 20;
Cursor-based pagination
Usa un cursor (como un ID o timestamp) para paginar. Es más eficiente y escalable.

sql
SELECT * FROM courses WHERE id > 'last_id' LIMIT 10;
🧪 Comparación de herramientas de testing
Herramienta	Velocidad	Ideal para
Jest	Más lenta	Proyectos grandes con mocks complejos
Vitest	Más rápida	Desarrollo moderno con TypeScript
📦 Scripts útiles
json
"scripts": {
  "dev": "tsx watch --env-file .env src/server.ts",
  "db:seed": "tsx --env-file .env src/database/seed.ts",
  "db:generate": "drizzle-kit generate",
  "db:migrate": "drizzle-kit migrate",
  "db:studio": "drizzle-kit studio",
  "pretest": "dotenv -e .env.test drizzle-kit migrate",
  "test": "dotenv -e .env.test vitest run"
}
🛠️ Variables de entorno
Usamos dotenv-cli para cargar variables:

bash
npm i dotenv-cli -D
Ejemplo de uso:

bash
dotenv -e .env.test drizzle-kit migrate
📚 Recursos
Supertest en npm

Vitest

Drizzle ORM

Faker.js