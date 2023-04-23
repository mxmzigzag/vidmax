import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { countries } from './country.data';
import { CountryEntity } from './entities/country.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(CountryEntity)
    private readonly countryRepository: Repository<CountryEntity>,
  ) {}

  async getCountries(): Promise<CountryEntity[]> {
    return this.countryRepository.find();
  }

  async seedCountries(): Promise<CountryEntity[]> {
    return this.countryRepository.save(countries);
  }
}
