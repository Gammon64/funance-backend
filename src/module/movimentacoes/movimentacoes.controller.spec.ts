import { Test, TestingModule } from '@nestjs/testing';
import { MovimentacoesController } from './movimentacoes.controller';
import { MovimentacoesService } from './movimentacoes.service';
import {
  MOVIMENTACAO_DTO_SUT,
  MOVIMENTACAO_ID_SUT,
  MOVIMENTACAO_SUT,
} from './sut/movimentacao.stunt';

describe('MovimentacoesController', () => {
  let controller: MovimentacoesController;
  let service: MovimentacoesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovimentacoesController],
      providers: [
        {
          provide: MovimentacoesService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<MovimentacoesController>(MovimentacoesController);
    service = module.get<MovimentacoesService>(MovimentacoesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a movimentacao', async () => {
    jest.spyOn(service, 'create').mockResolvedValue(MOVIMENTACAO_SUT);

    expect(await controller.create(MOVIMENTACAO_DTO_SUT)).toBe(
      MOVIMENTACAO_SUT,
    );
    expect(service.create).toHaveBeenCalledWith(MOVIMENTACAO_DTO_SUT);
  });

  it('should return all movimentacoes', async () => {
    const result = [];
    jest.spyOn(service, 'findAll').mockResolvedValue(result);

    expect(await controller.findAll()).toBe(result);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a movimentacao by ID', async () => {
    jest.spyOn(service, 'findOne').mockResolvedValue(MOVIMENTACAO_SUT);

    expect(await controller.findOne(MOVIMENTACAO_ID_SUT.toHexString())).toBe(
      MOVIMENTACAO_SUT,
    );
    expect(service.findOne).toHaveBeenCalledWith(
      MOVIMENTACAO_ID_SUT.toHexString(),
    );
  });

  it('should update a movimentacao', async () => {
    jest.spyOn(service, 'update').mockResolvedValue(MOVIMENTACAO_SUT);

    expect(
      await controller.update(
        MOVIMENTACAO_ID_SUT.toHexString(),
        MOVIMENTACAO_DTO_SUT,
      ),
    ).toBe(MOVIMENTACAO_SUT);
    expect(service.update).toHaveBeenCalledWith(
      MOVIMENTACAO_ID_SUT.toHexString(),
      MOVIMENTACAO_DTO_SUT,
    );
  });

  it('should remove a movimentacao', async () => {
    jest.spyOn(service, 'remove').mockResolvedValue(MOVIMENTACAO_SUT);

    expect(await controller.remove(MOVIMENTACAO_ID_SUT.toHexString())).toBe(
      MOVIMENTACAO_SUT,
    );
    expect(service.remove).toHaveBeenCalledWith(
      MOVIMENTACAO_ID_SUT.toHexString(),
    );
  });
});
