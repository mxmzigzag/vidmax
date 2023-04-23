import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { CountryEntity } from 'src/country/entities/country.entity';

@ObjectType()
@Entity('users')
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column()
  password: string;

  @Field()
  @Column({ nullable: true })
  firstname: string;

  @Field()
  @Column({ nullable: true })
  lastname: string;

  @Field()
  @Column()
  username: string;

  @Field()
  @ManyToOne(() => CountryEntity, (country: CountryEntity) => country.users, {
    eager: true,
  })
  @JoinColumn()
  countryId: CountryEntity;

  @Field()
  @Column({ nullable: true })
  birthDate: Date;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
