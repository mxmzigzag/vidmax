import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum Genres {
  Action = 'Action',
  Adventure = 'Adventure',
  Animated = 'Animated',
  Comedy = 'Comedy',
  Drama = 'Drama',
  Fantasy = 'Fantasy',
}

@ObjectType()
@Entity('genres')
export class GenreEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ type: 'enum', enum: Genres })
  name: Genres;
}
