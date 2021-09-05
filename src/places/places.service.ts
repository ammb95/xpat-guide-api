import { Inject, Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place } from './place.entity';

@Injectable()
export class PlacesService {
  constructor(
    @Inject('PLACES_REPOSITORY')
    private placesRepository: typeof Place,
  ) {}

  async create(createPlaceDto: CreatePlaceDto) {
    return this.placesRepository.create<Place>(createPlaceDto);
  }

  async findAll(): Promise<Place[]> {
    return this.placesRepository.findAll<Place>();
  }

  async findOne(id: number): Promise<Place> {
    return this.placesRepository.findByPk(id);
  }

  async like(id: number) {
    const place = await this.placesRepository.findByPk(+id);
    const likes = place.likes + 1;
    return this.placesRepository.update(
      { likes },
      { returning: true, where: { id } },
    );
  }

  async update(id: number, updatePlaceDto: UpdatePlaceDto) {
    return this.placesRepository.update(updatePlaceDto, {
      returning: true,
      where: { id },
    });
  }

  async remove(id: number) {
    return this.placesRepository.destroy({ where: { id } });
  }
}
