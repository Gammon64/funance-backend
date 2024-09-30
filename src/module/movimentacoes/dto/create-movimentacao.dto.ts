import { Types } from 'mongoose';
import { TipoMovimentacao } from '../enums/tipomovimentacao.enum';

export class CreateMovimentacaoDto {
  usuario_id: Types.ObjectId;
  valor: number;
  descricao: string;
  tipo: TipoMovimentacao = TipoMovimentacao.DESPESA;
  modo_pagamento: string = 'Crédito';
  qtd_parcelas: number = 1;
  intervalo_parcelas: number = 30;
  categoria?: string;
}
