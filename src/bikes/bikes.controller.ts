import { Controller, Get } from '@nestjs/common';

@Controller('bikes')
export class BikesController {
  @Get()
  findAll() {
    return 'Return bikes';
  }
}
