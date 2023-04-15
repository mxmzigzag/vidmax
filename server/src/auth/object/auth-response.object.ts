import { Field, ObjectType } from '@nestjs/graphql';
import { UserEntity } from 'src/users/entities/user.entity';

@ObjectType()
export class AuthResponse {
  @Field()
  user: UserEntity;

  @Field()
  access_token: string;
}
