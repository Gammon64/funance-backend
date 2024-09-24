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

  async findAll(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
  }

  async findOne(id: string): Promise<Usuario> {
    return this.usuarioModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<Usuario> {
    return this.usuarioModel.findOne({ email }).exec();
  }

  async create(createUsuarioDto: UsuarioDto): Promise<Usuario> {
    const createdUsuario = new this.usuarioModel(createUsuarioDto);
    return createdUsuario.save();
  }

  async update(id: string, updateUsuarioDto: UsuarioDto): Promise<Usuario> {
    return this.usuarioModel.findByIdAndUpdate(id, updateUsuarioDto).exec();
  }

  async remove(id: string): Promise<Usuario> {
    return this.usuarioModel.findByIdAndDelete(id);
  }
}
