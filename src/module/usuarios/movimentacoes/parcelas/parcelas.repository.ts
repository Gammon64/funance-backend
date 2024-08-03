import { Model } from 'mongoose';
import { Parcela } from './entities/parcela.entity';
import { IRepository } from 'src/db/interface.repository';

export class ParcelaRepository implements IRepository<Parcela> {
  constructor(private readonly parcelaModel: Model<Parcela>) {}

  async findById(id: string): Promise<Parcela> {
    return this.parcelaModel.findById(id);
  }

  async findByMovimentacaoId(movimentacao_id: string): Promise<Parcela[]> {
    return this.parcelaModel.find({ movimentacao_id });
  }

  async findAll(): Promise<Parcela[]> {
    return this.parcelaModel.find();
  }

  async create(parcela: any): Promise<Parcela> {
    return this.parcelaModel.create(parcela);
  }

  async update(id: string, parcela: any): Promise<Parcela> {
    return this.parcelaModel.findByIdAndUpdate(id, parcela);
  }

  async delete(id: string): Promise<void> {
    return this.parcelaModel.findByIdAndDelete(id);
  }
}
