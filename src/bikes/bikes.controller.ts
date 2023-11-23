import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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

  @Post()
  create(@Body('name') body) {
    return body;
  }
}
