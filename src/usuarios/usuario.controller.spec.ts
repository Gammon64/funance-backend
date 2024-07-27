import { Test, TestingModule } from '@nestjs/testing';
import {
  BELTRANO,
  CICLANO,
  FULANO,
  INVALIDO,
  USUARIOS,
} from '../common/usuario.const';
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
      usuarioController
        .getUsuarios()
        .then((data) => expect(data).toEqual(USUARIOS));
    });
  });

  describe('getUsuarioById', () => {
    it('should return the usuario with the given id', async () => {
      expect(await usuarioController.getUsuarioById(FULANO.id)).toEqual(FULANO);
    });
  });

  describe('getUsuarioByEmail', () => {
    it('should return the usuario with the given email', async () => {
      expect(await usuarioController.getUsuarioByEmail(FULANO.email)).toEqual(
        FULANO,
      );
    });
  });

  describe('createUsuario', () => {
    it('should create a new usuario', async () => {
      expect(await usuarioController.createUsuario(BELTRANO)).toEqual(BELTRANO);
    });

    test('should throw an error if the email is already in use', async () => {
      await expect(usuarioController.createUsuario(FULANO)).rejects.toThrow();
    });

    test('should throw an error if the fields are not valid', async () => {
      await expect(usuarioController.createUsuario(INVALIDO)).rejects.toThrow(
        'Invalid fields',
      );
    });
  });

  describe('updateUsuario', () => {
    it('should update the usuario with the given id', async () => {
      expect(
        await usuarioController.updateUsuario(FULANO.id, BELTRANO),
      ).toEqual(BELTRANO);
    });

    it('should throw an error if the email is already in use', async () => {
      expect(
        async () => await usuarioController.updateUsuario(FULANO.id, CICLANO),
      ).rejects.toThrow('Email already in use');
    });

    it('should throw an error if the fields are not valid', async () => {
      expect(
        async () => await usuarioController.updateUsuario(FULANO.id, INVALIDO),
      ).rejects.toThrow('Invalid fields');
    });

    it('should throw an error if the user is not found', async () => {
      expect(usuarioController.updateUsuario('0', BELTRANO)).rejects.toThrow(
        'User not found',
      );
    });
  });

  describe('deleteUsuario', () => {
    it('should delete the usuario with the given id', async () => {
      await usuarioController.deleteUsuario(FULANO.id);
      expect(await usuarioController.getUsuarios()).not.toContainEqual(FULANO);
    });

    it('should throw an error if the user is not found', async () => {
      expect(
        async () => await usuarioController.deleteUsuario('0'),
      ).rejects.toThrow('User not found');
    });
  });
});
