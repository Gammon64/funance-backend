import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Movimentacao } from '../../movimentacoes/entities/movimentacao.entity';

export type ParcelaDocument = HydratedDocument<Parcela>;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class Parcela {
  @Prop({ required: true })
  numero: number;

  @Prop({ required: true })
  valor: number;

  @Prop({ required: true })
  data_vencimento: Date;

  @Prop()
  data_pagamento?: Date;

  @Prop()
  observacao?: string;

  @Prop({ type: Types.ObjectId, ref: 'Movimentacao' })
  movimentacao_id: Movimentacao;
}

export const ParcelaSchema = SchemaFactory.createForClass(Parcela);
