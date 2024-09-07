import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './entities/usuario.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name)
    private readonly usuarioModel: Model<Usuario>,
  ) {}

  async findAll() {
    return this.usuarioModel.find().exec();
  }

  async findOne(id: string) {
    return this.usuarioModel.findById(id);
  }

  async findByEmail(email: string) {
    return this.usuarioModel.findOne({ email });
  }

  async create(createUsuarioDto: UsuarioDto) {
    const createdUsuario = new this.usuarioModel(createUsuarioDto);
    return createdUsuario.save();
  }

  async update(id: string, updateUsuarioDto: UsuarioDto) {
    return this.usuarioModel.updateOne({
      ...updateUsuarioDto,
      id,
    });
  }

  async remove(id: string) {
    return this.usuarioModel.findByIdAndDelete(id);
  }
}
