import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { UsuarioRepository } from './usuarios.repository';

@Injectable()
export class UsuariosService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async findAll() {
    return this.usuarioRepository.findAll();
  }

  async findOne(id: string) {
    return this.usuarioRepository.findById(id);
  }

  async findByEmail(email: string) {
    return this.usuarioRepository.findByEmail(email);
  }

  async create(createUsuarioDto: UsuarioDto) {
    return this.usuarioRepository.create(createUsuarioDto);
  }

  async update(id: string, updateUsuarioDto: UsuarioDto) {
    return this.usuarioRepository.update(id, updateUsuarioDto);
  }

  remove(id: string) {
    return this.usuarioRepository.delete(id);
  }
}
