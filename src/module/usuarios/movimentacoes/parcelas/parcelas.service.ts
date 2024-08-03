import { Injectable } from '@nestjs/common';
import { Movimentacao } from '../entities/movimentacao.entity';
import { CreateParcelaDto } from './dto/create-parcela.dto';
import { UpdateParcelaDto } from './dto/update-parcela.dto';
import { ParcelaRepository } from './parcelas.repository';

@Injectable()
export class ParcelasService {
  constructor(private readonly parcelaRepository: ParcelaRepository) {}

  async createFromMovimentacao(movimentacao: Movimentacao) {
    // Cria as parcelas
    for (let i = 1; i <= movimentacao.qtd_parcelas; i++) {
      const parcela = {
        movimentacao_id: movimentacao.id,
        numero: i,
        valor: movimentacao.valor / movimentacao.qtd_parcelas,
        data_vencimento: new Date(),
      };
      await this.parcelaRepository.create(parcela);
    }
  }
  create(createParcelaDto: CreateParcelaDto) {
    return this.parcelaRepository.create(createParcelaDto);
  }

  findAll() {
    return this.parcelaRepository.findAll();
  }

  findOne(id: string) {
    return this.parcelaRepository.findById(id);
  }

  update(id: string, updateParcelaDto: UpdateParcelaDto) {
    return this.parcelaRepository.update(id, updateParcelaDto);
  }

  remove(id: string) {
    return this.parcelaRepository.delete(id);
  }
}
