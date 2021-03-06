import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreatePlaceDto } from './dto/create-place.dto';

@Injectable()
export class PlacesInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<CreatePlaceDto> {
    const request = context.switchToHttp().getRequest();
    request.body = { ...request.body, likes: 0, rating: 0 };
    return next.handle().pipe(map((flow) => flow));
  }
}
