import { TipoMovimentacao } from '../enums/tipomovimentacao.enum';

export interface Movimentacao {
  id?: string;
  timestamp?: Date;
  usuario_id: string;

  tipo: TipoMovimentacao;
  descricao: string;
  valor: number;
  pagamento: string;
  assinatura: boolean;
  qtd_parcelas: number;
  categoria?: string;
  agendamento_id?: string;
}
