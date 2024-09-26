Voltar para [Home](../../../README.md)

# Endpoints disponíveis na rota

### GET /movimentacoes

Retorna todas as movimentações cadastradas.

```http
GET /movimentacoes?usuario_id={{usuario_id}} HTTP/1.1
Accept: */*
Authorization: Bearer {{token}}
Host: {{host}}


```

### GET /movimentacoes/:id

Retorna uma movimentação específica.

```http
GET /movimentacoes/{{movimentacao_id}} HTTP/1.1
Accept: */*
Authorization: Bearer {{token}}
Host: {{host}}


```

### POST /movimentacoes

Cria uma nova movimentação.

```http
POST /movimentacoes HTTP/1.1
Accept: */*
Content-Type: application/json
Host: {{host}}
Content-Length: 73

{
  "usuario_id": {{usuario_id}},
  "descricao": "Compra de ações",
  "valor": 1000.00,
  "tipo": "despesa",
  "modo_pagamento": "credito",
  "qtd_parcelas": 0,
  "categoria": "investimento"
}
```

### PATCH /movimentacoes/:id

Edita uma movimentação.

```http
PATCH /movimentacoes/{{movimentacao_id}} HTTP/1.1
Accept: */*
Authorization: Bearer {{token}}
Content-Type: application/json
Host: {{host}}
Content-Length: 75

{
  "usuario_id": {{usuario_id}},
  "descricao": "Compra de ações",
  "valor": 1000.00,
  "tipo": "despesa",
  "modo_pagamento": "credito",
  "qtd_parcelas": 0,
  "categoria": "investimento"
}
```

### DELETE /movimentacoes/:id

Deleta uma movimentação.

```http
DELETE /movimentacoes/{{movimentacao_id}} HTTP/1.1
Accept: */*
Authorization: Bearer {{token}}
Host: {{host}}


```
