<details>
  <summary><strong>👨‍💻 Deploy</strong></summary><br />

  ```bash
  heroku container:push  web -a registrado-frontend
  heroku container:push  web -a registrado-backend

  heroku container:release  web -a registrado-frontend 
  heroku container:release  web -a registrado-backend
  ```

</details>
