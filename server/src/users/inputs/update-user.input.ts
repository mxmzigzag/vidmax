import { Field, ID, InputType } from '@nestjs/graphql';
import { Roles } from '../types/user.types';

@InputType()
export class UpdateUserInput {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  password: string;

  @Field({ nullable: true })
  firstname: string;

  @Field({ nullable: true })
  lastname: string;

  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  role: Roles;
}
