import { MOVIMENTACOES, SALARIO } from 'src/common/movimentacao.const';
import { Movimentacao } from './interfaces/movimentacao.interface';

export class MovimentacaoRepository {
  async getMovimentacaoById(id: string): Promise<Movimentacao> {
    return SALARIO;
  }

  async getMovimentacoesByUsuarioId(
    usuario_id: string,
  ): Promise<Movimentacao[]> {
    return MOVIMENTACOES.filter((mov) => mov.usuario_id === usuario_id);
  }

  async createMovimentacao(movimentacao: Movimentacao): Promise<Movimentacao> {
    return movimentacao;
  }

  async updateMovimentacao(
    id: string,
    movimentacao: Movimentacao,
  ): Promise<Movimentacao> {
    return movimentacao;
  }

  async deleteMovimentacao(id: string): Promise<void> {}
}
