import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRepository } from 'src/db/interface.repository';
import { UsuarioDto } from './dto/usuario.dto';
import { Usuario } from './entities/usuario.entity';

export class UsuarioRepository implements IRepository<Usuario> {
  constructor(
    @InjectModel(Usuario.name)
    private readonly usuarioModel: Model<Usuario>,
  ) {}

  async findById(id: string): Promise<Usuario> {
    return this.usuarioModel.findById(id);
  }

  async findByEmail(email: string): Promise<Usuario> {
    return this.usuarioModel.findOne({ email });
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioModel.find();
  }

  async create(usuario: UsuarioDto): Promise<Usuario> {
    return this.usuarioModel.create(usuario);
  }

  async update(id: string, usuario: UsuarioDto): Promise<Usuario> {
    return this.usuarioModel.findByIdAndUpdate(id, usuario);
  }

  async delete(id: string): Promise<void> {
    return this.usuarioModel.findByIdAndDelete(id);
  }
}
