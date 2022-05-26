<h1>👤 Registrado</h1>

Aplicação de registro de usuários capaz de criar, ler, atualizar e deletar usuários do banco de dados (CRUD). O projeto é dividido em Front-end e Back-end, ambos os ambientes (e o banco de dados) são executados dentro de um container criado pelo Docker Compose 🐳.

<details>
  <summary><strong>🧰 Desenvolvido com</strong></summary><br />
  
  - Next.js
  - Sass/Scss
  - TypeScript
  - Node.js
  - Express
  - Prisma
  - PostgreSQL
  - Docker
</details>

<details>
  <summary><strong>🔧 Instalação</strong></summary><br />
  
  > ⚠️ É necessário ter o [Docker](https://docs.docker.com/engine/install/ubuntu/) e o [Docker Compose](https://docs.docker.com/compose/install/) instalados na sua máquina para executar esse projeto em containers.
  
  - Clone este repositório:
  ```
  git clone git@github.com:adilsongb/registrado-app.git
  ```

  - Acesse a pasta do projeto:
  ```
  cd registrado-app
  ```
  
  - Suba os containers da aplicação usando o comando do Docker Compose:
  > 📌 O processo de instalação das dependências é feito durante a construção do container de cada ambiente.
  ```
  docker-compose up
  ```
  > ⚠️ O ambiente de desenvolvimento é criado através do arquivo `docker-compose.yml`! Com ele os containers de Back e Front são atualizados a cada mudança feita nos arquivos do projeto.
  
  - Tudo certo! Você pode acessar a aplicação nos seguintes endereços:
    - Front-end: `http://localhost:3000/`
    - Back-end: `http://localhost:3001/`

</details>

<h2>Back-end</h2>
