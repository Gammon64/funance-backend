import { Injectable } from '@nestjs/common';
import { Movimentacao } from './interfaces/movimentacao.interface';
import { MovimentacaoRepository } from './movimentacao.repository';
import { ParcelaRepository } from './parcelas/parcela.repository';

@Injectable()
export class MovimentacaoService {
  constructor(
    private readonly movimentacaoRepository: MovimentacaoRepository,
    private readonly parcelaRepository: ParcelaRepository,
  ) {}

  async getMovimentacoes(usuario_id: string) {
    return this.movimentacaoRepository.getMovimentacoesByUsuarioId(usuario_id);
  }

  async getMovimentacaoById(id: string) {
    return this.movimentacaoRepository.getMovimentacaoById(id);
  }

  async createMovimentacao(movimentacao: Movimentacao) {
    // Cria as parcelas
    for (let i = 1; i <= movimentacao.qtd_parcelas; i++) {
      const parcela = {
        movimentacao_id: movimentacao.id,
        numero: i,
        valor: movimentacao.valor / movimentacao.qtd_parcelas,
        data_vencimento: new Date(),
      };
      await this.parcelaRepository.createParcela(parcela);
    }

    return this.movimentacaoRepository.createMovimentacao(movimentacao);
  }

  async updateMovimentacao(id: string, movimentacao: Movimentacao) {
    return this.movimentacaoRepository.updateMovimentacao(id, movimentacao);
  }

  async deleteMovimentacao(id: string) {
    await this.movimentacaoRepository.deleteMovimentacao(id);
  }
}
