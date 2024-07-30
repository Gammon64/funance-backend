import { TipoMovimentacao } from '../enums/tipomovimentacao.enum';

export interface Movimentacao {
  id?: string;
  timestamp?: Date;
  usuario_id: string;

  tipo: TipoMovimentacao;
  descricao: string;
  valor: number;
  pagamento: string;
  categoria?: string;
  parcela?: number;
  agendamento_id?: string;
}
