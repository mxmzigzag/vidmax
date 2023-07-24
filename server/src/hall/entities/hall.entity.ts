import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TicketEntity } from 'src/ticket/entities/ticket.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('halls')
export class HallEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  number: Date;

  @Field()
  @Column()
  rows: number;

  @Field()
  @Column()
  seats: number;

  @Field(() => [TicketEntity])
  @OneToMany(() => TicketEntity, (ticket: TicketEntity) => ticket.hallId)
  tickets: TicketEntity[];
}
