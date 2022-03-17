import { io, Socket } from "socket.io-client";

export default class ChatService {
    socket: Socket;

    constructor() {
        const serverHost: string = process.env.CHAT_HOST || 'http://localhost';
        this.socket = io(serverHost);
    }

    registerUser(username: string): void {
        this.socket.emit('add user', username);
    }

    sendMesage(message: string): void {
        // TODO in the future we want to specify to which channel the message will be sent
        this.socket.emit('new message', message);
    }

    listenToNewMessages(): void {
        this.socket.on('new message', (data: any) => {
            console.log(data);
            // TODO some possible validations
            // TODO notify listeners
        });
    }
}
