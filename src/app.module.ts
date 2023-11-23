import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BikesController } from './bikes/bikes.controller';
@Module({
  imports: [],
  controllers: [AppController, BikesController],
  providers: [AppService],
})
export class AppModule {}
