import { PartialType } from '@nestjs/mapped-types';
import { CreateParcelaDto } from './create-parcela.dto';

export class UpdateParcelaDto extends PartialType(CreateParcelaDto) {
  data_pagamento: Date;
  observacao: string;
}
