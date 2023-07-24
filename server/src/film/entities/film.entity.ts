import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ActorEntity } from 'src/actor/entities/actor.entity';
import { CompanyEntity } from 'src/company/entities/company.entity';
import { CountryEntity } from 'src/country/entities/country.entity';
import { DirectorEntity } from 'src/director/entities/director.entity';
import { FilmRatingEntity } from 'src/filmRating/entities/filmRating.entity';
import { FilmStatusEntity } from 'src/filmStatus/entities/filmStatus.entity';
import { GenreEntity } from 'src/genre/entities/genre.entity';
import { MotionEntity } from 'src/motion/entities/motion.entity';
import { TagEntity } from 'src/tag/entities/tag.entity';
import { TicketEntity } from 'src/ticket/entities/ticket.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity('films')
export class FilmEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  title: string;

  @Field(() => FilmStatusEntity)
  @ManyToOne(() => FilmStatusEntity, (status: FilmStatusEntity) => status.films)
  statusId: FilmStatusEntity;

  @OneToOne(() => FilmRatingEntity)
  rating: FilmRatingEntity;

  @Field()
  @Column()
  releasedAt: Date;

  @Field(() => CountryEntity)
  @ManyToOne(() => CountryEntity, (country: CountryEntity) => country.films)
  countryId: CountryEntity;

  @ManyToMany(() => GenreEntity)
  @JoinTable()
  genres: GenreEntity[];

  @Field()
  @Column()
  duration: number;

  @Field(() => MotionEntity)
  @ManyToOne(() => MotionEntity, (motion: MotionEntity) => motion.films)
  motionId: MotionEntity;

  @Field(() => CompanyEntity)
  @ManyToOne(() => CompanyEntity, (company: CompanyEntity) => company.films)
  companyId: CompanyEntity;

  @Field(() => DirectorEntity)
  @ManyToOne(() => DirectorEntity, (director: CompanyEntity) => director.films)
  directorId: CompanyEntity;

  @Field(() => ActorEntity)
  @ManyToOne(() => ActorEntity, (actor: ActorEntity) => actor.films)
  actorId: ActorEntity;

  @ManyToMany(() => TagEntity)
  @JoinTable()
  tags: TagEntity[];

  @ManyToMany(() => TicketEntity)
  @JoinTable()
  tickets: TicketEntity[];

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  cover: string;

  @Field()
  @Column()
  thumbnail: string;

  @Field()
  @Column()
  trailerUri: string;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
