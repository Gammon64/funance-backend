Voltar para [Home](../../../README.md)

# Endpoints disponíveis na rota

### GET /parcelas

Retorna todas as parcelas cadastradas.

```shell
curl -X 'GET' \
  'http://localhost:3000/parcelas' \
  -H 'accept: */*' \
  -H 'Authorization Bearer [token]'
```

```http
GET /parcelas?movimentacao_id={{movimentacao_id}} HTTP/1.1
Accept: */*
Authorization: Bearer {{token}}
Host: {{host}}


```

### GET /parcelas/:id

Retorna uma parcela específica.

```http
GET /parcelas/{{parcela_id}} HTTP/1.1
Accept: */*
Authorization: Bearer {{token}}
Host: {{host}}


```

### POST /parcelas

Cria uma nova parcela.

```http
POST /parcelas HTTP/1.1
Accept: */*
Content-Type: application/json
Host: {{host}}
Content-Length: 73

{
  "movimentacao_id": {{movimentacao_id}},
  "numero": 1,
  "valor": 1000.00,
  "data_vencimento": "2024-12-31",
  "observacao": "Parcela 1 de 3"
}
```

### PATCH /parcelas/:id

Edita uma parcela.

```http
PATCH /parcelas/{{parcela_id}} HTTP/1.1
Accept: */*
Authorization: Bearer {{token}}
Content-Type: application/json
Host: {{host}}
Content-Length: 75

{
  "data_pagamento": "2024-12-30",
  "observacao": "Parcela 1 de 3 paga"
}
```

### DELETE /parcelas/:id

Deleta uma parcela.

```http
DELETE /parcelas/{{parcela_id}} HTTP/1.1
Accept: */*
Authorization: Bearer {{token}}
Host: {{host}}


```
