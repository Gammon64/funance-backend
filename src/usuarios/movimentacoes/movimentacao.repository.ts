import { TipoMovimentacao } from './enums/tipomovimentacao.enum';
import { Movimentacao } from './movimentacao.interface';

export class MovimentacaoRepository {
  async getMovimentacaoById(id: string): Promise<Movimentacao> {
    return {
      id,
      timestamp: new Date(),
      usuario_id: '1',
      tipo: TipoMovimentacao.RECEITA,
      descricao: 'Salário',
      valor: 1000,
      pagamento: 'DINHEIRO',
    };
  }

  async getMovimentacoesByUsuarioId(
    usuario_id: string,
  ): Promise<Movimentacao[]> {
    return [
      {
        id: '1',
        timestamp: new Date(),
        usuario_id,
        tipo: TipoMovimentacao.RECEITA,
        descricao: 'Salário',
        valor: 1000,
        pagamento: 'DINHEIRO',
      },
      {
        id: '2',
        timestamp: new Date(),
        usuario_id,
        tipo: TipoMovimentacao.DESPESA,
        descricao: 'Aluguel',
        valor: 500,
        pagamento: 'DINHEIRO',
      },
    ];
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
