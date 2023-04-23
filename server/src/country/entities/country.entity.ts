import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { WorldRegions } from '../types/country.enum';
import { UserEntity } from 'src/users/entities/user.entity';

@ObjectType()
@Entity('countries')
export class CountryEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: number;

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
}
