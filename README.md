# Backend Inventario Tienda 📦

Este es un proyecto de backend diseñado en Node.js y Express para gestionar el inventario de una tienda. Los datos son gestionados en memoria (sin base de datos) con fines de desarrollo y prueba.

La arquitectura del proyecto está fundamentada fuertemente en las buenas prácticas de la Programación Orientada a Objetos (POO), implementando principios **SOLID** y patrones **GRASP**.

## 🏗 Arquitectura y Principios Aplicados

El proyecto está modularizado en capas separadas (Single Responsibility Principle - SRP) para garantizar un acoplamiento bajo y una alta cohesión:

- **Models (`src/models`)**: Contiene las entidades del dominio. Ej: `Product.js`.
- **Repositories (`src/repositories`)**: Encargados de la persistencia de los datos (Information Expert). Aisla al resto de la aplicación de cómo y dónde se guardan los datos (en este caso, un array en memoria).
- **Services (`src/services`)**: Contiene toda la lógica de negocio de la aplicación.
- **Controllers (`src/controllers`)**: Encargados de recibir las peticiones HTTP y retornar las respuestas adecuadas delegando el trabajo pesado a los servicios.
- **Routes (`src/routes`)**: Define los endpoints independientes para el consumo de la API REST.

Además, se aplica de forma estricta la **Inyección de Dependencias (Dependency Inversion Principle - DIP)** desde el archivo `index.js`, pasando el repositorio al servicio, y el servicio al controlador, evitando que las clases instancias sus propias dependencias.

## 🚀 Requisitos

- [Node.js](https://nodejs.org/) instalado en el sistema.

## ⚙️ Instalación y Ejecución

1. Clona el repositorio o abre la carpeta del proyecto en tu terminal.
2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```
3. Ejecuta el servidor:
   ```bash
   node index.js
   ```
4. El servidor se iniciará y estará escuchando peticiones en `http://localhost:3000`.

## 📌 Endpoints de la API (CRUD)

La ruta base para la API es: `/api/products`

Todos los endpoints reciben y devuelven la información en formato `application/json`.

| Método | Endpoint               | Descripción                                     | Body Recomendado (JSON)                           |
|--------|------------------------|-------------------------------------------------|---------------------------------------------------|
| GET    | `/api/products`        | Retorna la lista completa de productos.         | -                                                 |
| GET    | `/api/products/:id`    | Retorna un producto específico según su ID.     | -                                                 |
| POST   | `/api/products`        | Crea un nuevo producto en el inventario.        | `{"name": "Item", "price": 100, "quantity": 10}`  |
| PUT    | `/api/products/:id`    | Actualiza los datos de un producto existente.   | `{"name": "Item2", "price": 150, "quantity": 5}`  |
| DELETE | `/api/products/:id`    | Elimina un producto específico del inventario.  | -                                                 |

## 🛠 Tecnologías Utilizadas
- **JavaScript (ES6+)**
- **Node.js**
- **Express.js**
