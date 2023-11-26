import { Injectable } from '@nestjs/common';
import { Bike } from './entities/bike.entity';

@Injectable()
export class BikesService {
  private bikes: Bike[] = [];

  findAll() {
    return this.bikes;
  }

  findOne(id: string) {
    return this.bikes.find((bike) => bike.id === +id);
  }

  create(createBikeDto: any) {
    this.bikes.push(createBikeDto);
  }

  update(id: string, updateBikeDto: any) {
    const existingBike = this.findOne(id);

    if (existingBike) {
      //update
    }
  }

  remove(id: string) {
    const bikeIndex = this.bikes.findIndex((bike) => bike.id === +id);

    if (bikeIndex) {
      this.bikes.splice(bikeIndex, 1);
    }
  }
}
