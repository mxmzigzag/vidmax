import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FilmEntity } from 'src/film/entities/film.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('companies')
export class CompanyEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => [FilmEntity])
  @OneToMany(() => FilmEntity, (film: FilmEntity) => film.companyId)
  films: FilmEntity[];
}
