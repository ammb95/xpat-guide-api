import { Body, Inject, Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
// import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place } from './place.entity';

@Injectable()
export class PlacesService {
  constructor(
    @Inject('PLACES_REPOSITORY')
    private placesRepository: typeof Place,
  ) {}

  async create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.placesRepository.create<Place>(createPlaceDto);
  }

  async findAll(): Promise<Place[]> {
    return this.placesRepository.findAll<Place>();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} place`;
  // }

  // update(id: number, updatePlaceDto: UpdatePlaceDto) {
  //   return `This action updates a #${id} place`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} place`;
  // }
}
