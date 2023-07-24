import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FilmStatusEntity } from './entities/filmStatus.entity';

import { FilmStatusResolver } from './filmStatus.resolver';
import { FilmStatusService } from './filmStatus.service';

@Module({
  imports: [TypeOrmModule.forFeature([FilmStatusEntity])],
  providers: [FilmStatusResolver, FilmStatusService],
})
export class FilmStatusModule {}
