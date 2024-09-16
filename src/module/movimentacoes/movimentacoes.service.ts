import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovimentacaoDto } from './dto/create-movimentacao.dto';
import { UpdateMovimentacaoDto } from './dto/update-movimentacao.dto';
import { Movimentacao } from './entities/movimentacao.entity';
import { ParcelasService } from '../parcelas/parcelas.service';

@Injectable()
export class MovimentacoesService {
  constructor(
    @InjectModel(Movimentacao.name)
    private readonly movimentacaoModel: Model<Movimentacao>,
    private readonly parcelasService: ParcelasService,
  ) {}

  async findAll() {
    return this.movimentacaoModel.find().exec();
  }

  async findOne(id: string) {
    return this.movimentacaoModel.findById(id);
  }

  async findByMovimentacaoId(usuario_id: string) {
    return this.movimentacaoModel.find({ usuario_id });
  }

  async create(createMovimentacaoDto: CreateMovimentacaoDto) {
    const movimentacao = new this.movimentacaoModel(createMovimentacaoDto);
    movimentacao.save();

    this.parcelasService.createFromMovimentacao(movimentacao);
  }

  async update(id: string, updateMovimentacaoDto: UpdateMovimentacaoDto) {
    return this.movimentacaoModel.updateOne({
      ...updateMovimentacaoDto,
      id,
    });
  }

  async remove(id: string) {
    return this.movimentacaoModel.findByIdAndDelete(id);
  }
}
