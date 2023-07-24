import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TicketEntity } from './entities/ticket.entity';

import { TicketResolver } from './ticket.resolver';
import { TicketService } from './ticket.service';

@Module({
  imports: [TypeOrmModule.forFeature([TicketEntity])],
  providers: [TicketResolver, TicketService],
})
export class TicketModule {}
