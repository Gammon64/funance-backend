import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ParcelasService } from '../parcelas/parcelas.service';
import { CreateMovimentacaoDto } from './dto/create-movimentacao.dto';
import { UpdateMovimentacaoDto } from './dto/update-movimentacao.dto';
import { Movimentacao } from './entities/movimentacao.entity';

/**
 * Serviço responsável por gerenciar as movimentações.
 */
@Injectable()
export class MovimentacoesService {
  constructor(
    @InjectModel(Movimentacao.name)
    private readonly movimentacaoModel: Model<Movimentacao>,
    private readonly parcelasService: ParcelasService,
  ) {}

  /**
   * Retorna todas as movimentações ou filtra por usuário se o ID do usuário for fornecido.
   * @param usuario_id - ID do usuário para filtrar as movimentações.
   * @returns Lista de movimentações.
   */
  async findAll(usuario_id?: Types.ObjectId) {
    if (usuario_id) return this.movimentacaoModel.find({ usuario_id }).exec();
    return this.movimentacaoModel.find().exec();
  }

  /**
   * Retorna uma movimentação específica pelo ID.
   * @param id - ID da movimentação.
   * @returns Movimentação encontrada.
   */
  async findOne(id: string) {
    return this.movimentacaoModel.findById(id);
  }

  /**
   * Cria uma nova movimentação. Cria também as parcelas associadas à movimentação.
   * @param createMovimentacaoDto - Dados para criação da movimentação.
   * @returns Movimentação criada.
   */
  async create(createMovimentacaoDto: CreateMovimentacaoDto) {
    const movimentacao = new this.movimentacaoModel(createMovimentacaoDto);
    movimentacao.save();

    this.parcelasService.createFromMovimentacao(movimentacao);
    return movimentacao;
  }

  /**
   * Atualiza uma movimentação existente.
   * @param id - ID da movimentação a ser atualizada.
   * @param updateMovimentacaoDto - Dados para atualização da movimentação.
   * @returns Movimentação atualizada.
   */
  async update(id: string, updateMovimentacaoDto: UpdateMovimentacaoDto) {
    return this.movimentacaoModel.findByIdAndUpdate(id, updateMovimentacaoDto);
  }

  /**
   * Remove uma movimentação pelo ID.
   * @param id - ID da movimentação a ser removida.
   * @returns Movimentação removida.
   */
  async remove(id: string) {
    return this.movimentacaoModel.findByIdAndDelete(id);
  }
}
