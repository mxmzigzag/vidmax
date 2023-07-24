import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CountryModule } from './country/country.module';
import { FilmModule } from './film/film.module';
import { ActorModule } from './actor/actor.module';
import { CompanyModule } from './company/company.module';
import { DirectorModule } from './director/director.module';
import { FilmRatingModule } from './filmRating/filmRating.module';
import { FilmStatusModule } from './filmStatus/filmStatus.module';
import { GenreModule } from './genre/genre.module';
import { HallModule } from './hall/hall.module';
import { MotionModule } from './motion/motion.module';
import { TagModule } from './tag/tag.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '../.env' }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: config.get<'aurora-postgres'>('TYPEORM_CONNECTION'),
        host: config.get<string>('TYPEORM_HOST'),
        username: config.get<string>('TYPEORM_USERNAME'),
        password: config.get<string>('TYPEORM_PASSWORD'),
        database: config.get<string>('TYPEORM_DATABASE'),
        port: config.get<number>('TYPEORM_PORT'),
        entities: [__dirname + '/**/*.entity{.ts, .js}'],
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
      }),
    }),
    UsersModule,
    AuthModule,
    CountryModule,
    FilmModule,
    ActorModule,
    CompanyModule,
    DirectorModule,
    FilmRatingModule,
    FilmStatusModule,
    GenreModule,
    HallModule,
    MotionModule,
    TagModule,
    TicketModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
