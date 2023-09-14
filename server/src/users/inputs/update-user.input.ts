import { Field, ID, InputType } from '@nestjs/graphql';
import { Roles } from '../types/user.types';

@InputType()
export class UpdateUserInput {
  @Field(() => ID)
  id: string;

  @Field()
  email?: string;

  @Field()
  password?: string;

  @Field()
  firstname?: string;

  @Field()
  lastname?: string;

  @Field()
  username?: string;

  @Field()
  role?: Roles;
}
