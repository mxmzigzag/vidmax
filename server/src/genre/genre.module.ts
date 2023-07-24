import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GenreEntity } from './entities/genre.entity';

import { GenreService } from './genre.service';
import { GenreResolver } from './genre.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([GenreEntity])],
  providers: [GenreService, GenreResolver],
})
export class GenreModule {}
