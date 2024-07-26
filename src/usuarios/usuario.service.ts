import { Usuario } from './interfaces/usuario.interface';
import { UsuarioRepository } from './usuario.repository';

export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  async getUsuarioById(id: string) {
    return this.usuarioRepository.getUsuarioById(id);
  }

  async getUsuarioByEmail(email: string) {
    return this.usuarioRepository.getUsuarioByEmail(email);
  }

  async getUsuarios() {
    return this.usuarioRepository.getUsuarios();
  }

  async createUsuario(usuario: Usuario) {
    return this.usuarioRepository.createUsuario(usuario);
  }

  async updateUsuario(id: string, usuario: Usuario) {
    return this.usuarioRepository.updateUsuario(id, usuario);
  }

  async deleteUsuario(id: string) {
    return this.usuarioRepository.deleteUsuario(id);
  }
}
