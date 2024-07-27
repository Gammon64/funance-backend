import { USUARIOS } from '../common/usuario.const';
import { Usuario } from './interfaces/usuario.interface';

export class UsuarioRepository {
  async getUsuarioById(id: string): Promise<Usuario> {
    return USUARIOS.find((usuario) => usuario.id === id);
  }

  async getUsuarioByEmail(email: string): Promise<Usuario> {
    return USUARIOS.find((usuario) => usuario.email === email);
  }

  async getUsuarios(): Promise<Usuario[]> {
    return USUARIOS;
  }

  async createUsuario(usuario: Usuario): Promise<Usuario> {
    return usuario;
  }

  async updateUsuario(id: string, usuario: Usuario): Promise<Usuario> {
    return usuario;
  }

  async deleteUsuario(id: string): Promise<void> {}
}
