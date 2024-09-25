import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './entities/usuario.entity';
import { Model } from 'mongoose';

/**
 * Serviço responsável por gerenciar os usuários.
 */
@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name)
    private readonly usuarioModel: Model<Usuario>,
  ) {}

  /**
   * Retorna todos os usuários.
   * @returns Lista de usuários.
   */
  async findAll() {
    return this.usuarioModel.find().exec();
  }

  /**
   * Retorna um usuário específico pelo ID.
   * @param id - ID do usuário.
   * @returns Usuário encontrado.
   */
  async findOne(id: string) {
    return this.usuarioModel.findById(id);
  }

  /**
   * Retorna um usuário específico pelo email.
   * @param email - Email do usuário.
   * @returns Usuário encontrado.
   */
  async findByEmail(email: string) {
    return this.usuarioModel.findOne({ email });
  }

  /**
   * Cria um novo usuário.
   * @param createUsuarioDto - Dados para criação do usuário.
   * @returns Usuário criado.
   */
  async create(createUsuarioDto: UsuarioDto) {
    const createdUsuario = new this.usuarioModel(createUsuarioDto);
    return createdUsuario.save();
  }

  /**
   * Atualiza um usuário existente.
   * @param id - ID do usuário a ser atualizado.
   * @param updateUsuarioDto - Dados para atualização do usuário.
   * @returns Usuário atualizado.
   */
  async update(id: string, updateUsuarioDto: UsuarioDto) {
    return this.usuarioModel.findByIdAndUpdate(id, updateUsuarioDto);
  }

  /**
   * Remove um usuário pelo ID.
   * @param id - ID do usuário a ser removido.
   * @returns Usuário removido.
   */
  async remove(id: string) {
    return this.usuarioModel.findByIdAndDelete(id);
  }
}
