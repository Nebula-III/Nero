import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message, MessageDocument } from '../schemas/message/message.schema';



@Injectable()
export class RequestRepository {
    constructor(
        @InjectModel(Message.name)
        private requestModel: Model<MessageDocument>,
    ) {}


}
