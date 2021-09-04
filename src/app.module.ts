import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [ConfigModule.forRoot(), PlacesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
