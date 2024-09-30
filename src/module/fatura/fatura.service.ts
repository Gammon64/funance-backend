import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateFaturaDto } from './dto/create-fatura.dto';
import { UpdateFaturaDto } from './dto/update-fatura.dto';
import { Fatura } from './entities/fatura.entity';

@Injectable()
export class FaturaService {
  constructor(
    @InjectModel(Fatura.name)
    private readonly faturaModel: Model<Fatura>,
  ) {}
  /**
   * Retorna todas as faturas ou filtra por usuário se o ID do usuário for fornecido.
   * @param usuario_id - ID do usuário para filtrar as faturas.
   * @returns Lista de faturas.
   */
  findAll(usuario_id?: Types.ObjectId) {
    if (usuario_id) return this.faturaModel.find({ usuario_id }).exec();
    return this.faturaModel.find().exec();
  }

  /**
   * Retorna uma fatura específica pelo ID.
   * @param id - ID da fatura.
   * @returns Fatura encontrada.
   */
  findOne(id: number) {
    return this.faturaModel.findById(id);
  }

  /**
   * Busca ou cria uma fatura para um usuário dentro de um período de vencimento.
   * @param data_vencimento - Data de vencimento da fatura.
   * @param usuario_id - ID do usuário.
   * @returns Fatura encontrada ou criada.
   */
  async findOrCreate(data_vencimento: Date, usuario_id: Types.ObjectId) {
    // Busca uma fatura dentro de um período de vencimento
    let fatura = await this.faturaModel
      .findOne({
        data_vencimento: {
          $gte: data_vencimento,
          $lte: data_vencimento.setDate(data_vencimento.getDate() + 30),
        },
      })
      .exec();
    // Se não encontrar, cria uma nova fatura
    if (!fatura) {
      const novaFatura = new this.faturaModel({
        data_vencimento: data_vencimento,
        usuario_id: usuario_id,
      });
      fatura = await novaFatura.save();
    }

    return fatura;
  }

  /**
   * Cria uma nova fatura.
   * @param createFaturaDto - Dados para criação da fatura.
   * @returns Fatura criada.
   */
  create(createFaturaDto: CreateFaturaDto) {
    const fatura = new this.faturaModel(createFaturaDto);
    return fatura.save();
  }

  /**
   * Atualiza uma fatura existente pelo ID.
   * @param id - ID da fatura.
   * @param updateFaturaDto - Dados para atualização da fatura.
   * @returns Fatura atualizada.
   */
  update(id: number, updateFaturaDto: UpdateFaturaDto) {
    return `This action updates a #${id} fatura`;
  }

  /**
   * Remove uma fatura pelo ID.
   * @param id - ID da fatura.
   * @returns Fatura removida.
   */
  remove(id: number) {
    return `This action removes a #${id} fatura`;
  }
}
