import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CountryEntity } from './entities/country.entity';

import { CountryService } from './country.service';
import { CountryResolver } from './country.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([CountryEntity])],
  providers: [CountryService, CountryResolver],
})
export class CountryModule {}
