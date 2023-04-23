import { Mutation, Query, Resolver } from '@nestjs/graphql';

import { CountryEntity } from './entities/country.entity';
import { CountryService } from './country.service';

@Resolver('country')
export class CountryResolver {
  constructor(private countryService: CountryService) {}

  @Query(() => [CountryEntity])
  async getCountries(): Promise<CountryEntity[]> {
    return this.countryService.getCountries();
  }

  @Mutation(() => [CountryEntity])
  async seedCountries(): Promise<CountryEntity[]> {
    return this.countryService.seedCountries();
  }
}
