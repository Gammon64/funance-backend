import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Movimentacao } from '../entities/movimentacao.entity';
import { CreateParcelaDto } from './dto/create-parcela.dto';
import { UpdateParcelaDto } from './dto/update-parcela.dto';
import { Parcela } from './entities/parcela.entity';

@Injectable()
export class ParcelasService {
  constructor(
    @InjectModel(Parcela.name)
    private readonly parcelaModel: Model<Parcela>,
  ) {}

  async findAll() {
    return this.parcelaModel.find().exec();
  }

  async findOne(id: string) {
    return this.parcelaModel.findById(id);
  }

  async findByUsuarioId(usuario_id: string) {
    return this.parcelaModel.find({ usuario_id });
  }

  async create(createParcelaDto: CreateParcelaDto) {
    const parcela = new this.parcelaModel(createParcelaDto);
    parcela.save();
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
      await this.create(parcela);
    }
  }

  async update(id: string, updateParcelaDto: UpdateParcelaDto) {
    return this.parcelaModel.updateOne({
      ...updateParcelaDto,
      id,
    });
  }

  async remove(id: string) {
    return this.parcelaModel.findByIdAndDelete(id);
  }
}
