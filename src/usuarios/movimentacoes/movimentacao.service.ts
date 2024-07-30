import { Injectable } from '@nestjs/common';
import { Movimentacao } from './interfaces/movimentacao.interface';
import { MovimentacaoRepository } from './movimentacao.repository';
import { Agendamento } from './agendamentos/interfaces/agendamento.interface';
import { AgendamentoRepository } from './agendamentos/agendamento.repository';

@Injectable()
export class MovimentacaoService {
  constructor(
    private readonly movimentacaoRepository: MovimentacaoRepository,
    private readonly agendamentoRepository: AgendamentoRepository,
  ) {}

  async getMovimentacoes(usuario_id: string) {
    return this.movimentacaoRepository.getMovimentacoesByUsuarioId(usuario_id);
  }

  async getMovimentacaoById(id: string) {
    return this.movimentacaoRepository.getMovimentacaoById(id);
  }

  async createMovimentacao(movimentacao: Movimentacao) {
    // Cria as parcelas

    return this.movimentacaoRepository.createMovimentacao(movimentacao);
  }

  async updateMovimentacao(id: string, movimentacao: Movimentacao) {
    return this.movimentacaoRepository.updateMovimentacao(id, movimentacao);
  }

  async deleteMovimentacao(id: string) {
    await this.movimentacaoRepository.deleteMovimentacao(id);
  }
}
