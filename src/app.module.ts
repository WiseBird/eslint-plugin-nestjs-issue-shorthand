import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const providers = [AppService];

@Module({
  imports: [],
  controllers: [AppController],
  providers: providers,
  exports: providers,
})
export class AppModule {}
