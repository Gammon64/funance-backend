import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MovimentacaoService } from './movimentacao.service';
import { Movimentacao } from './interfaces/movimentacao.interface';

@Controller('movimentacoes')
export class MovimentacaoController {
  constructor(private readonly movimentacaoService: MovimentacaoService) {}

  @Get(':usuario_id')
  async getMovimentacoes(@Param('usuario_id') usuario_id: string) {
    return this.movimentacaoService.getMovimentacoes(usuario_id);
  }

  @Get(':id')
  async getMovimentacaoById(@Param('id') id: string) {
    return this.movimentacaoService.getMovimentacaoById(id);
  }

  @Post()
  async createMovimentacao(@Body() movimentacao: Movimentacao) {
    return this.movimentacaoService.createMovimentacao(movimentacao);
  }

  @Put(':id')
  async updateMovimentacao(
    @Param('id') id: string,
    @Body() movimentacao: Movimentacao,
  ) {
    return this.movimentacaoService.updateMovimentacao(id, movimentacao);
  }

  @Delete(':id')
  async deleteMovimentacao(@Param('id') id: string) {
    return this.movimentacaoService.deleteMovimentacao(id);
  }
}
