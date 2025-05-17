/**
 * Contrato para qualquer adaptador de comunicação na camada de infraestrutura.
 */
export interface ICommunicator {
  /**
   * Inicializa a conexão (ex: abre WebSocket)
   */
  connect(): void;

  /**
   * Envia mensagem crua ao servidor
   * @param message String já formatada pelo protocolo
   */
  send(message: string): void;

  /**
   * Registra callback para processar mensagens recebidas do servidor
   * @param handler Função que recebe a string bruta de resposta
   */
  onMessage(handler: (response: string) => void): void;

  /**
   * Fecha a conexão de forma adequada
   */
  close(): void;
}