import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovimentacoesModule } from '../movimentacoes/movimentacoes.module';
import { Usuario, UsuarioSchema } from './entities/usuario.entity';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports: [
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),
    MovimentacoesModule,
  ],
  exports: [UsuariosService],
})
export class UsuariosModule {}
