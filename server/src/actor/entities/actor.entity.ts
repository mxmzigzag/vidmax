import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CountryEntity } from 'src/country/entities/country.entity';
import { FilmEntity } from 'src/film/entities/film.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('actors')
export class ActorEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => CountryEntity)
  @ManyToOne(() => CountryEntity, (country: CountryEntity) => country.actors)
  countryId: CountryEntity;

  @Field()
  @Column()
  birthDate: Date;

  @Field()
  @Column()
  careerStartedAt: Date;

  @Field()
  @Column()
  quote: string;

  @Field()
  @Column()
  biography: string;

  @Field(() => [FilmEntity])
  @OneToMany(() => FilmEntity, (film: FilmEntity) => film.actorId)
  films: FilmEntity[];
}
