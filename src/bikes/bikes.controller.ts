import { Controller, Get, Param } from '@nestjs/common';

@Controller('bikes')
export class BikesController {
  @Get()
  findAll() {
    return 'Return bikes';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `return #${id} bike`;
  }
}
