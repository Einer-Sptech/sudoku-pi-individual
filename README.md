# sudoku-pi-individual
Site de Sudoku com cadastro, login e dashboard de desempenho. Projeto Individual SPTECH 2026-2.

## Apresentação
Este projeto é um site de Sudoku que permite criar conta, iniciar partidas em diferentes níveis e acompanhar o desempenho em um painel. O backend é uma API em Node.js/Express e o frontend é servido como arquivos estáticos na pasta `public`.

## Objetivo
Oferecer uma aplicação web simples para jogar Sudoku com registro de partidas e estatísticas pessoais, útil como projeto de estudo e prática de desenvolvimento full‑stack.

## Funcionalidades (implementadas)
- Cadastro de usuário (rota: POST /usuarios/cadastrar)
- Autenticação de usuário (rota: POST /usuarios/autenticar)
- Atualização do nome do usuário (rota: PUT /usuarios/atualizar/:idUsuario)
- Registro de partidas (rota: POST /partidas/registrar)
- Listagem de partidas de um usuário (rota: GET /partidas/listar/:idUsuario)
- Listagem de níveis disponíveis (rota: GET /niveis/listar)
- Frontend estático com páginas em `public` (home, cadastro, login, etc.)

> Observação: as rotas acima fazem parte do backend e esperam dados no corpo da requisição com nomes específicos (por exemplo `nomeServer`, `emailServer`, `senhaServer`, `fkUsuarioServer`, `fkNivelServer`, `tempoSegServer`, etc.). Veja os controllers em `src/controllers/` para os campos exatos.

## Tecnologias utilizadas
- Node.js
- Express
- MySQL (via biblioteca `mysql2`)
- dotenv (variáveis de ambiente)
- CORS
- HTML/CSS/Font Awesome (frontend estático em `public`)

As dependências estão no arquivo `package.json`.

## Estrutura de pastas (visão geral)
- app.js: ponto de entrada do servidor
- package.json / package-lock.json: configuração do Node.js
- .env.dev: exemplo de variáveis de ambiente para desenvolvimento
- public/: arquivos estáticos do frontend (HTML, CSS, imagens)
- src/
  - controllers/: lógica das rotas (validação e chamadas ao model)
  - models/: consultas SQL para o banco (usuarios, partidas, niveis)
  - routes/: definição das rotas da API
  - database/config.js: função para conectar e executar consultas no MySQL

## Como executar (passo a passo simples)
Pré-requisitos: Node.js (versão compatível), MySQL instalado e funcionando.

1. Abra um terminal na pasta do projeto.
2. Instale as dependências:

   npm install

3. Configure as variáveis de ambiente:
   - Há um arquivo `.env.dev` com valores de exemplo. Copie ou renomeie para `.env` e ajuste os valores (host, usuário, senha, database, porta, APP_PORT, APP_HOST) conforme seu ambiente.
   - A variável `AMBIENTE_PROCESSO` pode ser `desenvolvimento` ou `producao`.

4. Certifique‑se de que o banco MySQL exista e contenha as tabelas esperadas (pelo menos: `usuarios`, `partidas`, `niveis`, `status_partida`). Este repositório não inclui scripts SQL de criação.

5. Inicie a aplicação:

   npm run dev

   ou

   npm start

6. Abra o navegador em http://HOST:PORT onde `HOST` e `PORT` são definidos no `.env` (por exemplo `http://localhost:3334`).

## Observações importantes
- As requisições ao backend são JSON; os nomes dos campos esperados podem ser vistos nos arquivos em `src/controllers/`.
- O arquivo `.env.dev` está presente como exemplo. Não comite credenciais reais em repositórios públicos.
- Para mudar o ambiente de execução você pode ajustar `AMBIENTE_PROCESSO` no `.env` ou editar a configuração em `app.js` (o arquivo contém comentários que mostram como alternar). Preferível usar `.env` para controlar o ambiente.
- Se tiver problemas de conexão com o banco, verifique as variáveis de ambiente e se o MySQL está permitindo conexões na porta e usuário configurados.
