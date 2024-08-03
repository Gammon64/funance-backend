import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TipoMovimentacao } from '../enums/tipomovimentacao.enum';
import { Types } from 'mongoose';
import { Usuario } from '../../entities/usuario.entity';
import { Parcela } from '../parcelas/entities/parcela.entity';

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class Movimentacao {
  @Prop({ type: Types.ObjectId })
  id: string;

  @Prop({ required: true })
  usuario_id: string;

  @Prop({ required: true, enum: TipoMovimentacao })
  tipo: TipoMovimentacao;

  @Prop({ required: true })
  descricao: string;

  @Prop({ required: true })
  valor: number;

  @Prop({ required: true })
  pagamento: string;

  @Prop({ required: true, default: false })
  assinatura: boolean;

  @Prop({ required: true, default: 1 })
  qtd_parcelas: number;

  @Prop()
  categoria?: string;

  @Prop()
  agendamento_id?: string;
}

export const MovimentacaoSchema = SchemaFactory.createForClass(Movimentacao);

MovimentacaoSchema.virtual('Usuario', {
  ref: Usuario.name,
  localField: 'id',
  foreignField: 'usuario_id',
  justOne: true,
});

MovimentacaoSchema.virtual('Parcelas', {
  ref: Parcela.name,
  localField: 'id',
  foreignField: 'movimentacao_id',
  justOne: true,
});
