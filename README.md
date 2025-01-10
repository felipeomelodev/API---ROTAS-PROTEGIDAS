# API com Rotas Protegidas

Este é um projeto de API com autenticação e criptografia, desenvolvido durante o bootcamp da Cubos Academy. A API oferece funcionalidades para cadastrar usuários, autenticar login e listar ou detalhar usuários, com as duas últimas rotas protegidas. As rotas são protegidas por autenticação JWT e criptografia de senhas utilizando bcrypt.

## Funcionalidades

📝 **Cadastrar Usuário**: Permite que um novo usuário se registre na plataforma.

🔑 **Autenticação (Login)**: Usuários podem fazer login utilizando email e senha, com autenticação via JWT.

🔒 **Listar Usuários**: Exibe todos os usuários cadastrados. (Protegido por autenticação)

🔍 **Detalhar Usuário**: Detalha as informações de um usuário específico. (Protegido por autenticação)

## Tecnologias e Ferramentas Utilizadas

🛠️ **Tecnologias e ferramentas utilizadas:**

- 📘 **TypeScript**: Para maior segurança e organização do código.
- ⚡ **Node.js** e **Express**: Framework robusto e escalável para APIs.
- 🛡️ **bcrypt**: Para criptografia de senhas.
- 🔐 **jsonwebtoken**: Implementação de autenticação com JWT.
- 🌱 **dotenv**: Para gerenciamento de variáveis de ambiente.
- 🗄️ **PostgreSQL**: Banco de dados relacional.
- ♻️ **Nodemon**: Desenvolvimento ágil com reinício automático do servidor.
- ✅ **Jest**: Testes automatizados para garantir a qualidade do código.
- 🐳 **Docker Compose**: Para gerenciar containers e facilitar o ambiente de desenvolvimento.
- 🔎 **Beekeeper Studio**: Para gerenciamento do banco de dados PostgreSQL de forma eficiente e visual.
