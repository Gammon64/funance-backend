Voltar para [Home](../../../README.md)

# Endpoints disponíveis na rota

### GET /usuarios

Retorna todos os usuários cadastrados.

```http
GET /usuarios HTTP/1.1
Accept: */*
Authorization: Bearer {{token}}
Host: {{host}}


```

### GET /usuarios/:id

Retorna um usuário específico.

```http
GET /usuarios/{{usuario_id}} HTTP/1.1
Accept: */*
Authorization: Bearer {{token}}
Host: {{host}}


```

### POST /usuarios

Cria um novo usuário.

```http
POST /usuarios HTTP/1.1
Accept: */*
Content-Type: application/json
Host: {{host}}
Content-Length: 73

{
  "nome": "admin",
  "email": "admin@funance.com",
  "senha": "admin"
}
```

### PATCH /usuarios/:id

Edita um usuário.

```http
PATCH /usuarios/{{usuario_id}} HTTP/1.1
Accept: */*
Authorization: Bearer {{token}}
Content-Type: application/json
Host: {{host}}
Content-Length: 75

{
  "nome": "admin",
  "email": "admin@funance.com",
  "senha": "@dmin19"
}
```

### DELETE /usuarios/:id

Deleta um usuário.

```http
DELETE /usuarios/{{usuario_id}} HTTP/1.1
Accept: */*
Authorization: Bearer {{token}}
Host: {{host}}


```
