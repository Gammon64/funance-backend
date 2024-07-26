export interface Agendamento {
  id?: string;
  timestamp: Date;

  data: Date;
  assinatura: boolean;
  parcelas: number;
  parcela: number;
}
