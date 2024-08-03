import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Movimentacao } from '../movimentacoes/entities/movimentacao.entity';

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

  movimentacao_id: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);

UsuarioSchema.virtual('Movimentacoes', {
  ref: Movimentacao.name,
  localField: 'id',
  foreignField: 'usuario_id',
  justOne: false,
});
