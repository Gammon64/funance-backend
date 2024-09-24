import { Types } from 'mongoose';
import { UsuarioDto } from '../dto/usuario.dto';
import { Usuario } from '../entities/usuario.entity';

export const USUARIO_ID_SUT = new Types.ObjectId();

export const USUARIO_DTO_SUT: UsuarioDto = {
  nome: 'Test User',
  email: 'test@example.com',
  senha: '@Test123',
};

export const USUARIO_SUT: Usuario & { _id: Types.ObjectId } = {
  _id: USUARIO_ID_SUT,
  ...USUARIO_DTO_SUT,
};
