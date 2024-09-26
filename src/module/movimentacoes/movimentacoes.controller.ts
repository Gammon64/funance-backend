import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MovimentacoesService } from './movimentacoes.service';
import { CreateMovimentacaoDto } from './dto/create-movimentacao.dto';
import { UpdateMovimentacaoDto } from './dto/update-movimentacao.dto';
import { Types } from 'mongoose';

@Controller('movimentacoes')
export class MovimentacoesController {
  constructor(private readonly movimentacoesService: MovimentacoesService) {}

  @Post()
  create(@Body() createMovimentacoeDto: CreateMovimentacaoDto) {
    return this.movimentacoesService.create(createMovimentacoeDto);
  }

  @Get()
  findAll(@Query('usuario_id') usuario_id?: string) {
    const usuario_Oid = new Types.ObjectId(usuario_id);
    return this.movimentacoesService.findAll(usuario_Oid);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movimentacoesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMovimentacoeDto: UpdateMovimentacaoDto,
  ) {
    return this.movimentacoesService.update(id, updateMovimentacoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movimentacoesService.remove(id);
  }
}
