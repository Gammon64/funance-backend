import { Types } from 'mongoose';

export class CreateParcelaDto {
  numero: number;
  valor: number;
  data_vencimento: Date;
  observacao?: string;
  movimentacao_id: Types.ObjectId;
}
