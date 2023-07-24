import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DirectorEntity } from './entities/director.entity';

import { DirectorService } from './director.service';
import { DirectorResolver } from './director.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([DirectorEntity])],
  providers: [DirectorService, DirectorResolver],
})
export class DirectorModule {}
