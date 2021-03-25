import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppGateway } from './gateway/app.gateway';
import { Message, MessageSchema } from './schemas/message/message.schema';
import { User, UserSchema } from './schemas/user/user.schema';


@Module({
    imports: [
        // MongooseModule.forFeature([
        //     { name: User.name, schema: UserSchema },
        //     { name: Message.name, schema: MessageSchema },
        // ]),
    ],
    controllers: [],
    providers: [
        AppGateway
    ],
})
export class DispatcherModule {}
