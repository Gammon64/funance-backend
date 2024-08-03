import { Injectable } from '@nestjs/common';
import { UpdateMovimentacaoDto } from './dto/update-movimentacao.dto';
import { MovimentacaoRepository } from './movimentacoes.repository';
import { CreateMovimentacaoDto } from './dto/create-movimentacao.dto';
import { ParcelasService } from './parcelas/parcelas.service';

@Injectable()
export class MovimentacoesService {
  constructor(
    private readonly movimentacaoRepository: MovimentacaoRepository,
    private readonly parcelasService: ParcelasService,
  ) {}

  async create(createMovimentacaoDto: CreateMovimentacaoDto) {
    const movimentacao = await this.movimentacaoRepository.create(
      createMovimentacaoDto,
    );
    this.parcelasService.createFromMovimentacao(movimentacao);
  }

  findAll() {
    return this.movimentacaoRepository.findAll();
  }

  findOne(id: string) {
    return this.movimentacaoRepository.findById(id);
  }

  update(id: string, updateMovimentacaoDto: UpdateMovimentacaoDto) {
    return this.movimentacaoRepository.update(id, updateMovimentacaoDto);
  }

  remove(id: string) {
    return this.movimentacaoRepository.delete(id);
  }
}
