import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  Param,
  Patch,
  Delete,
  Put,
  // Patch, Param, Delete
} from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { PlacesInterceptor } from './places.interceptor';
import { UpdatePlaceDto } from './dto/update-place.dto';
// import { UpdatePlaceDto } from './dto/update-place.dto';
@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @UseInterceptors(PlacesInterceptor)
  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.placesService.create(createPlaceDto);
  }

  @Get()
  findAll() {
    return this.placesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.placesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlaceDto: UpdatePlaceDto) {
    return this.placesService.update(+id, updatePlaceDto);
  }

  @Patch(':id/like')
  like(@Param('id') id: string) {
    return this.placesService.like(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.placesService.remove(+id);
  }
}
