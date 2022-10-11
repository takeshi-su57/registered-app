<h1>👤 Registered</h1>

User registration application capable of creating, reading, updating and deleting database users (CRUD). The project is divided into Front-end and Back-end, both environments (and the database) run inside a container created by Docker Compose 🐳.

<details>
  <summary><strong>🧰 Powered by</strong></summary><br />
  
  - Next.js
  - Sass/Scss
  - TypeScript
  - Node.js
  - Express
  - Prism
  - PostgreSQL
  - Docker
</details>

<details>
  <summary><strong>🔧 Installation</strong></summary><br />
  
  > ⚠️ You must have [Docker](https://docs.docker.com/engine/install/ubuntu/) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine to run this project in containers.
  
  - Clone this repository:
  ```
  git clone git@github.com:adilsongb/registrado-app.git
  ```

  - Access the project folder:
  ```
  app-registered cd
  ```
  
  - Upload application containers using Docker Compose command:
  > 📌 The process of installing the dependencies is done during the construction of the container for each environment.
  ```
  docker-compose up
  ```
  > ⚠️ The development environment is created using the `docker-compose.yml` file! With it, the Back and Front containers are updated with each change made to the project files.
  
  - All very well! You can access the application at the following addresses:
    - Frontend: `http://localhost:3000/`
    - Backend: `http://localhost:3001/`

</details>

<details>
  <summary><strong>💻 Deploy</strong></summary><br />
  
  - The deployment is performed on the Heroku platform. Application links:
    - Frontend: https://registrado-frontend.herokuapp.com/
    - Backend: https://registrado-backend.herokuapp.com/
  - The deployment of both environments (Front and Back-end) is performed automatically through GitHub Actions. Any change made to the `main` branch of the project's remote repository starts the deployment process.
  - The deploy action file can be found at: `.github/workflows/main.yml`.
</details>

<details>
  <summary><strong>💡 Hint</strong></summary><br />
  
  - In the project there is a file `app.code-workspace`, with it a workspace is created in VSCode separating the Front-end and the Back-end of the application.
</details>

<h2>Backend</h2>

- The application's back-end was developed with `Node.js`, `TypeScript`, `Express` and `Prisma`. The application can be accessed locally (if the container is running) at `http://localhost:3001/`.

<details>
  <summary><strong>📁 Organization</strong></summary><br />

    └── 📂 registered-app
        ├── 📂 backend
        | ├── 📂 prism
        | | ├── 📁 migrations // Prisma schema migration history
        | | ├── 📄 seed.ts // File with initial DB data
        | | └── 📄 schema.prisma // File that references and configures DB tables
        | └── 📂 src
        │ ├── 📂 database
        │ | └── 📄 connection.ts // Connect to the database through Prisma Client
        | ├── 📁 models // Folder with files that communicate directly with DB
        | ├── 📁 services // Folder with files that connect the client and DB
        | ├── 📁 controllers // Folder with files that communicate directly with the client
        | ├── 📁 interfaces // Folder with object typing interfaces
        | ├── 📁 validations // Folder with the validations performed by the Joi library
        | ├── 📁 middleware
        | | └── 📄 error.ts // Middleware for API error handling
        | ├── 📁 routes // Folder with API routes (Endpoints)
        | └── 📄 server.ts // API configuration and initialization file
        └── 📁 frontend

</details>

<details>
  <summary><strong>🎯 Endpoints</strong></summary><br />

  **GET**

  - <h3><code>/users/page/:page</code></h3>

    - Returns an array containing 10 users. Depending on the number passed in the `:page` parameter only a specific fraction of users is returned, for example: The `/users/page/2` endpoint returns users of order 11-20. (Endpoint created especially to give the pagination effect on the Front-end)
      
  
      <details>
        <summary><strong>🪃 Return example</strong></summary><br />

        ```json
        [
          {
            "id": 1,
            "name": "Adilson Gabriel",
            "email": "adilsongb.rabelo@gmail.com",
            "password": "F4MAJVQ3hkFElTb",
            "createdAt": "2022-05-26T21:42:34.364Z"
          },
          {
            "id": 2,
            "name": "Carlos Nogueira",
            "email": "carlos_nogueira@email.com",
            "password": "GsI2Y00ca05Lftu",
            "createdAt": "2022-05-26T21:42:34.364Z"
          },