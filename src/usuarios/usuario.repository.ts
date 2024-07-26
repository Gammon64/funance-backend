import { Usuario } from './usuario.interface';

export class UsuarioRepository {
  async getUsuarioById(id: string): Promise<Usuario> {
    return {
      id,
      timestamp: new Date(),
      nome: 'Fulano',
      email: 'fulano@funance.com',
      senha: '123456',
    };
  }

  async getUsuarioByEmail(email: string): Promise<Usuario> {
    return {
      id: '1',
      timestamp: new Date(),
      nome: 'Fulano',
      email,
      senha: '123456',
    };
  }

  async getUsuarios(): Promise<Usuario[]> {
    return [
      {
        id: '1',
        timestamp: new Date(),
        nome: 'Fulano',
        email: 'fulano@funance.com',
        senha: '123456',
      },
      {
        id: '2',
        timestamp: new Date(),
        nome: 'Ciclano',
        email: 'ciclano@funance.com',
        senha: '123456',
      },
      {
        id: '3',
        timestamp: new Date(),
        nome: 'Beltrano',
        email: 'beltrano@funance.com',
        senha: '123456',
      },
    ];
  }

  async createUsuario(usuario: Usuario): Promise<Usuario> {
    return usuario;
  }

  async updateUsuario(id: string, usuario: Usuario): Promise<Usuario> {
    return usuario;
  }

  async deleteUsuario(id: string): Promise<void> {}
}
