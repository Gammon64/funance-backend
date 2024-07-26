import { Injectable } from '@nestjs/common';
import { Movimentacao } from './movimentacao.interface';
import { Agendamento } from './agendamentos/agendamento.interface';
import { MovimentacaoRepository } from './movimentacao.repository';

@Injectable()
export class MovimentacaoService {
  constructor(private movimentacaoRepository: MovimentacaoRepository) {}

  async getMovimentacoes(usuario_id: string) {
    return this.movimentacaoRepository.getMovimentacoesByUsuarioId(usuario_id);
  }

  async getMovimentacaoById(id: string) {
    return this.movimentacaoRepository.getMovimentacaoById(id);
  }

  async createMovimentacao(
    movimentacao: Movimentacao,
    agendamento?: Agendamento,
  ) {
    // Confere se tem agendamento
    if (agendamento) {
      // Cria o agendamento e as movimentações subsequentes
      // agendamento = createAgendamento(agendamento);
      // movimentacao.agendamento_id = agendamento.getId();
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
