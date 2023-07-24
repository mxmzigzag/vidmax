import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MotionEntity } from './entities/motion.entity';

import { MotionService } from './motion.service';
import { MotionResolver } from './motion.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([MotionEntity])],
  providers: [MotionService, MotionResolver],
})
export class MotionModule {}
