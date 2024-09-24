import { Types } from 'mongoose';
import { CreateMovimentacaoDto } from '../dto/create-movimentacao.dto';
import { Movimentacao } from '../entities/movimentacao.entity';
import { TipoMovimentacao } from '../enums/tipomovimentacao.enum';

export const MOVIMENTACAO_ID_SUT = new Types.ObjectId();

export const MOVIMENTACAO_DTO_SUT: CreateMovimentacaoDto = {
  usuario_id: new Types.ObjectId(),
  valor: 100,
  descricao: 'Test Movimentacao',
  tipo: TipoMovimentacao.DESPESA,
  modo_pagamento: 'Dinheiro',
  qtd_parcelas: 1,
  categoria: 'Test',
};

export const MOVIMENTACAO_SUT: Movimentacao & { _id: Types.ObjectId } = {
  _id: MOVIMENTACAO_ID_SUT,
  ...MOVIMENTACAO_DTO_SUT,
  usuario_id: {
    nome: 'Test User',
    email: 'test@example.com',
    senha: '@Test123',
  },
};
