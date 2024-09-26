# Bem-vindo ao backend do meu controle financeiro!

Projeto de API para controle financeiro feito usando NestJs.

Com ela é possível cadastrar, ver, alterar e excluir movimentações e parcelar ao informar um número maior que 0 no cadastro.

O projeto também possui uma camada de autenticação JWT.

## Como iniciar

# Como iniciar

Rode o comando para instalar as dependências:

```bash
npm install
```

Em sequência, inicie o projeto rodando:

```bash
npm run dev
```

## Acesse os Endpoints

Com o projeto em execução, ficarão disponíveis os endpoints:

### Para autenticação

#### POST /auth/login

Autentica um usuário e retorna um token JWT.

```http
POST /auth/login HTTP/1.1
Accept: */*
Content-Type: application/json
Host: {{host}}
Content-Length: 54

{
  "email": "admin@funance.com",
  "senha": "admin"
}
```

### Para criação e edições de usuário

Veja os endpoints disponíveis para usuários em [Endpoints Usuários](src/module/usuarios/README.md).

### Para criação e edições de movimentações

Veja os endpoints disponíveis para movimentações em [Endpoints Movimentações](src/module/movimentacoes/README.md).

### Para criação e edições de parcelas

Veja os endpoints disponíveis para parcelas em [Endpoints Parcelas](src/module/parcelas/README.md).
