import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HallEntity } from './entities/hall.entity';

import { HallService } from './hall.service';
import { HallResolver } from './hall.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([HallEntity])],
  providers: [HallService, HallResolver],
})
export class HallModule {}
