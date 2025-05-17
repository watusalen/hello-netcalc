import { ICommunicator } from "./icommunicator";

/**
 * Adaptador WebSocket para comunicação com o servidor.
 * Responsável por gerenciar a conexão, envio, recebimento e encerramento de mensagens.
 */
export class Comunicador implements ICommunicator {
    /** Instância do WebSocket utilizada para comunicação. */
    private socket: WebSocket;
    /**
     * Callback opcional para tratar mensagens recebidas do servidor.
     * Deve ser definida pelo consumidor da classe.
     */
    public onMessage: ((response: string) => void) | undefined;

    /**
     * Inicializa a conexão WebSocket e configura os handlers de eventos.
     */
    constructor() {
        this.socket = new WebSocket('ws://localhost:8080');

        this.socket.onopen = () => {
            console.log('WebSocket conectado');
        };

        this.socket.onmessage = (event) => {
            if (this.onMessage) {
                this.onMessage(event.data);
            }
            console.log(event.data + '\n');
        };

        this.socket.onclose = () => {
            console.log('Desconectado do servidor.');
        }
    }

    /**
     * Envia uma mensagem para o servidor via WebSocket.
     * @param mensagem Mensagem a ser enviada ao servidor.
     */
    public send(mensagem: string) {
        this.socket.send(mensagem);
        console.log(`Mensagem enviada ao servidor:\n${mensagem}\n`);
    }

    /**
     * Encerra a conexão com o servidor.
     * Envia uma mensagem vazia para sinalizar o encerramento.
     */
    public close() {
        this.socket.send('');
        console.log('Cliente sinalizou encerramento da conexão.');
    }
}