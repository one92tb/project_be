import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

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
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `update #${id} bike, ${JSON.stringify(body)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `remove #${id} bike`;
  }
}
