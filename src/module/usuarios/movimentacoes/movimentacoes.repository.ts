import { Model } from 'mongoose';
import { Movimentacao } from './entities/movimentacao.entity';
import { CreateMovimentacaoDto } from './dto/create-movimentacao.dto';
import { UpdateMovimentacaoDto } from './dto/update-movimentacao.dto';
import { IRepository } from 'src/db/interface.repository';

export class MovimentacaoRepository implements IRepository<Movimentacao> {
  constructor(private readonly movimentacaoModel: Model<Movimentacao>) {}

  async findById(id: string): Promise<Movimentacao> {
    return this.movimentacaoModel.findById(id);
  }

  async findByUsuarioId(usuario_id: string): Promise<Movimentacao[]> {
    return this.movimentacaoModel.find({ usuario_id });
  }

  async findAll(): Promise<Movimentacao[]> {
    return this.movimentacaoModel.find();
  }

  async create(movimentacao: CreateMovimentacaoDto): Promise<Movimentacao> {
    return this.movimentacaoModel.create(movimentacao);
  }

  async update(
    id: string,
    movimentacao: UpdateMovimentacaoDto,
  ): Promise<Movimentacao> {
    return this.movimentacaoModel.findByIdAndUpdate(id, movimentacao);
  }

  async delete(id: string): Promise<void> {
    return this.movimentacaoModel.findByIdAndDelete(id);
  }
}
