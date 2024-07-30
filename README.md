# Login e Registro - projeto

Este projeto é composto por um frontend em React e um backend em Node.js, ambos executados em paralelo. Abaixo estão as instruções para executar cada parte do projeto.

## Executando o Frontend e Backend

1. Abra dois terminais.
2. No primeiro terminal, navegue até a pasta do frontend e execute:
   
   cd caminho/para/frontend
   ```sh
    npm start
    ```
4. No segundo terminal, navegue até a pasta do backend e execute:

   cd caminho/para/backend
    ```sh
    npm start
    ```

### Telas do Projeto

| Login | Criar uma conta | Login ou Registro feito com sucesso |
|----------|----------|----------|
| <img src="https://github.com/user-attachments/assets/08fe762e-3d84-4156-9680-35d6e608f3e6" alt="Imagem 1" width="400px"> | <img src="https://github.com/user-attachments/assets/54435d7a-24f8-4fbc-8257-922cb69e3afc" alt="Imagem 2" width="400px"> | <img src="https://github.com/user-attachments/assets/0dd60e3e-979e-453d-9a91-f81cda26db30" alt="Imagem 3" width="400px"> |


https://github.com/user-attachments/assets/58022807-b16c-4d39-baa9-1b358c992ade


### Tecnologias Utilizadas

- **Frontend**: React
- **Backend**: Node.js, Express, MySQL
- **Dependências**:
  - Axios
  - Bcrypt
  - Cors
  - MySQL2
  - Nodemon

### Estrutura do Projeto

```plaintext
meu-projeto/
├── backend/
│   ├── node_modules/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── index.js
└── README.md
```

## Configurando o Banco de Dados

### Requisitos

- MySQL deve estar instalado e em execução no seu sistema.

### Passos para Configurar o Banco de Dados

1. Baixe a pasta do projeto, que contém o arquivo `LoginAndRegister.sql`.

2. Navegue até a pasta onde o arquivo `LoginAndRegister.sql` está localizado. Por exemplo, se ele estiver na raiz do seu projeto:
    ```sh
    cd caminho/para/projeto
    ```

3. Execute o seguinte comando no terminal para criar o banco de dados e a tabela `usuarios`:
    ```sh
    mysql -u seu_usuario -p < LoginAndRegister.sql
    ```
    Substitua `seu_usuario` pelo nome de usuário que você usa para acessar o MySQL. O comando pedirá sua senha do MySQL.

### Estrutura do Arquivo `LoginAndRegister.sql`

O arquivo `LoginAndRegister.sql` deve conter o seguinte:

```sql
-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS db;

-- Usar o banco de dados criado
USE db;

-- Criar a tabela usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
