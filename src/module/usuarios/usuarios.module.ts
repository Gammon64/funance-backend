import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { MovimentacoesModule } from './movimentacoes/movimentacoes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from './entities/usuario.entity';
import {
  Movimentacao,
  MovimentacaoSchema,
} from './movimentacoes/entities/movimentacao.entity';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports: [
    MongooseModule.forFeature([
      { name: Usuario.name, schema: UsuarioSchema },
      { name: Movimentacao.name, schema: MovimentacaoSchema },
    ]),
    MovimentacoesModule,
  ],
})
export class UsuariosModule {}
