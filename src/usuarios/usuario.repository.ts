import { USUARIOS } from 'common/usuario.const';
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
    if (USUARIOS.find((u) => u.email === usuario.email))
      throw new Error('Email already in use');
    if (!usuario.nome || !usuario.email || !usuario.senha)
      throw new Error('Invalid fields');

    return usuario;
  }

  async updateUsuario(id: string, usuario: Usuario): Promise<Usuario> {
    if (USUARIOS.find((u) => u.email === usuario.email))
      throw new Error('Email already in use');
    if (!USUARIOS.find((u) => u.id === id)) throw new Error('User not found');
    return usuario;
  }

  async deleteUsuario(id: string): Promise<void> {
    if (!USUARIOS.find((u) => u.id === id)) throw new Error('User not found');
  }
}
