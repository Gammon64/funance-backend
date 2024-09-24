import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ParcelasService } from '../parcelas/parcelas.service';
import { CreateMovimentacaoDto } from './dto/create-movimentacao.dto';
import { UpdateMovimentacaoDto } from './dto/update-movimentacao.dto';
import { Movimentacao } from './entities/movimentacao.entity';

@Injectable()
export class MovimentacoesService {
  constructor(
    @InjectModel(Movimentacao.name)
    private readonly movimentacaoModel: Model<Movimentacao>,
    private readonly parcelasService: ParcelasService,
  ) {}

  async findAll(usuario_id?: string): Promise<Movimentacao[]> {
    if (usuario_id) return this.movimentacaoModel.find({ usuario_id }).exec();
    return this.movimentacaoModel.find().exec();
  }

  async findOne(id: string): Promise<Movimentacao> {
    return this.movimentacaoModel.findById(id).exec();
  }

  async create(
    createMovimentacaoDto: CreateMovimentacaoDto,
  ): Promise<Movimentacao> {
    const movimentacao = new this.movimentacaoModel(createMovimentacaoDto);
    movimentacao.save();

    this.parcelasService.createFromMovimentacao(movimentacao);
    return movimentacao;
  }

  async update(
    id: string,
    updateMovimentacaoDto: UpdateMovimentacaoDto,
  ): Promise<Movimentacao> {
    return this.movimentacaoModel
      .findByIdAndUpdate(id, updateMovimentacaoDto)
      .exec();
  }

  async remove(id: string): Promise<Movimentacao> {
    return this.movimentacaoModel.findByIdAndDelete(id).exec();
  }
}
