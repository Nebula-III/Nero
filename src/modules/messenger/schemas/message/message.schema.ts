import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
    @Prop({type: mongoose.Schema.Types.ObjectId})
    id: string;
    
    @Prop()
    from: string;
    
    @Prop()
    to: string;
    
    @Prop()
    data: string;
    
    
   
    

}

export const MessageSchema = SchemaFactory.createForClass(Message);
