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
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  senha: string;

  @Prop({
    type: [
      {
        type: Types.ObjectId,
        ref: 'Movimentacao',
      },
    ],
  })
  movimentacoes?: Movimentacao[];
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
