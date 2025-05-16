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
  validate(): void;

  /** Extrai o valor de uma chave específica de um array de linhas */
  extractValue(lines: Array<String>, key: string): string;

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
  validate(): void;


  extractValue(array: Array<String>, key: string): string;

  /** Serializa para string no formato do protocolo */
  toString(): string;
}
