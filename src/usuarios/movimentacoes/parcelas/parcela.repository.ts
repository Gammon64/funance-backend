import { PARCELAS } from 'src/common/parcela.const';
import { Parcela } from './interface/parcela.interface';

export class ParcelaRepository {
  async getParcelasByMovimentacaoId(movimentacao_id: string) {
    return PARCELAS.filter(
      (parcela) => parcela.movimentacao_id === movimentacao_id,
    );
  }
  async getParcelaById(id: string) {
    return PARCELAS.find((parcela) => parcela.id === id);
  }
  async createParcela(parcela: Parcela) {
    return parcela;
  }
  async updateParcela(id: string, parcela: Parcela) {
    return parcela;
  }
  async deleteParcela(id: string) {}
}
