export interface Parcela {
  id?: string;
  timestamp?: Date;
  movimentacao_id: string;

  numero: number;
  valor: number;
  data_vencimento: Date;
  data_pagamento?: Date;
  observacao?: string;
}
