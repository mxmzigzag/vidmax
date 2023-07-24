import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FilmEntity } from 'src/film/entities/film.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

enum Motions {
  '2D' = '2D',
  '3D' = '3D',
  IMAX = 'IMAX',
  IMAX3D = 'IMAX3D',
}

@ObjectType()
@Entity('motions')
export class MotionEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'enum', enum: Motions })
  name: Motions;

  @Field(() => [FilmEntity])
  @OneToMany(() => FilmEntity, (film: FilmEntity) => film.motionId)
  films: FilmEntity[];
}
