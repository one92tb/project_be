import { Module } from '@nestjs/common';
import { BikesController } from './bikes.controller';
import { BikesService } from './bikes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bike } from './entities/bike.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bike])],
  controllers: [BikesController],
  providers: [BikesService],
})
export class BikesModule {}
