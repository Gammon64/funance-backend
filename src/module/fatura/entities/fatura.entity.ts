import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Parcela } from 'src/module/parcelas/entities/parcela.entity';

export type FaturaDocument = HydratedDocument<Fatura>;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class Fatura {
  @Prop({ required: true })
  banco: string;

  @Prop({ required: true })
  data_vencimento: Date;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Parcela' }] })
  parcelas?: Parcela[];
}

export const FaturaSchema = SchemaFactory.createForClass(Fatura);
