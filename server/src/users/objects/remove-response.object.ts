import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RemoveUserResponse {
  @Field()
  message: string;
}
