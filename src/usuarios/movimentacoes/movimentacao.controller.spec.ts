import { Test, TestingModule } from '@nestjs/testing';
import { MovimentacaoController } from './movimentacao.controller';
import { MovimentacaoService } from './movimentacao.service';

describe('MovimentacaoController', () => {
  let movimentacaoController: MovimentacaoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MovimentacaoController],
      providers: [MovimentacaoService],
    }).compile();

    movimentacaoController = app.get<MovimentacaoController>(
      MovimentacaoController,
    );
  });

  describe('movimentacoes', () => {
    it('should return list of movimentacoes', () => {
      expect(movimentacaoController.getMovimentacoes('1')).toBe([]);
    });
  });
});
