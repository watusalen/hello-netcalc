/**
 * Dados + comportamentos de uma requisição
 */
export interface IMessageRequest {
  operation: string;
  operand1: string;
  operand2: string;

  /** Constrói uma nova instância a partir de uma string bruta */
  fromString(request: string): IMessageRequest;

  /** Valida campos; retorna true se tudo OK */
  validate(): boolean;

  /** Serializa para string no formato do protocolo */
  toString(): string;
}

/**
 * Dados + comportamentos de uma resposta
 */
export interface IMessageResponse {
  result: string;
  status: string;
  message: string;

  /** Constrói uma nova instância a partir de uma string bruta */
  fromString(response: string): IMessageResponse;

  /** Valida campos; retorna true se tudo OK */
  validate(): boolean;

  /** Serializa para string no formato do protocolo */
  toString(): string;
}
