import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Movimentacao } from '../../entities/movimentacao.entity';

export class Parcela {
  @Prop({ type: Types.ObjectId })
  id: string;

  @Prop({ required: true })
  movimentacao_id: string;

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
}

export const ParcelaSchema = SchemaFactory.createForClass(Parcela);

ParcelaSchema.virtual('Movimentacao', {
  ref: Movimentacao.name,
  localField: 'movimentacao_id',
  foreignField: 'id',
  justOne: false,
});
