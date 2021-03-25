import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
          uri: config.mongoDBConfig.uri,
      }),
      inject: [ConfigService],
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
