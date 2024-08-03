import { TipoMovimentacao } from '../enums/tipomovimentacao.enum';

export class CreateMovimentacaoDto {
  usuario_id: string;
  tipo: TipoMovimentacao;
  descricao: string;
  valor: number;
  pagamento: string;
  assinatura: boolean = false;
  qtd_parcelas: number = 1;
  categoria?: string;
  agendamento_id?: string;
}
