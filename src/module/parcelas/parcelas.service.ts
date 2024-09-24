import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Movimentacao } from '../movimentacoes/entities/movimentacao.entity';
import { CreateParcelaDto } from './dto/create-parcela.dto';
import { UpdateParcelaDto } from './dto/update-parcela.dto';
import { Parcela } from './entities/parcela.entity';

@Injectable()
export class ParcelasService {
  constructor(
    @InjectModel(Parcela.name)
    private readonly parcelaModel: Model<Parcela>,
  ) {}

  async findAll(movimentacao_id?: Types.ObjectId): Promise<Parcela[]> {
    if (movimentacao_id)
      return this.parcelaModel.find({ movimentacao_id }).exec();
    return this.parcelaModel.find().exec();
  }

  async findOne(id: string): Promise<Parcela> {
    return this.parcelaModel.findById(id).exec();
  }

  async create(createParcelaDto: CreateParcelaDto): Promise<Parcela> {
    const parcela = new this.parcelaModel(createParcelaDto);
    return parcela.save();
  }

  async createFromMovimentacao(
    movimentacao: Movimentacao & { _id: Types.ObjectId },
  ) {
    // Cria as parcelas
    for (let i = 1; i <= movimentacao.qtd_parcelas; i++) {
      const parcela: CreateParcelaDto = {
        movimentacao_id: movimentacao._id,
        numero: i,
        valor: movimentacao.valor / movimentacao.qtd_parcelas,
        data_vencimento: new Date(),
      };
      const parcela_criada = await this.create(parcela);
      movimentacao.parcelas.push(parcela_criada);
    }
  }

  async update(
    id: string,
    updateParcelaDto: UpdateParcelaDto,
  ): Promise<Parcela> {
    return this.parcelaModel.findByIdAndUpdate(id, updateParcelaDto).exec();
  }

  async remove(id: string): Promise<Parcela> {
    return this.parcelaModel.findByIdAndDelete(id).exec();
  }
}
