import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Usuario } from '../../entities/usuario.entity';
import { TipoMovimentacao } from '../enums/tipomovimentacao.enum';
import { Parcela } from '../parcelas/entities/parcela.entity';

export type MovimentacaoDocument = HydratedDocument<Movimentacao>;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class Movimentacao {
  @Prop({ required: true })
  valor: number;

  @Prop({ required: true })
  descricao: string;

  @Prop({ required: true, enum: TipoMovimentacao })
  tipo: TipoMovimentacao;

  @Prop({ required: true })
  modo_pagamento: string;

  @Prop({ required: true, default: 1 })
  qtd_parcelas: number;

  @Prop()
  categoria?: string;

  @Prop({ type: Types.ObjectId, ref: 'Usuario' })
  usuario_id: Usuario;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Parcela' }] })
  parcelas?: Parcela[];
}

export const MovimentacaoSchema = SchemaFactory.createForClass(Movimentacao);
