import { Injectable, NotFoundException } from '@nestjs/common';
import { Bike } from './entities/bike.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';

@Injectable()
export class BikesService {
  constructor(
    @InjectRepository(Bike)
    private readonly bikeRepository: Repository<Bike>,
  ) {}

  findAll() {
    return this.bikeRepository.find();
  }

  async findOne(id: string) {
    const bike = await this.bikeRepository.findOne({ where: { id: +id } });

    if (!bike) {
      throw new NotFoundException(`Bike #${id} not found`);
    }

    return bike;
  }

  create(createBikeDto: CreateBikeDto) {
    const bike = this.bikeRepository.create(createBikeDto);
    return this.bikeRepository.save(bike);
  }

  async update(id: string, updateBikeDto: UpdateBikeDto) {
    const bike = await this.bikeRepository.preload({
      id: +id,
      ...updateBikeDto,
    });

    if (!bike) {
      throw new NotFoundException(`Bike #${id} not  found`);
    }

    return this.bikeRepository.save(bike);
  }

  async remove(id: string) {
    const bike = await this.findOne(id);
    return this.bikeRepository.remove(bike);
  }
}
