# :pushpin: índice

1. [Objetivo do Projeto](#dart-objetivo-do-projeto)
2. [Sobre](#page_with_curl-sobre)
3. [Tecnologias Utilizadas](#rocket-tecnologias-utilizadas)
4. [Requisitos](#gear-requisitos)
5. [Rodar o Projeto](#arrow_forward-rodar-o-projeto)
6. [Resultado](#keyboard-resultado)
7. [Redes Sociais](#man_technologist-redes-sociais)

---

## :dart: Objetivo do Projeto

Uma API que gerencia o login, cria um usuário no mongoDB, autêntica a seção com token JWT, tem uma rota protegida para para usuários logados, e uma outra só para admin.

## :page_with_curl: Sobre

Essa foi uma API criada no [Curso Desenvolvimento Web Full Stack](https://programadorbr.com/) do [ProgramadorBR](https://www.youtube.com/channel/UCrdgeUeCll2QKmqmihIgKBQ), a parte do login não foi novidade, inclusive tem uma [API de login ate mais completa](https://github.com/devsp011/apiRest-rocketSeat) aqui no [meu GItHub](https://github.com/devsp011?tab=repositories), mas trabalhar com [variaveis de ambiente](https://www.npmjs.com/package/dotenv) foi novo pra mim, é algo bem simples e muito fácil de configurar, mas foi o primeiro projeto que eu usei de fato elas, uma lib muito legal usada aqui tambem foi a [@hapi/joi](https://hapi.dev/module/joi/), ela é usada pra validar os dados no backend quando eles chegam do front, esse é um projeto simples e pequeno mas que abordou coisas novas para mim.

## :rocket: Tecnologias Utilizadas

* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)
* **Banco de dados:** [MongoDB](https://www.mongodb.com/)
* **Cliente REST:** [Insomnia](https://insomnia.rest/)

**Dependências**

* [@hapi/joi](https://hapi.dev/module/joi/)
* [bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [express](https://expressjs.com/)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [mongoose](https://mongoosejs.com/docs/index.html)

## :gear: Requisitos

* [Git](https://git-scm.com/) (Para clonar, opcional)
* [Node.js](https://nodejs.org/en/)
* [Npm](https://www.npmjs.com/) (É instalado junto com o Node)
* [MongoDB Local](https://www.mongodb.com/download-center/community) ou [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/signup)

**Arquivos:**

* É necessario criar um arquivo **.env** na pasta raiz do projeto **./**.
* Conteudo do arquivo **.env**:
* **PORT**, vai determinar a porta que a API vai rodar.
* **MONGO_URL**, Url de conexão com o banco mongo, seja local ou no Atlas.
* **TOKEN_SECRET**, é o hash da aplicação para gerar o token.
    - vc pode gerar um hash md5 [Aqui](https://www.md5hashgenerator.com/).

## :arrow_forward: Rodar o Projeto

* Primeiro passo, clone ou baixe o projeto em sua maquina
* Abra a pasta do projeto no terminal
* Instale as dependências com o comando `npm i` 
* Inicie o servidor com o comando `npm start` 
* A aplicação estara disponível na porta: **PORT** que foi criada no arquivo **.env**

## :keyboard: Resultado

**OBS:** A porta vai variar dependendo da porta que foi usada no **arquivo .env**, nesse exemplo eu estou usando a porta 3000 pois foi a que eu defini no arquivo .env

**Rotas para lidar com a autenticação:**

``` js
    // (POST) --- Rota de registro:
    'http://localhost:3000/user/register'

    // Objeto usuario:
    {
        "name": "devsp",
        "email": "devsp@teste.com",
        "password": "123456"
    }

    // (POST) --- Rota de autenticação:
    'http://localhost:3000/user/login'

    // Objeto autenticação:
    {
        "email": "devsp@teste.com",
        "password": "123456"
    }
```

**Rotas protegidas:**

``` js
    // (GET) --- Rota para acesso do admin:
    'http://localhost:3000/admin'

    // (GET) --- Rota para qualquer usuário logado:
    'http://localhost:3000/admin/free'
```

## :man_technologist: Redes Sociais

* [instagram](https://www.instagram.com/devsp011/)
* [Linkedin](https://www.linkedin.com/in/vitor-sampaio-4532451a7/)

---

<h5 align='center' >Feito com :purple_heart: por <a href="https://github.com/devsp011" target="_blank">DevSp</a> </h5>
