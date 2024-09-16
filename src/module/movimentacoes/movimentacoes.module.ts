import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Movimentacao,
  MovimentacaoSchema,
} from './entities/movimentacao.entity';
import { MovimentacoesController } from './movimentacoes.controller';
import { MovimentacoesService } from './movimentacoes.service';
import { ParcelasModule } from '../parcelas/parcelas.module';

@Module({
  controllers: [MovimentacoesController],
  providers: [MovimentacoesService],
  imports: [
    MongooseModule.forFeature([
      { name: Movimentacao.name, schema: MovimentacaoSchema },
    ]),
    ParcelasModule,
  ],
})
export class MovimentacoesModule {}
