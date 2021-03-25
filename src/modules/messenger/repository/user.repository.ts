import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/user/user.schema';



@Injectable()
export class RequestRepository {
    constructor(
        @InjectModel(User.name)
        private requestModel: Model<UserDocument>,
    ) {}

    async create(user: any) {
        const createdUser = await this.requestModel.create({
            ...user,
        });
        createdUser.save();
        return createdUser;
    }

    async addFriend(id:string, friendId: any) {
        const toUpdate = await this.requestModel.findOne({id:id});
        const toUpdateFriend= [...toUpdate.friend,friendId]

        return await this.requestModel.findOneAndUpdate({id:id},{friend: toUpdateFriend},{new: true});
    }
    async addBlock(id:string, toBlockId: any) {
        const toUpdate = await this.requestModel.findOne({id:id});
        const toUpdateBlock= [...toUpdate.blocks,toBlockId]

        return await this.requestModel.findOneAndUpdate({id:id},{blocks: toBlockId},{new: true});
    }

    async findById(id: any) {
        return await this.requestModel
            .find({ id: id })
            .map(e => JSON.stringify(e));
    }

    async findByName(name: any) {
        return await this.requestModel
            .find({ name: name })
            .map(e => JSON.stringify(e));
    }
}
