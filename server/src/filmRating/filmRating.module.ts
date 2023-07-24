import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FilmRatingEntity } from './entities/filmRating.entity';

import { FilmRatingResolver } from './filmRating.resolver';
import { FilmRatingService } from './filmRating.service';

@Module({
  imports: [TypeOrmModule.forFeature([FilmRatingEntity])],
  providers: [FilmRatingResolver, FilmRatingService],
})
export class FilmRatingModule {}
