import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Movimentacao } from '../movimentacoes/entities/movimentacao.entity';
import { CreateParcelaDto } from './dto/create-parcela.dto';
import { UpdateParcelaDto } from './dto/update-parcela.dto';
import { Parcela } from './entities/parcela.entity';

/**
 * Serviço responsável por gerenciar as parcelas.
 */
@Injectable()
export class ParcelasService {
  constructor(
    @InjectModel(Parcela.name)
    private readonly parcelaModel: Model<Parcela>,
  ) {}

  /**
   * Retorna todas as parcelas ou filtra por movimentação se o ID da movimentação for fornecido.
   * @param movimentacao_id - ID da movimentação para filtrar as parcelas.
   * @returns Lista de parcelas.
   */
  async findAll(movimentacao_id?: Types.ObjectId) {
    if (movimentacao_id)
      return this.parcelaModel.find({ movimentacao_id }).exec();
    return this.parcelaModel.find().exec();
  }

  /**
   * Retorna uma parcela específica pelo ID.
   * @param id - ID da parcela.
   * @returns Parcela encontrada.
   */
  async findOne(id: string) {
    return this.parcelaModel.findById(id);
  }

  /**
   * Cria uma nova parcela.
   * @param createParcelaDto - Dados para criação da parcela.
   * @returns Parcela criada.
   */
  async create(createParcelaDto: CreateParcelaDto) {
    const parcela = new this.parcelaModel(createParcelaDto);
    parcela.save();
  }

  /**
   * Cria parcelas a partir de uma movimentação.
   * @param movimentacao - Movimentação contendo os dados para criação das parcelas.
   */
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

  /**
   * Atualiza uma parcela existente.
   * @param id - ID da parcela a ser atualizada.
   * @param updateParcelaDto - Dados para atualização da parcela.
   * @returns Parcela atualizada.
   */
  async update(id: string, updateParcelaDto: UpdateParcelaDto) {
    return this.parcelaModel.findByIdAndUpdate(id, updateParcelaDto);
  }

  /**
   * Remove uma parcela pelo ID.
   * @param id - ID da parcela a ser removida.
   * @returns Parcela removida.
   */
  async remove(id: string) {
    return this.parcelaModel.findByIdAndDelete(id);
  }
}
