import { TipoMovimentacao } from 'src/usuarios/movimentacoes/enums/tipomovimentacao.enum';
import { Movimentacao } from 'src/usuarios/movimentacoes/interfaces/movimentacao.interface';

export const SALARIO: Movimentacao = {
  id: '1',
  timestamp: new Date(),
  usuario_id: '1',
  tipo: TipoMovimentacao.RECEITA,
  descricao: 'Salário',
  valor: 1000,
  pagamento: 'DINHEIRO',
  assinatura: true,
  qtd_parcelas: 1,
};

export const ALUGUEL: Movimentacao = {
  id: '2',
  timestamp: new Date(),
  usuario_id: '1',
  tipo: TipoMovimentacao.DESPESA,
  descricao: 'Aluguel',
  valor: 500,
  pagamento: 'DINHEIRO',
  assinatura: true,
  qtd_parcelas: 1,
};

export const CELTA: Movimentacao = {
  id: '3',
  timestamp: new Date(),
  usuario_id: '1',
  tipo: TipoMovimentacao.DESPESA,
  descricao: 'Celta',
  valor: 24000,
  pagamento: 'CARTAO',
  assinatura: false,
  qtd_parcelas: 12,
};

export const MOVIMENTACOES: Movimentacao[] = [SALARIO, ALUGUEL];
