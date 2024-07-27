import { Test, TestingModule } from '@nestjs/testing';
import {
  BELTRANO,
  CICLANO,
  FULANO,
  INVALIDO,
  USUARIOS,
} from 'common/usuario.const';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

describe('UsuarioController', () => {
  let usuarioController: UsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [UsuarioService],
    }).compile();

    usuarioController = module.get<UsuarioController>(UsuarioController);
  });

  describe('getUsuarios', () => {
    it('should return an array of usuarios', () => {
      expect(usuarioController.getUsuarios()).toEqual(USUARIOS);
    });
  });

  describe('getUsuarioById', () => {
    it('should return the usuario with the given id', () => {
      expect(usuarioController.getUsuarioById(FULANO.id)).toEqual(FULANO);
    });
  });

  describe('getUsuarioByEmail', () => {
    it('should return the usuario with the given email', () => {
      expect(usuarioController.getUsuarioByEmail(FULANO.email)).toEqual(FULANO);
    });
  });

  describe('createUsuario', () => {
    it('should create a new usuario', () => {
      expect(usuarioController.createUsuario(BELTRANO)).toEqual(BELTRANO);
    });

    it('should throw an error if the email is already in use', () => {
      expect(() => usuarioController.createUsuario(FULANO)).toThrow(
        'Email already in use',
      );
    });

    it('should throw an error if the fields are not valid', () => {
      expect(() => usuarioController.createUsuario(INVALIDO)).toThrow(
        'Invalid fields',
      );
    });
  });

  describe('updateUsuario', () => {
    it('should update the usuario with the given id', () => {
      expect(usuarioController.updateUsuario(FULANO.id, BELTRANO)).toEqual(
        BELTRANO,
      );
    });

    it('should throw an error if the user is not found', () => {
      expect(() => usuarioController.updateUsuario('0', BELTRANO)).toThrow(
        'User not found',
      );
    });

    it('should throw an error if the email is already in use', () => {
      expect(() => usuarioController.updateUsuario(FULANO.id, CICLANO)).toThrow(
        'Email already in use',
      );
    });
  });

  describe('deleteUsuario', () => {
    it('should delete the usuario with the given id', () => {
      expect(usuarioController.deleteUsuario(FULANO.id)).not.toThrow();
    });
  });
});
