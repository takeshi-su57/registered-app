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

<details>
  <summary><strong>💡 Dica</strong></summary><br />
  
  - No projeto há um arquivo `app.code-workspace`, com ele é criado um workspace no VSCode separando o Front-end e o Back-end da aplicação.
</details>

<h2>Back-end</h2>

<details>
  <summary><strong>🛸 Sobre</strong></summary><br />
  
  - O back-end da aplicação foi desenvolvido com `Node.js`, `TypeScript`, `Express` e `Prisma`. A aplicação pode ser acessada localmente (Se o container estiver em execução) no endereço `http://localhost:3001/`.

</details>

<details>
  <summary><strong>📁 Organização</strong></summary><br />

    └── 📂 registrado-app
        ├── 📂 backend
        |   ├── 📂 prisma
        |   |   ├── 📁 migrations               // Histórico de migrações de schema do Prisma
        |   |   ├── 📄 seed.ts                  // Arquivo com os dados iniciais do DB
        |   |   └── 📄 schema.prisma            // Arquivo que referencia e configura as tabelas do DB
        |   └── 📂 src
        │       ├── 📂 database
        │       |   └── 📄 connection.ts        // Faz a conexão com o banco de dados através do Prisma Client
        |       ├── 📁 models                   // Pasta com arquivos que se comunicam diretamente com o DB
        |       ├── 📁 services                 // Pasta com arquivos que fazem conexão com o cliente e o DB
        |       ├── 📁 controllers              // Pasta com arquivos que se comunicam diretamente com o cliente
        |       ├── 📁 interfaces               // Pasta com interfaces de tipagem de objetos
        |       ├── 📁 validations              // Pasta com as validações executadas pela biblioteca Joi
        |       ├── 📁 middlewares
        |       |   └── 📄 error.ts             // Middleware para tratamento de erros da API
        |       ├── 📁 routes                   // Pasta com as rotas (Endpoints) da API
        |       └── 📄 server.ts                // Arquivo de configuração e inicialização da API
        └── 📁 frontend

</details>

<details>
  <summary><strong>🎯 Endpoints</strong></summary><br />

  **GET**

  - <h3><code>/users/page/:page</code></h3>

    - Retorna um array contendo 10 usuários. Dependendo do número passado no parâmetro `:page` apenas uma fração especifica de usuários é retornada, por exemplo: O endpoint `/users/page/2` retorna os usuários de ordem 11-20. (Endpoint criado especialmente para dar o efeito de paginação no Front-end)
      
  
      <details>
        <summary><strong>🪃 Exemplo de retorno</strong></summary><br />

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
          {
            "id": 3,
            "name": "Amanda Sousa",
            "email": "amandinha2009@email.com",
            "password": "Up6CsttZ6mmKbcd",
            "createdAt": "2022-05-26T21:42:34.364Z"
          },
          {
            "id": 4,
            "name": "Bernardo Gomes",
            "email": "berngomess@email.com",
            "password": "IrbWXLmxziRXLlu",
            "createdAt": "2022-05-26T21:42:34.365Z"
          },
          {
            "id": 5,
            "name": "Beatriz Castro",
            "email": "beaahcas@email.com",
            "password": "sfD551gbKmfad9u",
            "createdAt": "2022-05-26T21:42:34.365Z"
          },
          {
            "id": 6,
            "name": "Eliza Marcena",
            "email": "elizzamar23@email.com",
            "password": "5yF8V4CEhUXtub6",
            "createdAt": "2022-05-26T21:42:34.365Z"
          },
          {
            "id": 7,
            "name": "Matheus Santos",
            "email": "mathforsant@email.com",
            "password": "C4BDJ0pmghaKgEz",
            "createdAt": "2022-05-26T21:42:34.365Z"
          },
          {
            "id": 8,
            "name": "Joyce Vizoto",
            "email": "joysunviz@email.com",
            "password": "iArEIBlEA1mHow0",
            "createdAt": "2022-05-26T21:42:34.365Z"
          },
          {
            "id": 9,
            "name": "Anthony Barbosa",
            "email": "thonyukii@email.com",
            "password": "KYfqh4UcjRFbQao",
            "createdAt": "2022-05-26T21:42:34.365Z"
          },
          {
            "id": 10,
            "name": "João Marcelo",
            "email": "juaomar276@email.com",
            "password": "PSfasLke187BBzT",
            "createdAt": "2022-05-26T21:42:34.365Z"
          }
        ]
        ```
      </details>

 
  - <h3><code>/users/get/:id</code></h3>

    - Retorna um objeto contendo o usuário que possui o `id` passado pelo parâmetro.
  
  
      <details>
        <summary><strong>🪃 Exemplo de retorno</strong></summary><br />
        
        `/users/get/1`

        ```json
        {
          "id": 1,
          "name": "Adilson Gabriel",
          "email": "adilsongb.rabelo@email.com",
          "password": "F4MAJVQ3hkFElTb",
          "createdAt": "2022-05-26T22:19:19.023Z"
        }
        ```
      </details>
 
  - <h3><code>/users/find?[email || name]=[string]&skip=[number]</code></h3>

    - Retorna um array contendo todos os usuários filtrados pela query. O endpoint aceita filtrar pelos atributos `email` e `name`. A query `skip` deve ser obrigatória para criar o efeito de paginação caso a pesquisa retorne mais que 10 usuários.


      <details>
        <summary><strong>🪃 Exemplo de retorno</strong></summary><br />
        
        `/users/find?email=hotmail&skip=1`
 
         ```json
          [
            {
              "id": 11,
              "name": "Lila Hudson",
              "email": "lila_hudson@hotmail.com",
              "password": "OoscW4dbwZZAcPy",
              "createdAt": "2022-05-26T22:31:09.228Z"
            },
            {
              "id": 12,
              "name": "Royne Tremblay",
              "email": "roy.tremblay2@hotmail.com",
              "password": "QtWFaPmp51NyrgO",
              "createdAt": "2022-05-26T22:31:09.228Z"
            },
            {
              "id": 16,
              "name": "Rosella Nogueira",
              "email": "rosella_rath47@hotmail.com",
              "password": "Bm9iXnpnmAyoVVi",
              "createdAt": "2022-05-26T22:31:09.228Z"
            },
            {
              "id": 35,
              "name": "Vilma Dincley",
              "email": "vilma58@hotmail.com",
              "password": "AJr9AiPzekXP_lQ",
              "createdAt": "2022-05-26T22:31:09.229Z"
            },
            {
              "id": 36,
              "name": "Katheryn Wunsch",
              "email": "katheryn.wunsch@hotmail.com",
              "password": "ie9ZNkeTfEjYyy8",
              "createdAt": "2022-05-26T22:31:09.229Z"
            },
            {
              "id": 40,
              "name": "Willie Cruick",
              "email": "willie_cruickshank94@hotmail.com",
              "password": "5Owmrjbdbrj1W8t",
              "createdAt": "2022-05-26T22:31:09.229Z"
            },
            {
              "id": 41,
              "name": "Erick Wisoky",
              "email": "erin.wisoky@hotmail.com",
              "password": "x4F7vq58SGdyEa7",
              "createdAt": "2022-05-26T22:31:09.229Z"
            },
            {
              "id": 42,
              "name": "Melvin O'connell",
              "email": "melvin.oconnell@hotmail.com",
              "password": "sdIKcjKjyQEyuDC",
              "createdAt": "2022-05-26T22:31:09.229Z"
            },
            {
              "id": 44,
              "name": "Shanel Cronack",
              "email": "shanel_crona69@hotmail.com",
              "password": "GVHapyvXJeAujfd",
              "createdAt": "2022-05-26T22:31:09.230Z"
            },
            {
              "id": 46,
              "name": "Corbin Satthy",
              "email": "corbin56@hotmail.com",
              "password": "WBwH0mLhos6vTkq",
              "createdAt": "2022-05-26T22:31:09.230Z"
            }
          ]
         ```
   
        `/users/find?name=gabriel&skip=1`
 
         ```json
          [
            {
              "id": 1,
              "name": "Adilson Gabriel",
              "email": "adilsongb.rabelo@email.com",
              "password": "F4MAJVQ3hkFElTb",
              "createdAt": "2022-05-26T22:31:09.227Z"
            }
          ]
         ```
        
        </details>

  - <h3><code>/users/count?[email || name]=[string]</code></h3>

    - Retorna a quantidade de usuários registrados no banco de dados. O endpoint aceita uma query que filtra a quantidade de usuários com `email` ou `name` especifico.
      
      <details>
        <summary><strong>🪃 Exemplo de retorno</strong></summary><br />
        
        `/users/count`
        
        ```json
        50
        ```
        
        `/users/count?email=hotmail`
 
        ```json
        12
        ```
      </details>
  
  **POST**
  
  - <h3><code>/users/create</code></h3>

    - Registra um novo usuário no banco de dados. O endpoint deve receber na requisição um body com o seguinte objeto:
    
      ```json
      {
        "name": "Daenarys Targaryen",
        "email": "daenarystarg@hotmail.com",
        "password": "drogodracarys"
      }
      ```
 
    - As seguintes validações do [Joi](https://www.npmjs.com/package/joi) são consideradas:
      - `name`: É obrigatório na requisição, deve ser uma `string` e ter no mínimo 6 caracteres;
      - `email`: É obrigatório na requisição, deve ser uma `string` e ter o formato `email@email.com`;
      - `password`: É obrigatório na requisição, deve ser uma `string` e ter no mínimo 8 caracteres.
      
      <br/>

      <details>
        <summary><strong>🪃 Exemplo de retorno</strong></summary><br />

        ```json
        {
          "id": 51,
          "name": "Daenarys Targaryen",
          "email": "daenarystarg@hotmail.com",
          "password": "drogodracarys",
          "createdAt": "2022-05-26T23:21:26.932Z"
        }
        ```
      </details>
  
  **PUT**
  
  - <h3><code>/users/update/:id</code></h3>

    - Atualiza as informações de um determinado usuário com base no `:id` passado por parâmetro. A requisição deve ter um objeto com os atributos que serão atualizados no banco de dados, por exemplo:

      ```json
      {
        "email": "adilsongabriel2000@gmail.com"
      }
      ```

    - As seguintes validações do [Joi](https://www.npmjs.com/package/joi) são consideradas:
      - `name`: Deve ser uma `string` e ter no mínimo 6 caracteres;
      - `email`: Deve ser uma `string` e ter o formato `email@email.com`;
      - `password`: Deve ser uma `string` e ter no mínimo 8 caracteres.
  
      <br/>
      
      <details>
        <summary><strong>🪃 Exemplo de retorno</strong></summary><br />

        ```json
        {
          "id": 1,
          "name": "Adilson Gabriel",
          "email": "adilsongabriel2000@gmail.com",
          "password": "F4MAJVQ3hkFElTb",
          "createdAt": "2022-05-26T22:31:09.227Z"
        }
        ```
      </details>
 
  **DELETE**
  
  - <h3><code>/users/delete/:id</code></h3>

    - Deleta um usuário do banco de dados de acordo com o `:id` passado por parâmetro.
  
      <details>
        <summary><strong>🪃 Exemplo de retorno</strong></summary><br />
        
        `/users/delete/5`

        ```json
        {
          "id": 5,
          "name": "Beatriz Castro",
          "email": "beaahcas@email.com",
          "password": "sfD551gbKmfad9u",
          "createdAt": "2022-05-26T22:31:09.227Z"
        }
        ```
      </details>

</details>

<details>
  <summary><strong>💾 Banco de dados</strong></summary><br />
  
  - A aplicação utiliza o banco de dados `PostgreSQL`, criado pelo Docker Compose, para armazenar os dados, ou seja, não é necessário ter o PostgreSQL instalado na máquina.

    <br />

    <details>
      <summary><strong>🔷 Comandos do Prisma</strong></summary><br />
      
      > ⚠️ Os comandos a seguir devem ser executados no terminal do container de Back-end!

      - Reseta o banco de dados: `npx prisma migrate reset --force`;
      - Registras os usuários de `seed.ts`: `npx prisma db seed`;
        - Use este comando quando o banco de dados estiver vazio.
    </details>

</details>

<h2>Front-end</h2>

<details>
  <summary><strong>🎨 Sobre</strong></summary><br />
  
  ![Captura de tela 2022-05-25 - 18 32 04](https://user-images.githubusercontent.com/47402835/170742085-4ae95fbe-fdad-4ba5-b75e-8627b0333e66.png)
  
  - O front-end da aplicação foi desenvolvido com `Next.js`, `TypeScript`, `Sass` e `Axios`. A aplicação pode ser acessada localmente (Se o container estiver em execução) no endereço `http://localhost:3000/`.

</details>

<details>
  <summary><strong>📁 Organização</strong></summary><br />

    └── 📂 registrado-app
        ├── 📂 frontend
        |   ├── 📂 components                   // Pasta com os componentes Next.js da aplicação
        |   ├── 📂 contexts                     // Pasta com o Context API e Provider
        |   ├── 📂 hooks
        |   |   └── 📄 useMediaQuery.ts         // Hook auxiliar para responsividade da aplicação
        |   ├── 📂 interfaces                   // Arquivos de tipagem de dados
        |   ├── 📂 pages                        // Pasta com as páginas da aplicação
        |   ├── 📂 public                       
        |   ├── 📂 services                     
        |   |   └── 📄 api.ts                   // Arquivo de conexão com a API através do Axios
        |   ├── 📂 styles                       // Estilos da aplicação feito em Scss
        |   ├── 📄 Dockerfile                   // Arquivo de configuração do container Docker
        |   └── 📄 tsconfig.json                // Arquivo de configuração do TypeScript
        └── 📁 backend

</details>
