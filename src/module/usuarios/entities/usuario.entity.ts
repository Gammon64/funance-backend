import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Movimentacao } from '../movimentacoes/entities/movimentacao.entity';

export type UsuarioDocument = HydratedDocument<Usuario>;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class Usuario {
  @Prop({ type: Types.ObjectId })
  id: string;

  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  senha: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'Movimentacao',
  })
  movimentacoes?: Movimentacao[];
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
