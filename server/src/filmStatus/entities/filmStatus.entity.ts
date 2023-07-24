import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FilmEntity } from 'src/film/entities/film.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

enum FilmStatuses {
  WAITING_FOR_RELEASE = 'Waiting for release',
  ONGOING = 'Ongoing',
  ENDED = 'Ended',
}

@ObjectType()
@Entity('filmStatuses')
export class FilmStatusEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({
    type: 'enum',
    enum: FilmStatuses,
    default: FilmStatuses.WAITING_FOR_RELEASE,
  })
  name: FilmStatuses;

  @Field(() => [FilmEntity])
  @OneToMany(() => FilmEntity, (film: FilmEntity) => film.statusId)
  films: FilmEntity[];
}
