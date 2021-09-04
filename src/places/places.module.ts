import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { DatabaseModule } from 'src/database/database.module';
import { placesProviders } from './places.providers';
@Module({
  imports: [DatabaseModule],
  controllers: [PlacesController],
  providers: [PlacesService, ...placesProviders],
})
export class PlacesModule {}
