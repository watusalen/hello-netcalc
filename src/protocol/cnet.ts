import { IMessageRequest, IMessageResponse } from "./imessageprotocol";

/**
 * Implementação de uma requisição do protocolo CNET.
 * 
 * Representa uma operação aritmética entre dois operandos, com validação e serialização.
 * Os operadores permitidos estão definidos em CNETRequest.allowedOperations.
 */
export class CNETRequest implements IMessageRequest {
    /** Operação a ser realizada (ex: ADD, SUB, MUL, DIV) */
    operation: string;
    /** Primeiro operando (em formato string, convertido para número na validação) */
    operand1: string;
    /** Segundo operando (em formato string, convertido para número na validação) */
    operand2: string;

    /** Lista de operações permitidas pelo protocolo */
    static allowedOperations = ["ADD", "SUB", "MUL", "DIV"];

    /**
     * Cria uma nova requisição CNET.
     * @param operation Operação a ser realizada
     * @param operand1 Primeiro operando
     * @param operand2 Segundo operando
     */
    constructor(operation: string, operand1: string, operand2: string) {
        this.operation = operation;
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.validate();
    }

    /**
     * Constrói uma nova instância a partir de uma string bruta no formato do protocolo.
     * @param request String contendo a requisição
     * @returns Nova instância de CNETRequest
     */
    fromString(request: string): IMessageRequest {
        const lines: Array<string> = request.split("\n");
        const operation: string = this.extractValue(lines, "OPERATION");
        const operand1: string = this.extractValue(lines, "OPERAND1");
        const operand2: string = this.extractValue(lines, "OPERAND2");
        return new CNETRequest(operation, operand1, operand2);
    }

    /**
     * Valida os campos da requisição.
     * Lança exceção se algum campo estiver inválido.
     */
    validate(): void {
        if (!this.operation || !this.operand1 || !this.operand2) {
            throw new Error("Requisição inválida: operação, operand1 e operand2 são obrigatórios.");
        }
        const op1: number = Number(this.operand1);
        const op2: number = Number(this.operand2);
        if (isNaN(op1) || isNaN(op2)) {
            throw new Error("Requisição inválida: o primeiro ou o segundo operando não são números.");
        }
        if (!CNETRequest.allowedOperations.includes(this.operation)) {
            throw new Error(`Requisição inválida: operação ${this.operation} não é válida.`);
        }
    }

    /**
     * Serializa a requisição para string no formato do protocolo.
     * @returns String representando a requisição
     */
    toString(): string {
        return [
            `OPERATION:${this.operation}`,
            `OPERAND1:${this.operand1}`,
            `OPERAND2:${this.operand2}`
        ].join('\n');
    }

    /**
     * Extrai o valor de uma chave específica de um array de linhas.
     * @param lines Array de strings (linhas)
     * @param key Chave a ser buscada
     * @returns Valor associado à chave
     */
    extractValue(lines: Array<String>, key: string): string {
        const line = lines.find(line => line.startsWith(key));
        if (line) {
            return line.split(":")[1].trim();
        }
        throw new Error(`Chave ${key} não encontrada na requisição.`);
    }
}

export class CNETResponse implements IMessageResponse {
    result: string;
    status: string;
    message: string;

    extractValue(lines: Array<String>, key: string): string {
        throw new Error("Method not implemented.");
    }

    fromString(response: string): IMessageResponse {
        throw new Error("Method not implemented.");
    }
    validate(): boolean {
        throw new Error("Method not implemented.");
    }
    toString(): string {
        throw new Error("Method not implemented.");
    }

}