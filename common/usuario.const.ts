import { Usuario } from 'src/usuarios/interfaces/usuario.interface';

export const INVALIDO: Usuario = {
  nome: '',
  email: '',
  senha: '',
};

export const FULANO: Usuario = {
  id: '1',
  timestamp: new Date(),
  nome: 'Fulano',
  email: 'fulano@funance.com',
  senha: '123456',
};

export const CICLANO: Usuario = {
  id: '2',
  timestamp: new Date(),
  nome: 'Ciclano',
  email: 'ciclano@funance.com',
  senha: '123456',
};

export const BELTRANO: Usuario = {
  id: '3',
  timestamp: new Date(),
  nome: 'Beltrano',
  email: 'beltrano@funance.com',
  senha: '123456',
};

export const USUARIOS: Usuario[] = [FULANO, CICLANO, BELTRANO];
