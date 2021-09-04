import { Place } from './place.entity';

export const placesProviders = [
  {
    provide: 'PLACES_REPOSITORY',
    useValue: Place,
  },
];
