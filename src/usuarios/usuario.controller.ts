import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Usuario } from './interfaces/usuario.interface';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  getUsuarios() {
    return this.usuarioService.getUsuarios();
  }

  @Get('/:id')
  getUsuarioById(@Param('id') id: string) {
    return this.usuarioService.getUsuarioById(id);
  }

  @Get('/email/:email')
  getUsuarioByEmail(@Param('id') email: string) {
    return this.usuarioService.getUsuarioByEmail(email);
  }

  @Post()
  createUsuario(@Body() usuario: Usuario) {
    return this.usuarioService.createUsuario(usuario);
  }

  @Put('/:id')
  updateUsuario(@Param('id') id: string, @Body() usuario: Usuario) {
    return this.usuarioService.updateUsuario(id, usuario);
  }

  @Delete('/:id')
  deleteUsuario(@Param('id') id: string) {
    return this.usuarioService.deleteUsuario(id);
  }
}
