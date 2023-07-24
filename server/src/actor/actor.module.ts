import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ActorEntity } from './entities/actor.entity';

import { ActorResolver } from './actor.resolver';
import { ActorService } from './actor.service';

@Module({
  imports: [TypeOrmModule.forFeature([ActorEntity])],
  providers: [ActorResolver, ActorService],
})
export class ActorModule {}
