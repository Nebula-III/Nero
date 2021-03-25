import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({type: mongoose.Schema.Types.ObjectId})
    id: string;
    
    @Prop()
    name: string;
    
    
    @Prop()
    friend: string[];

    @Prop()
    blocks: string[];
    

}

export const UserSchema = SchemaFactory.createForClass(User);
