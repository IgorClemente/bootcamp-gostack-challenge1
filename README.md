<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 1: NodeJS Iniciante
</h3>

<p align="center">“Não espere para plantar, apenas tenha paciência para colher”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/IgorClemente/bootcamp-gostack-challenge1?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Igor Clemente" src="https://img.shields.io/badge/made%20by-Igor Clemente-%2304D361">
  </a>

  <img alt="Issues" src="https://img.shields.io/github/issues/IgorClemente/bootcamp-gostack-challenge1">

  <img alt="Forks" src="https://img.shields.io/github/forks/IgorClemente/bootcamp-gostack-challenge1">

  <a href="https://github.com/IgorClemente/bootcamp-gostack-challenge1/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/IgorClemente/bootcamp-gostack-challenge1">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/IgorClemente/bootcamp-gostack-challenge1">
</p>

<p align="center">
  <a href="#rocket-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-iniciando-a-aplicação">Iniciando aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#movie_camera-screenshot">Screenshot</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Descrição

Esse repositório contém um projeto prático e introdutório ao NodeJS. Os principais tópicos abordados nesse projeto são:

- Como criar rotas.
- Tipos de parâmetros e respostas de cada rota.
- Entender todos os tipos de rotas.
- Entender como os middlewares funcionam.
- Validação dos dados de requisição.

## :computer: Tecnologias e Ferramentas

- [NodeJS](https://nodejs.org/en/)
- [Sucrase](https://sucrase.io)
- [Nodemon](https://nodemon.io)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

## Rotas

- `GET /projects` : Listar todos os projetos cadastrados na plataforma.
- `POST /projects` : Criar um projeto dentro da plataforma.
- `PUT /projects/:id` : Atualizar um projeto através do `id`, `id` : Parâmetro do tipo numérico: `inteiro`.
- `DELETE /projects/:id` : Deletar um projeto através do `id`, `id` : Parâmetro do tipo numérico: `inteiro`.
- `POST /projects/:id/tasks` : Criar tasks dentro de um projeto. É necessário informar o parâmetro `id` do projeto, `id` : Parâmetro do tipo numerico: `inteiro`.

## :hammer: Iniciando aplicação

Para iniciar a aplicação, primeiro instale todas as dependências:

```bash

  yarn

```

Agora inicie a aplicação:

```bash

  yarn dev

```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Projeto desenvolvido by Igor Clemente :wave:
