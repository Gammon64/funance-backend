import { Types } from 'mongoose';
import { TipoMovimentacao } from 'src/module/movimentacoes/enums/tipomovimentacao.enum';
import { CreateParcelaDto } from '../dto/create-parcela.dto';
import { UpdateParcelaDto } from '../dto/update-parcela.dto';
import { Parcela } from '../entities/parcela.entity';

export const PARCELA_ID_SUT = new Types.ObjectId();

export const CREATE_PARCELA_DTO_SUT: CreateParcelaDto = {
  numero: 1,
  valor: 100,
  data_vencimento: new Date(),
  movimentacao_id: new Types.ObjectId(),
};

export const UPDATE_PARCELA_DTO_SUT: UpdateParcelaDto = {
  ...CREATE_PARCELA_DTO_SUT,
  data_pagamento: new Date(),
  observacao: 'Test',
};

export const PARCELA_SUT: Parcela & { _id: Types.ObjectId } = {
  _id: PARCELA_ID_SUT,
  ...CREATE_PARCELA_DTO_SUT,
  movimentacao_id: {
    usuario_id: {
      nome: 'Test User',
      email: 'test@example.com',
      senha: '@Test123',
    },
    valor: 100,
    descricao: 'Test Movimentacao',
    tipo: TipoMovimentacao.DESPESA,
    modo_pagamento: 'Dinheiro',
    qtd_parcelas: 1,
    categoria: 'Test',
  },
};
