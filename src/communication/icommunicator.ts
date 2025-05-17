/**
 * Interface para adaptadores de comunicação na camada de infraestrutura.
 * Define as operações básicas para envio de mensagens e encerramento de conexão.
 */
export interface ICommunicator {

  /**
   * Envia uma mensagem já formatada ao servidor.
   * @param message Mensagem no formato do protocolo a ser enviada.
   */
  send(message: string): void;

  /**
   * Encerra a conexão com o servidor de forma adequada.
   */
  close(): void;
}