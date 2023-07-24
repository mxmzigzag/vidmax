import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { WorldRegions } from '../types/country.enum';
import { UserEntity } from 'src/users/entities/user.entity';
import { FilmEntity } from 'src/film/entities/film.entity';
import { DirectorEntity } from 'src/director/entities/director.entity';
import { ActorEntity } from 'src/actor/entities/actor.entity';

@ObjectType()
@Entity('countries')
export class CountryEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ unique: true })
  name: string;

  @Field()
  @Column({ unique: true })
  abbreviation: string;

  @Field()
  @Column({ type: 'enum', enum: WorldRegions })
  region: WorldRegions;

  @Field(() => [UserEntity])
  @OneToMany(() => UserEntity, (user: UserEntity) => user.countryId)
  users: UserEntity[];

  @Field(() => [FilmEntity])
  @OneToMany(() => FilmEntity, (film: FilmEntity) => film.countryId)
  films: FilmEntity[];

  @Field(() => [DirectorEntity])
  @OneToMany(() => DirectorEntity, (person: DirectorEntity) => person.countryId)
  directors: DirectorEntity[];

  @Field(() => [ActorEntity])
  @OneToMany(() => ActorEntity, (person: ActorEntity) => person.countryId)
  actors: ActorEntity[];
}
