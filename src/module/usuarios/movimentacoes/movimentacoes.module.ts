import { Module } from '@nestjs/common';
import { MovimentacoesService } from './movimentacoes.service';
import { MovimentacoesController } from './movimentacoes.controller';
import { ParcelasModule } from './parcelas/parcelas.module';
import { ParcelasModule } from './parcelas/parcelas.module';

@Module({
  controllers: [MovimentacoesController],
  providers: [MovimentacoesService],
  imports: [ParcelasModule],
})
export class MovimentacoesModule {}
