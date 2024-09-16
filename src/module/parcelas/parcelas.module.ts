import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Parcela, ParcelaSchema } from './entities/parcela.entity';
import { ParcelasController } from './parcelas.controller';
import { ParcelasService } from './parcelas.service';

@Module({
  controllers: [ParcelasController],
  providers: [ParcelasService],
  exports: [ParcelasService],
  imports: [
    MongooseModule.forFeature([{ name: Parcela.name, schema: ParcelaSchema }]),
  ],
})
export class ParcelasModule {}
