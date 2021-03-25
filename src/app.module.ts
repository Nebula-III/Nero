import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DispatcherModule } from './modules/messenger/messenger.module';

@Module({
  imports: [
  //   MongooseModule.forRootAsync({
  //     useFactory: async (config: ConfigService) => ({
  //         uri: config.mongoDBConfig.uri,
  //     }),
  //     inject: [ConfigService],
  // }),
    DispatcherModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
