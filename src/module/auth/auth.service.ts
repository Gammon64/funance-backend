import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, senha: string) {
    const usuario = await this.usuariosService.findByEmail(email);
    if (usuario?.senha !== senha) {
      throw new UnauthorizedException();
    }
    const payload = { email: usuario.email, sub: usuario._id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
