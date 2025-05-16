import { IMessageRequest, IMessageResponse } from "./imessageprotocol";

export class CNETRequest implements IMessageRequest {
    operation: string;
    operand1: string;
    operand2: string;

    constructor(operation: string, operand1: string, operand2: string) {
        this.operation = operation;
        this.operand1 = operand1;
        this.operand2 = operand2;
        this.validate();
    }

    fromString(request: string): IMessageRequest {
        throw new Error("Method not implemented.");
    }
    validate(): boolean {
        throw new Error("Method not implemented.");
    }
    toString(): string {
        throw new Error("Method not implemented.");
    }

}

export class CNETResponse implements IMessageResponse {
    result: string;
    status: string;
    message: string;

    constructor(result: string, status: string, message: string) {
        this.result = result;
        this.status = status;
        this.message = message;
        this.validate();
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