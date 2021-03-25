import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
    MessageBody,
   } from '@nestjs/websockets';
   import { Socket, Server } from 'socket.io';


   @WebSocketGateway(1025)
   export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor() {
        
    }
    
    
    afterInit() : void {
        console.log("Server initialized");
    }
   
    @WebSocketServer() server: Server
   

   
  
    handleDisconnect(client: Socket): void {
     console.log(`Client disconnected: ${client.id}`);
    }
   
    handleConnection(client: Socket, ...args: any[]) : void {
     console.log(`Client connected: ${client.id}`);
    }

    @SubscribeMessage('message')
    handleMessage(client: Socket, payload: string): void {
        console.log(payload)
        this.server.emit('conversation', payload);
       }
      


    // @SubscribeMessage('stop')
    // handleStopEvent(@MessageBody() data: string): void {
            
          
    //     }
   }

   