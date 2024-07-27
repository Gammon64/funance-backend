import { USUARIOS } from '../common/usuario.const';
import { Usuario } from './interfaces/usuario.interface';
import { UsuarioRepository } from './usuario.repository';

export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {
    this.usuarioRepository = new UsuarioRepository();
  }

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
    if (USUARIOS.find((u) => u.email === usuario.email))
      throw new Error('Email already in use');
    if (!usuario.nome || !usuario.email || !usuario.senha)
      throw new Error('Invalid fields');
    return this.usuarioRepository.createUsuario(usuario);
  }

  async updateUsuario(id: string, usuario: Usuario) {
    if (USUARIOS.find((u) => u.email === usuario.email))
      throw new Error('Email already in use');
    if (!usuario.nome || !usuario.email || !usuario.senha)
      throw new Error('Invalid fields');
    if (!USUARIOS.find((u) => u.id === id)) throw new Error('User not found');
    return this.usuarioRepository.updateUsuario(id, usuario);
  }

  async deleteUsuario(id: string) {
    if (!USUARIOS.find((u) => u.id === id)) throw new Error('User not found');
    return this.usuarioRepository.deleteUsuario(id);
  }
}
