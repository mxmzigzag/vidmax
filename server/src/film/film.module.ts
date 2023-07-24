import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FilmEntity } from './entities/film.entity';

import { FilmResolver } from './film.resolver';
import { FilmService } from './film.service';

@Module({
  imports: [TypeOrmModule.forFeature([FilmEntity])],
  providers: [FilmResolver, FilmService],
})
export class FilmModule {}
