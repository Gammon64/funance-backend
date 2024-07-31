export const PARCELA1_PAGA = {
  id: '1',
  timestamp: new Date(),
  movimentacao_id: '1',
  numero: 1,
  valor: 100,
  data_vencimento: new Date(),
  data_pagamento: new Date(),
};

export const PARCELA1_NP = {
  id: '2',
  timestamp: new Date(),
  movimentacao_id: '2',
  numero: 1,
  valor: 57.8,
  data_vencimento: new Date(),
};

export const PARCELA1_3 = {
  id: '3',
  timestamp: new Date(),
  movimentacao_id: '3',
  numero: 1,
  valor: 33.3,
  data_vencimento: new Date(),
};

export const PARCELA2_3 = {
  id: '4',
  timestamp: new Date(),
  movimentacao_id: '3',
  numero: 2,
  valor: 33.3,
  data_vencimento: new Date(),
};

export const PARCELA3_3 = {
  id: '5',
  timestamp: new Date(),
  movimentacao_id: '3',
  numero: 3,
  valor: 33.3,
  data_vencimento: new Date(),
};

export const PARCELAS = [
  PARCELA1_PAGA,
  PARCELA1_NP,
  PARCELA1_3,
  PARCELA2_3,
  PARCELA3_3,
];
