import { Test, TestingModule } from '@nestjs/testing';
import { Types } from 'mongoose';
import { UsuarioDto } from './dto/usuario.dto';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import {
  USUARIO_DTO_SUT,
  USUARIO_ID_SUT,
  USUARIO_SUT,
} from './sut/usuario.stunt';

describe('UsuariosController', () => {
  let controller: UsuariosController;
  let service: UsuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosController],
      providers: [
        {
          provide: UsuariosService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            findByEmail: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsuariosController>(UsuariosController);
    service = module.get<UsuariosService>(UsuariosService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a usuario', async () => {
    jest.spyOn(service, 'create').mockResolvedValue(USUARIO_SUT);

    expect(await controller.create(USUARIO_DTO_SUT)).toBe(USUARIO_SUT);
    expect(service.create).toHaveBeenCalledWith(USUARIO_DTO_SUT);
  });

  it('should return all usuarios', async () => {
    const result = [];
    jest.spyOn(service, 'findAll').mockResolvedValue(result);

    expect(await controller.findAll()).toBe(result);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a usuario by ID', async () => {
    jest.spyOn(service, 'findOne').mockResolvedValue(USUARIO_SUT);

    expect(await controller.findOne(USUARIO_ID_SUT.toHexString())).toBe(
      USUARIO_SUT,
    );
    expect(service.findOne).toHaveBeenCalledWith(USUARIO_ID_SUT.toHexString());
  });

  it('should return a usuario by email', async () => {
    jest.spyOn(service, 'findByEmail').mockResolvedValue(USUARIO_SUT);

    expect(await controller.findByEmail(USUARIO_SUT.email)).toBe(USUARIO_SUT);
    expect(service.findByEmail).toHaveBeenCalledWith(USUARIO_SUT.email);
  });

  it('should update a usuario', async () => {
    jest.spyOn(service, 'update').mockResolvedValue(USUARIO_SUT);

    expect(
      await controller.update(USUARIO_ID_SUT.toHexString(), USUARIO_DTO_SUT),
    ).toBe(USUARIO_SUT);
    expect(service.update).toHaveBeenCalledWith(
      USUARIO_ID_SUT.toHexString(),
      USUARIO_DTO_SUT,
    );
  });

  it('should remove a usuario', async () => {
    jest.spyOn(service, 'remove').mockResolvedValue(USUARIO_SUT);

    expect(await controller.remove(USUARIO_ID_SUT.toHexString())).toBe(
      USUARIO_SUT,
    );
    expect(service.remove).toHaveBeenCalledWith(USUARIO_ID_SUT.toHexString());
  });
});
