import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { TokenResponse } from './object/token.object';

import { LoginInput } from './inputs/login.input';
import { CreateUserInput } from 'src/users/inputs/create-user.input';

import { AuthService } from './auth.service';

@Resolver('auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => TokenResponse)
  async signup(
    @Args('SignupInput') signupInput: CreateUserInput,
  ): Promise<TokenResponse> {
    return this.authService.signup(signupInput);
  }

  @Mutation(() => TokenResponse)
  async login(
    @Args('LoginInput') loginInput: LoginInput,
  ): Promise<TokenResponse> {
    return this.authService.login(loginInput.email, loginInput.password);
  }
}
