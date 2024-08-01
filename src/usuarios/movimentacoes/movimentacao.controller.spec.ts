import { Test, TestingModule } from '@nestjs/testing';
import { MovimentacaoController } from './movimentacao.controller';
import { MovimentacaoService } from './movimentacao.service';
import { FULANO } from 'src/common/usuario.const';
import { CELTA, MOVIMENTACOES, SALARIO } from 'src/common/movimentacao.const';

describe('MovimentacaoController', () => {
  let movimentacaoController: MovimentacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovimentacaoController],
      providers: [MovimentacaoService],
    }).compile();

    movimentacaoController = module.get<MovimentacaoController>(
      MovimentacaoController,
    );
  });

  describe('getMovimentacoes', () => {
    it('should return an array of movimentacoes', () => {
      movimentacaoController
        .getMovimentacoes(FULANO.id)
        .then((data) =>
          expect(data).toEqual(
            MOVIMENTACOES.filter(
              (movimentacao) => movimentacao.usuario_id === FULANO.id,
            ),
          ),
        );
    });
  });

  describe('getMovimentacaoById', () => {
    it('should return the movimentacao with the given id', async () => {
      expect(
        await movimentacaoController.getMovimentacaoById(SALARIO.id),
      ).toEqual(SALARIO);
    });
  });

  describe('createMovimentacao', () => {
    it('should create a new movimentacao', async () => {
      expect(await movimentacaoController.createMovimentacao(CELTA)).toEqual(
        CELTA,
      );
    });
  });

  describe('updateMovimentacao', () => {
    it('should update the movimentacao with the given id', async () => {
      expect(
        await movimentacaoController.updateMovimentacao(SALARIO.id, {
          ...SALARIO,
          valor: 2000,
        }),
      ).toEqual({ ...SALARIO, valor: 2000 });
    });
  });

  describe('deleteMovimentacao', () => {
    it('should delete the movimentacao with the given id', async () => {
      expect(
        await movimentacaoController.deleteMovimentacao(SALARIO.id),
      ).toEqual(SALARIO);
    });
  });
});
