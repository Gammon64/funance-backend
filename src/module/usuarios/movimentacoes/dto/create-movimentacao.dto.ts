import { Types } from 'mongoose';
import { TipoMovimentacao } from '../enums/tipomovimentacao.enum';

export class CreateMovimentacaoDto {
  usuario_id: Types.ObjectId;
  valor: number;
  descricao: string;
  tipo: TipoMovimentacao;
  modo_pagamento: string;
  qtd_parcelas: number = 1;
  categoria?: string;
}
