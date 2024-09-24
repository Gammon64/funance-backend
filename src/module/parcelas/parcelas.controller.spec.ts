import { Test, TestingModule } from '@nestjs/testing';
import { ParcelasController } from './parcelas.controller';
import { ParcelasService } from './parcelas.service';
import {
  CREATE_PARCELA_DTO_SUT,
  PARCELA_ID_SUT,
  PARCELA_SUT,
  UPDATE_PARCELA_DTO_SUT,
} from './sut/parcela.stunt';

describe('ParcelasController', () => {
  let controller: ParcelasController;
  let service: ParcelasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParcelasController],
      providers: [
        {
          provide: ParcelasService,
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

    controller = module.get<ParcelasController>(ParcelasController);
    service = module.get<ParcelasService>(ParcelasService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a parcela', async () => {
    jest.spyOn(service, 'create').mockResolvedValue(PARCELA_SUT);

    expect(await controller.create(CREATE_PARCELA_DTO_SUT)).toBe(PARCELA_SUT);
    expect(service.create).toHaveBeenCalledWith(CREATE_PARCELA_DTO_SUT);
  });

  it('should return all parcelas', async () => {
    const result = [];
    jest.spyOn(service, 'findAll').mockResolvedValue(result);

    expect(await controller.findAll()).toBe(result);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a parcela by ID', async () => {
    jest.spyOn(service, 'findOne').mockResolvedValue(PARCELA_SUT);

    expect(await controller.findOne(PARCELA_ID_SUT.toHexString())).toBe(
      PARCELA_SUT,
    );
    expect(service.findOne).toHaveBeenCalledWith(PARCELA_ID_SUT.toHexString());
  });

  it('should update a parcela', async () => {
    jest.spyOn(service, 'update').mockResolvedValue(PARCELA_SUT);

    expect(
      await controller.update(
        PARCELA_ID_SUT.toHexString(),
        UPDATE_PARCELA_DTO_SUT,
      ),
    ).toBe(PARCELA_SUT);
    expect(service.update).toHaveBeenCalledWith(
      PARCELA_ID_SUT.toHexString(),
      UPDATE_PARCELA_DTO_SUT,
    );
  });

  it('should remove a parcela', async () => {
    jest.spyOn(service, 'remove').mockResolvedValue(PARCELA_SUT);

    expect(await controller.remove(PARCELA_ID_SUT.toHexString())).toBe(
      PARCELA_SUT,
    );
    expect(service.remove).toHaveBeenCalledWith(PARCELA_ID_SUT.toHexString());
  });
});
