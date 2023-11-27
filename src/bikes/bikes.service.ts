import { Injectable, NotFoundException } from '@nestjs/common';
import { Bike } from './entities/bike.entity';

@Injectable()
export class BikesService {
  private bikes: Bike[] = [
    {
      id: 1,
      colors: [],
      name: 'Merida',
      type: 'gravel',
    },
  ];

  findAll() {
    return this.bikes;
  }

  findOne(id: string) {
    const bike = this.bikes.find((bike) => bike.id === +id);

    if (!bike) {
      // throw new HttpException(`Bike #${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`Bike #${id} not found`);
    }

    return bike;
  }

  create(createBikeDto: any) {
    this.bikes.push(createBikeDto);

    return createBikeDto;
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
