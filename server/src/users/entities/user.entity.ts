import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { CountryEntity } from 'src/country/entities/country.entity';
import { TicketEntity } from 'src/ticket/entities/ticket.entity';

@ObjectType()
@Entity('users')
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
  countryId?: CountryEntity;

  @Field()
  @Column({ nullable: true })
  birthDate?: Date;

  @Field()
  @OneToMany(() => TicketEntity, (ticket: TicketEntity) => ticket.userId)
  @JoinColumn()
  tickets?: TicketEntity;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
