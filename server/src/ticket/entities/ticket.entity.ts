import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FilmEntity } from 'src/film/entities/film.entity';
import { HallEntity } from 'src/hall/entities/hall.entity';
import { MotionEntity } from 'src/motion/entities/motion.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('tickets')
export class TicketEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @Column()
  date: Date;

  @Field(() => HallEntity)
  @ManyToOne(() => HallEntity, (hall: HallEntity) => hall.tickets)
  hallId: HallEntity;

  @Field()
  @Column()
  row: number;

  @Field()
  @Column()
  seat: number;

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user: UserEntity) => user.tickets)
  userId: UserEntity;

  // @Field(() => FilmEntity)
  // @OneToMany(() => FilmEntity, (film: FilmEntity) => film.tickets)
  // filmId: FilmEntity;
}
